from websocket import WebSocketApp
from threading import Thread
import json
import time, datetime
import redis, copy
import coinName
import dummyJuka_Hoka1
import dummyJuka_Hoka2

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

try:
    conn = redis.StrictRedis(
        host='3.34.156.16',
        port=6379,
        db=0)

except Exception as ex:
    print('Redis Error:', ex)

i = 0
last = len(dummyJuka_Hoka2.juka_list)

while True:
    juka_result = dummyJuka_Hoka2.juka_list[i]
    hoka_result = dummyJuka_Hoka2.hoka_list[i]
    juka_result = json.dumps(juka_result, ensure_ascii=False)
    hoka_result = json.dumps(hoka_result, ensure_ascii=False)
    conn.set("curCoin", juka_result)
    conn.set("bidTable", hoka_result)
    print(juka_result)
    print(hoka_result)
    time.sleep(1)
    i += 1
    if i == last:
        i = 0


