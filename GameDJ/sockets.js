import socketio from 'socket.io';

import Room from './gameDJ/room.js';
import Game from './gameDJ/game.js';
import Disconnect from './gameDJ/disconnect.js';
import Refresh from './gameDJ/refresh.js';
import Chat from './gameDJ/chat.js';

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

        // curPrice refresh --------------------------------- >>
        setInterval(async () => {
            new Refresh(io).renewalCurCoin(io);
            new Refresh(io).renewalInfo(io);
            new Refresh(io).refreshBid(io);
            prePrice = curPrice;
        }, 1000);

        // curPrice refresh --------------------------------- <<
        // Room event ------------------------------------------ >>
        io.on('connection', (socket) => {
            socket.on('createPrivateRoom_Req', (playerID) => {
                new Room(io, socket).createPrivateRoom(playerID);
            });
            // data : {playerID : name}
            socket.on('joinPublic_Req', (playerID) => {
                new Room(io, socket).checkPublic(playerID);
            });
            // data : {roomID : roomID, playerID : name}
            socket.on('joinRoom_Req', (data) => {
                if (!roomList.hasOwnProperty(data.roomID)) return 0;
                new Room(io, socket).joinRoom(data);
            });
            // 클라에서 뮤직 셀렉트할때 socket.emit('settingsUpdate_Req')  발생함
            socket.on('settingsUpdate_Req', (data) => {
                if (!roomList[socket.roomID]) return 0;
                new Room(io, socket).updateSettings(data);
            });
            socket.on('backToLobby', (roomID) => {
                if (roomList[roomID]['gaming'] === false) {
                    new Room(io, socket).playerReinit(roomID);
                } else {
                    new Room(io, socket).joinRoom({
                        roomID: roomID,
                        playerID: roomList[roomID][socket.id]['playerID'],
                    });
                }
            });
            socket.on('lobbyBoard', (data) => {
                if (!roomList[socket.roomID]) return 0;
                socket.emit(
                    'lobbyBoard',
                    roomList[socket.roomID]['leaderBoard']
                );
            });
            socket.on('startGame_Req', (musicData) => {
                if (!roomList[socket.roomID]) return 0;
                new Game(io, socket).startGame(musicData);
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
                if (!roomList[reqJson['roomID']]['gaming']) return 0;
                new Game(io, socket).buy(reqJson);
            });
            socket.on('sell_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]['gaming']) return 0;
                new Game(io, socket).sell(reqJson);
            });
            socket.on('cancelBid_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]['gaming']) return 0;
                new Game(io, socket).cancelBid(reqJson);
            });
            socket.on('cancelAsk_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]['gaming']) return 0;
                new Game(io, socket).cancelAsk(reqJson);
            });
            socket.on('bidTab_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]) return 0;
                new Game(io, socket).sendBidTab(reqJson);
            });
            socket.on('bidTable_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]) return 0;
                new Game(io, socket).sendBidTable(reqJson);
            });
            socket.on('askTable_Req', (reqJson) => {
                if (!roomList[reqJson['roomID']]) return 0;
                new Game(io, socket).sendAskTable(reqJson);
            });
            socket.on('RefreshBid_Req', () => {
                if (!roomList[socket.roomID]) return 0;
                // let curPrice = curCoin['curPrice'];
                socket.emit('RefreshBid_Res', curPrice);
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
