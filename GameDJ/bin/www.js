#!/usr/bin/env node

// const app = require('../app');
// const sockets = require('../sockets');

import app from '../app.js';
import sockets from '../sockets.js';
import dotenv from 'dotenv'
dotenv.config();

global.chartData = [];
global.bidList = {};
global.askList = {};
global.roomList = {};
global.bgmList = {
    Deja_Vu: 265,
    King_Conga: 145,
    Mausoleum_Mash: 176,
};
global.curCoin = {};
global.exTable = {};
global.prePrice = 0;

// 차트를 바로 그리기 위한 curCoin 50개 리스트
// for stress test
global.playerStress = 0;
// for 공방
global.publicRoomID = 'AAAAAAAAAAAAAAA';
const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server listening on port ${server.address().port}`);
    console.log(process.env.REDIS);
});

sockets.init(server);

// /**
//  * Module dependencies.
//  */

//  var app = require('../app');
//  var debug = require('debug')('dropthebeat:server');
//  var http = require('http');

//  /**
//   * Get port from environment and store in Express.
//   */

//  var port = normalizePort(process.env.PORT || '3000');
//  app.set('port', port);

//  /**
//   * Create HTTP server.
//   */

//  var server = http.createServer(app);

//  /**
//   * Listen on provided port, on all network interfaces.
//   */

//  server.listen(port);
//  server.on('error', onError);
//  server.on('listening', onListening);

//  /**
//   * Normalize a port into a number, string, or false.
//   */

//  function normalizePort(val) {
//    var port = parseInt(val, 10);

//    if (isNaN(port)) {
//      // named pipe
//      return val;
//    }

//    if (port >= 0) {
//      // port number
//      return port;
//    }

//    return false;
//  }

//  /**
//   * Event listener for HTTP server "error" event.
//   */

//  function onError(error) {
//    if (error.syscall !== 'listen') {
//      throw error;
//    }

//    var bind = typeof port === 'string'
//      ? 'Pipe ' + port
//      : 'Port ' + port;

//    // handle specific listen errors with friendly messages
//    switch (error.code) {
//      case 'EACCES':
//        console.error(bind + ' requires elevated privileges');
//        process.exit(1);
//        break;
//      case 'EADDRINUSE':
//        console.error(bind + ' is already in use');
//        process.exit(1);
//        break;
//      default:
//        throw error;
//    }
//  }

//  /**
//   * Event listener for HTTP server "listening" event.
//   */

//  function onListening() {
//    var addr = server.address();
//    var bind = typeof addr === 'string'
//      ? 'pipe ' + addr
//      : 'port ' + addr.port;
//    debug('Listening on ' + bind);
//  }
