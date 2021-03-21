import datas from './gameDJ/dummyDatas.js';
const stockData = datas;

import socketio from 'socket.io';

import Room from './gameDJ/room.js';
import Game from './gameDJ/game.js';



let gameTime = 10000;
export default {

    init(server) {
        const io = socketio(server);

        io.on('connection', (socket) => {

            console.log("connected");

            ///////////////////////////////////////
            //@ dummydata 날리는 socket event.
            let day = 0;
            const chart = () => {
                socket.emit('chart', stockData[
                    day++
                ]);
                console.log(socket.id, '님에게 [', day, '] 인덱스의 정보가 보내졌습니다.');
            }
            setInterval(chart, 2000);
            /////////////////////////////////////////

            //@ socket 연결 확인용 버튼 socket event.
            socket.on('test', (comment) => {
                console.log(comment);
            });
            /////////////////////////////////////////
            //@ buy / sell interaction
            let myCash = 100000;
            const refresh = (data) => {
                console.log(socket.id, '님의 자산이 갱신되었습니다.')
                socket.emit('asset', {
                    cash: data.cash,
                    asset: data.asset,
                })
            }
            socket.on('buy', (data) => {
                console.log(socket.id, '님의 [ 가격', data.currentBid,', 갯수', data.currentVolume ,'] 매수 주문이 체결되었습니다.')
                socket.emit('buy', 3000);
                refresh({
                    cash: myCash - data.currentBid * data.currentVolume,
                    asset: myCash,
                })
            });
            socket.on('sell', (data) => {
                console.log(socket.id, '님의 [ 가격', data.currentBid,', 갯수', data.currentVolume ,'] 매도 주문이 체결되었습니다.');
                socket.emit('sell', 1000000);
                refresh({
                    cash: myCash + data.currentBid * data.currentVolume,
                    asset: myCash,
                })
            })
            /////////////////////////////////////////
            console.log('connected user');
            socket.on('createPrivateRoom_Req', (profile) => new Room(io, socket).createPrivateRoom(profile));
            socket.on('joinRoom_Req', async (joinData) => { await new Room(io, socket).joinRoom(joinData) });
            // 클라에서 뮤직 셀렉트할때 socket.emit('settingsUpdate_Req')  발생함 
            socket.on('settingsUpdate_Req', (music_name) => new Room(io, socket).updateSettings(music_name));
            socket.on('startGame_Req', async () => await new Game(io, socket).startGame());
<<<<<<< HEAD
            // socket.on('-');
=======
>>>>>>> e868db3e098535d86d11f96d99a72958d9a782e5
        });
    }
}

