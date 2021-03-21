const stockData = require('./gameDJ/dummyDatas');

const socketio = require('socket.io');

const Room = require('./gameDJ/room');
// const Disconnect = require('./gameDJ/disconnect');
const Game = require('./gameDJ/game');
// const Redis = require('./gameDJ/redis');




module.exports.init = (server) => {
    const io = socketio(server);
    io.on('connection', (socket) => {
        ///////////////////////////////////////
        //@ dummydata 날리는 socket event.
        let day = 0;
        const chart = () => {
            socket.emit('chart', stockData.datas[day++])
            console.log(socket.id,'님에게 [', day, '] 인덱스의 정보가 보내졌습니다.')
        }
        setInterval(chart, 2000);
        /////////////////////////////////////////

        //@ socket 연결 확인용 버튼 socket event.
        socket.on('test',(comment)=>{
            console.log(comment);
        });
        /////////////////////////////////////////
        console.log('connected user');
        socket.on('createPrivateRoom_Req', (profile) => new Room(io, socket).createPrivateRoom(profile));
        socket.on('joinRoom_Req', async (joinData) => { await new Room(io, socket).joinRoom(joinData) });
        socket.on('startGame_Req', async () => await new Game(io, socket).startGame());

    });
};

