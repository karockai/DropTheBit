#!/usr/bin/env node

import sockets from '../sockets.js';
import express from 'express';
const app = express();
import redis from 'redis';
import util from 'util';
import dotenv from 'dotenv';
dotenv.config();
let client = redis.createClient({ host: process.env.REDIS, password: process.env.REDIS_PASSWORD});
client.on('error', function (error) {
    console.error(error);
});
const dbhset = util.promisify(client.hset).bind(client);

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
