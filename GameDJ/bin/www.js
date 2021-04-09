#!/usr/bin/env node

// const app = require('../app');
// const sockets = require('../sockets');

import app from '../app.js';
import sockets from '../sockets.js';
import dotenv from 'dotenv';
dotenv.config();

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
const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server listening on port ${server.address().port}`);
});

sockets.init(server);
