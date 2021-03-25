# from websocket import WebSocketApp
# from threading import Thread
# import json
# import time, datetime
# import redis
#
# start = 0
# end = 0
# request='[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BTC"]},{"format":"SIMPLE"}]'
#
# try:
#     conn = redis.StrictRedis(
#         host='13.209.69.195',
#         port=6379,
#         db=0)
#     # print("hmset", conn.set("curCoin", "hihhihihi"))
#     # print("hgetall", conn.get("curCoin"))
#     # print("hgetall", conn.delete("bitData"))
#     # print("hgetall", conn.hgetall("bitData"))
# except Exception as ex:
#     print('Redis Error:', ex)
#
#
# class UpbitReal:
#     def __init__(self, request, callback=print):
#         self.request = request
#         self.callback = callback
#         self.ws = WebSocketApp(
#             url="wss://api.upbit.com/websocket/v1",
#             on_message=lambda ws, msg: self.on_message(ws, msg),
#             on_error=lambda ws, msg: self.on_error(ws, msg),
#             on_close=lambda ws:     self.on_close(ws),
#             on_open=lambda ws:     self.on_open(ws))
#         self.running = False
#
#     def on_message(self, ws, msg):
#         msg = json.loads(msg.decode('utf-8'))
#         juka_result = dict()
#         now = datetime.datetime.now()
#         # juka_result['time'] = msg['tdt'] + msg['ttm']    -> UTC
#         juka_result['time'] = str(now)
#         juka_result['cur_price'] = msg['tp']
#         juka_result['acc_volume'] = msg['atv']
#         juka_result = json.dumps(juka_result)
#         # print(type(juka_result))
#         # conn.hset("curCoin", "time", str(now), "curPrice",msg['tp'], "accVolume", msg['atv'])
#         time.sleep(1)
#         conn.set("curCoin", juka_result)
#         # print(conn.get("curCoin"))
#         # self.callback(msg)
#
#     def on_error(self, ws, msg):
#         self.callback(msg)
#
#     def on_close(self, ws):
#         self.callback("closed")
#         end = time.time()
#         print('running time : ', end - start)
#         self.running = False
#
#     def on_open(self, ws):
#         th = Thread(target=self.activate, daemon=True)
#         th.start()
#
#     def activate(self):
#         self.ws.send(self.request)
#         while self.running:
#             time.sleep(1)
#         self.ws.close()
#
#     def start(self):
#         self.running = True
#         self.ws.run_forever()
#
#
# if __name__ == "__main__":
#     real = UpbitReal(request=request)
#     start = time.time()
#     real.start()




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
# request='[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BTC"]},{"format":"SIMPLE"}]'

try:
    conn = redis.StrictRedis(
        host='3.34.156.16',
        port=6379,
        db=1)
    # print("hmset", conn.set("curCoin", "hihhihihi"))
    # print("hgetall", conn.get("curCoin"))
    # print("hgetall", conn.delete("bitData"))
    # print("hgetall", conn.hgetall("bitData"))
except Exception as ex:
    print('Redis Error:', ex)


def on_message(ws, msg):
    global prev_vol
    global cur_vol
    global data_make
    global prev_second
    global cur_second
    global pre_price
    global cur_price

    msg = json.loads(msg.decode('utf-8'))
    # print(msg)
    juka_result = dict()

    timestamp = str(datetime.datetime.fromtimestamp(msg['tms'] / 1000))
    # 클라에게 데이터 전송은 1초 단위로 하는데, 초봉을 그릴거니까
    # 나는 1초단위로 데이터를 리스트에 다 담아두고 그 안에서 open, close, high, low 계산하고
    # 초가 변하면 클라에게 전송한다 (datetime 모듈 이용)
    prev_second = cur_second
    cur_second = datetime.datetime.now().second

    data_make.append(msg['tp'])
    juka_result['date'] = timestamp
    juka_result['open'] = data_make[0]
    juka_result['close'] = data_make[-1]
    juka_result['low'] = min(data_make)
    juka_result['high'] = max(data_make)

    # print(cur_second)

    prev_vol = cur_vol
    cur_vol = msg['atv']
    juka_result['volume'] = cur_vol - prev_vol
    juka_result['split'] = ''
    juka_result['dividend'] = ''
    juka_result['curPrice'] = msg['tp']
    juka_result['prePrice'] = pre_price
    juka_result = json.dumps(juka_result)
    # time.sleep(1) # 1초 단위
    # print(juka_result)
    cur_price = msg['tp']
    print(juka_result)
    if (prev_second != cur_second):

        if (juka_result):
            conn.set("curCoin", juka_result)
        pre_price = cur_price
        # print(pre_price)
        # print(cur_second)
        print(juka_result)
        data_make.clear()



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
        request1 = '[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BCHA"]},{"format":"SIMPLE"}]'
        # request2 = '[{"ticket": "dantanamoo"}, {"type": "orderbook", "codes": ["KRW-MED.5"]}]'
        # request1 = '[{"ticket":"dantanamoo"},{"type":"ticker","codes":["KRW-BCHA"]},{"type": "orderbook", "codes": ["KRW-BCHA.5"]},{"format":"SIMPLE"}]'

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




# if __name__ == "__main__":
#     ws = WebSocketApp("wss://api.upbit.com/websocket/v1",
#                       on_message=on_message,
#                       on_error=on_error,
#                       on_close=on_close,
#                       on_open=on_open)
#     start = time.time()
#     ws.run_forever()