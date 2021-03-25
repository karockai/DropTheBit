from websocket import WebSocketApp
from threading import Thread
import json
import time, datetime
import redis

start = 0
end = 0
data_make = []
prev_vol = 0
cur_vol = 0
prev_second = 0
cur_second = 0
prev_price = 0
cur_price = 0
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
    global prev_second
    global cur_second

    msg = json.loads(msg.decode('utf-8'))
    hoka_result = dict()
    timestamp = str(datetime.datetime.fromtimestamp(msg['tms'] / 1000))
    prev_second = cur_second
    cur_second = datetime.datetime.now().second

    hoka_result['date'] = timestamp
    hoka_result['total_ask_size'] = msg['tas']
    hoka_result['total_bid_size'] = msg['tbs']


    for i in range(5):
        hoka_result[f'ask_price{i}'] = msg['obu'][i]['ap']
        hoka_result[f'bid_price{i}'] = msg['obu'][i]['bp']
        hoka_result[f'ask_size{i}'] = msg['obu'][i]['as']
        hoka_result[f'bid_size{i}'] = msg['obu'][i]['bs']

    hoka_result = json.dumps(hoka_result)
    # time.sleep(1)
    if (prev_second != cur_second):
        if (hoka_result):
            conn.set("bidTable", hoka_result)
            # print(hoka_result)
        # print(timestamp)

def on_error(ws, msg):
    print(msg)

def on_close(ws):
    print("close")
    global start
    end = time.time()
    print('running time : ', (end - start))
    print ("Reconnect...")
    time.sleep(10)
    connect_websocket() # retry per 10 seconds

def on_open(ws):
    def run(*args):
        # request1 = '[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BTC"]},{"format":"SIMPLE"}]'
        request2 = '[{"ticket": "dantanamoo"},{"type": "orderbook", "codes": ["KRW-BCHA.5"]},{"format":"SIMPLE"}]'
#
        # ws.send(request1)
        ws.send(request2)
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


