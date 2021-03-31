import socketio from 'socket.io';

import Room from './gameDJ/room.js';
import Game from './gameDJ/game.js';
import Disconnect from './gameDJ/disconnect.js';
import Test from './gameDJ/testfile.js';
import Refresh from './gameDJ/refresh.js';
import Chat from './gameDJ/chat.js';

import { dbset, dbget, dblpush } from './gameDJ/redis.js';

export default {
    async init(server) {
        let io;
        function serverSetting(server) {
            return new Promise(function (resolve, reject) {
                io = socketio(server);
                resolve();
            });
        }
        await serverSetting(server);

        // db setting ------------------------------------- >>
        // let bidDummy = {
        //     0: {
        //         dummyID: 'dummyRoom',
        //     },
        // };
        // let askDummy = {
        //     10000000000: {
        //         dummyID: 'dummyRoom',
        //     },
        // };
        // dbset('bidList', JSON.stringify(bidDummy));
        // dbset('askList', JSON.stringify(askDummy));
        // db setting  ------------------------------------ <<

        // curPrice refresh --------------------------------- >>
        setInterval(async () => {
            new Refresh(io).renewalCurCoin(io);
            new Refresh(io).renewalInfo(io);
            new Refresh(io).refreshBid(io);
        }, 1000);

        // curPrice refresh --------------------------------- <<

        io.on('connection', (socket) => {
            // console.log('USER Connected : ', socket.id);

            socket.on('createPrivateRoom_Req', (playerID) => {
                new Room(io, socket).createPrivateRoom(playerID);
            });

            // data : {roomID : roomID, playerID : name}
            socket.on('joinRoom_Req', async (data) => {
                await new Room(io, socket).joinRoom(data);
            });
            // 클라에서 뮤직 셀렉트할때 socket.emit('settingsUpdate_Req')  발생함
            socket.on('settingsUpdate_Req', (data) => {
                new Room(io, socket).updateSettings(data);
            });
            socket.on('startGame_Req', () => {
                new Game(io, socket).startGame();
            });
            socket.on('disconnect', () =>
                new Disconnect(io, socket).onDisconnect()
            );

            socket.on('chartData_Req', () =>
                new Room(io, socket).sendChartData()
            );
            // room event << -----------------------------------------

            // In-game event ------------------------------------------ >>
            socket.on('buy_Req', (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                new Game(io, socket).buy(reqJson);
            });
            socket.on('sell_Req', (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                new Game(io, socket).sell(reqJson);
            });
            socket.on('cancelBid_Req', async (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                await new Game(io, socket).cancelBid(reqJson)
            });
            socket.on('cancelAsk_Req', async (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                await new Game(io, socket).cancelAsk(reqJson)
            });
            socket.on('bidTable_Req', async (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                await new Game(io, socket).sendBidTable(reqJson)
            });
            socket.on('askTable_Req', async (reqJson) => {
                if (!roomList[socket.roomID]) return 0;
                await new Game(io, socket).sendAskTable(reqJson)
            });

            // In-game event << -----------------------------------------
            // Chat event ------------------------------------------ >>
            socket.on('message', (data) =>
                new Chat(io, socket).messageReq(data)
            );
            // In-game event << -----------------------------------------
        });
    },
};
