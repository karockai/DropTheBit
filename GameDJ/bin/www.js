#!/usr/bin/env node

// const app = require('../app');
// const sockets = require('../sockets');

import app from '../app.js';
import sockets from '../sockets.js';
import dotenv from 'dotenv';
dotenv.config();
import webhook from '../slack.js';
import si from 'systeminformation';

global.chartData = [];
global.roomList = {};
global.askList = {};
global.bidList = {};
global.curCoin = {};
global.curPrice = 0;
global.prePrice = 0;
global.todayRank = [
    {
        playerID: 'Hello',
        asset: 100000000,
    },
    {
        playerID: '안녕하세요',
        asset: 100000000,
    },
    {
        playerID: 'こんにちは',
        asset: 100000000,
    },
    {
        playerID: 'Bonjour',
        asset: 100000000,
    },
    {
        playerID: 'Guten Tag',
        asset: 100000000,
    },
    {
        playerID: 'здравствуйте ',
        asset: 100000000,
    },
    {
        playerID: 'Hola',
        asset: 100000000,
    },
    {
        playerID: '你好',
        asset: 100000000,
    },
    {
        playerID: 'Xin chào',
        asset: 100000000,
    },
    {
        playerID: 'Namaste',
        asset: 100000000,
    },
];

// 차트를 바로 그리기 위한 curCoin 50개 리스트
// for stress test
global.playerStress = 0;
global.publicRoomID = 'EnjoyPublicGame';

app.get('/status', (req,res)=>{
    si.currentLoad().then(cpuData=>{
        // console.log(data.currentLoad, data.currentLoadSystem, data.currentLoadUser, data.currentLoadIdle);
        si.mem().then(memData=>{
            let status = {};
            status['cpuLoad'] = cpuData.currentLoad;
            status['memUsed'] = memData.used / memData.total * 100;
            console.log(status, "Return");
            res.send(status);
        })
    });

})

const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server listening on port ${server.address().port}`);
    // Send the notification
    webhook.sendMessage(`시작합니다. 삐빅`)
});

sockets.init(server);
