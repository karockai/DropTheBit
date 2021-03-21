const socketio = require('socket.io');

const Room = require('./gameDJ/rooms');
const Disconnect = require('./gameDJ/disconnect');
const Game = require('./gameDJ/game');
const Redis = require('./gameDJ/redis');




module.exports.init = (server) => {
    const io = socketio(server);
    io.on('connection', (socket) => {
        console.log('connected user');
        socket.on('createPrivateRoom_Req', (profile) => new Room(io, socket).createPrivateRoom(profile));
        socket.on('joinRoom_Req', async (joinData) => { await new Room(io, socket).joinRoom(joinData) });
        socket.on('startGame_Req', async () => await new Game(io, socket).startGame());
    });
};
