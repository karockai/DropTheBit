#!/usr/bin/env node

import sockets from '../sockets.js';
import express from 'express';
const app = express();
import redis from 'redis';
import util from 'util';
import dotenv from 'dotenv';
dotenv.config();
let client = redis.createClient({ host: process.env.REDIS });
client.on('error', function (error) {
    console.error(error);
});
const dbhset = util.promisify(client.hset).bind(client);

global.chartData = [];
global.bidList = {};
global.askList = {};
global.roomList = {};
global.curCoin = {};
global.exTable = {};
global.prePrice = 0;

// 차트를 바로 그리기 위한 curCoin 50개 리스트
// for stress test
global.playercnt = 0;
// for 공방
global.publicRoom = false;
let serverList = (process.env.SERVERS).split(' ');
let ipList = (process.env.IPS).split(' ');
// console.log('servers', serverList);
// console.log('ips', ipList);
for(let idx=0; idx<serverList.length; idx++){
    console.log(serverList[idx], ipList[idx]);
    dbhset(serverList[idx], 'room', 0, 'player', 0, 'ip', ipList[idx]);
}
const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server listening on port ${server.address().port}`);
});

sockets.init(server);
