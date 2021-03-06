import json
import time, datetime
import redis, copy
import coinName
import dummyJuka_Hoka2
import dummyJuka_Hoka3
from dotenv import load_dotenv
import os

load_dotenv()
redisIP = os.environ.get("REDIS")
redisPWD = os.environ.get("REDIS_PASSWORD")

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
        host=redisIP,
        password=redisPWD,
        port=6379,
        db=0)

except Exception as ex:
    print('Redis Error:', ex)

i = 0
last = len(dummyJuka_Hoka3.juka_list)

while True:
    juka_result = dummyJuka_Hoka3.juka_list[i]
    hoka_result = dict()
    ask_sum = 0
    bid_sum = 0

    hoka_result['date'] = dummyJuka_Hoka3.hoka_list[i]['date']
    hoka_result['total_ask_size'] = dummyJuka_Hoka3.hoka_list[i]['total_ask_size']
    hoka_result['total_bid_size'] = dummyJuka_Hoka3.hoka_list[i]['total_bid_size']
    hoka_result['ask_price'] = dummyJuka_Hoka3.hoka_list[i]['ask_price']
    hoka_result['bid_price'] = dummyJuka_Hoka3.hoka_list[i]['bid_price']
    juka_result['volUnit'] = 10000
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


