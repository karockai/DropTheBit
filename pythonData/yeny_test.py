from websocket import WebSocketApp
from threading import Thread
import json
import time, datetime
import redis, copy


start = 0
end = 0
data_make = []
prev_vol = 0
cur_vol = 0
prev_second = 0
cur_second = 0
pre_price = 0
cur_price = 0
juka_result = dict()
hoka_result = dict()
# request='[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BTC"]},{"format":"SIMPLE"}]'

try:
    conn = redis.StrictRedis(
        host='3.34.156.16',
        port=6379,
        db=0)
    # print("hmset", conn.set("curCoin", "hihhihihi"))
    # print("hgetall", conn.get("curCoin"))
    # print("hgetall", conn.delete("bitData"))
    # print("hgetall", conn.hgetall("bitData"))
except Exception as ex:
    print('Redis Error:', ex)


def on_message(ws, msg):
    global juka_result
    global hoka_result
    global prev_vol
    global cur_vol
    global data_make
    global prev_second
    global cur_second
    global pre_price
    global cur_price

    msg = json.loads(msg.decode('utf-8'))
    # print(json.dumps(msg))


    if (msg['ty'] == 'ticker'):
        juka_result = {}
        juka_result['date'] = str(datetime.datetime.fromtimestamp(msg['tms'] / 1000))
        # print(juka_result['date'])
        prev_second = cur_second
        # cur_second = datetime.datetime.now().second
        cur_second = juka_result['date'].split(' ')[1].split(':')[2].split('.')[0]
        # print(prev_second)
        # print(cur_second)
        # juka_result['type'] = 'juka'

        # 클라에게 데이터 전송은 1초 단위로 하는데, 초봉을 그릴거니까
        # 나는 1초단위로 데이터를 리스트에 다 담아두고 그 안에서 open, close, high, low 계산하고
        # 초가 변하면 클라에게 전송한다 (datetime 모듈 이용)
        data_make.append(msg['tp'])
        juka_result['open'] = data_make[0]
        juka_result['close'] = data_make[-1]
        juka_result['low'] = min(data_make)
        juka_result['high'] = max(data_make)

        prev_vol = cur_vol
        cur_vol = msg['atv']
        juka_result['volume'] = cur_vol - prev_vol
        juka_result['split'] = ''
        juka_result['dividend'] = ''
        juka_result['curPrice'] = msg['tp']
        juka_result['prePrice'] = pre_price


        # print(juka_result)
        # cur_price = msg['tp']


    # 호가는 모을 필요없이 계속 갱신하다가 주가를 보내줄때 조작해서 보내주면 되지 않을까?
    # 일단 조작하지말고 그냥 보내보고 맞는지 확인해보자
    elif (msg['ty'] == 'orderbook'):
        hoka_result = {}
        hoka_result['date'] = str(datetime.datetime.fromtimestamp(msg['tms'] / 1000))
        hoka_result['total_ask_size'] = msg['tas']
        hoka_result['total_bid_size'] = msg['tbs']
        for i in range(5):
            hoka_result[f'ask_price{i}'] = msg['obu'][i]['ap']
            hoka_result[f'bid_price{i}'] = msg['obu'][i]['bp']
            hoka_result[f'ask_size{i}'] = msg['obu'][i]['as']
            hoka_result[f'bid_size{i}'] = msg['obu'][i]['bs']
        # print(hoka_result)

    if (juka_result):
        cur_price = juka_result['curPrice']

        if (prev_second != cur_second):
            juka_result = json.dumps(juka_result)
            hoka_result = json.dumps(hoka_result)
            if (juka_result and hoka_result):
                conn.set("curCoin", juka_result)
                conn.set("bidTable", hoka_result)
                print("save juka : ", juka_result)
                print("save hoka : ", hoka_result)
            pre_price = cur_price
            print(data_make)
            data_make.clear()
    else:
        pass



def on_error(ws, msg):
    print(msg)

def on_close(ws):
    global start
    print("close")
    end = time.time()
    print('running time : ', (end - start))
    print ("Reconnect...")
    time.sleep(5)
    connect_websocket() # retry per 10 seconds

def on_open(ws):
    def run(*args):
        # request1 = '[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BCHA"]},{"format":"SIMPLE"}]'
        # request2 = '[{"ticket": "dantanamoo"}, {"type": "orderbook", "codes": ["KRW-MED.5"]}]'
        request1 = '[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BCHA"]},{"type": "orderbook", "codes": ["KRW-BCHA.5"]},{"format":"SIMPLE"}]'


        ws.send(request1)
        # ws.send(request2)
        ## time.sleep(5)
        ## ws.close()

    th = Thread(target=run, daemon=True)
    th.start()
    print('connection established')

def connect_websocket():
    ws = WebSocketApp("wss://api.upbit.com/websocket/v1",
                      on_message=on_message,
                      on_error=on_error,
                      on_close=on_close,
                      on_open=on_open)
    global start
    start = time.time()
    ws.run_forever()

if __name__ == "__main__":
    try:
        connect_websocket()
    except Exception as err:
        print(err)
        print("connect failed")