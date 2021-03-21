// const { nanoid } = require('nanoid');

// const {
//     dbget,
//     dbset
// } = require('./redis');



class Room {
    constructor (io, socket) {
        this.io = io;
        this.socket = socket;
    }

    createPrivateRoom(profile) {
        const {socket } = this;
        // const roomID = nanoid(15);
        const roomID ='dskljfjsjfsofisjfiojsdf';
        games[roomID] = {
            gameTime : 60 * 1000, // 게임 시간
            music : ''
        };

        games[roomID][socket.id] = {};
        games[roomID][socket.id][playerID] = profile[playerID];
        games[roomID][socket.id][cash] = 100000000;
        games[roomID][socket.id][coinVol] = 0;
        
        console.log("Room Created");
        console.log("games : ", games[roomID]);

        socket.playerID = profile;
        socket.roomID = roomID;
        socket.join(roomID);
        socket.emit('createPrivateRoom_Res', roomID );
        // 'front'
        // createPrivateRoom_res 구현
    }

    async joinroom(joinData) {
        const { io, socket } = this;
        const roomID = joindata[roomID];
        const plyers = Array.from(await io.in(roomID).allSockets());


        games[roomID][socket.id] = {};
        games[roomID][socket.id][playerID] = joinRoom[profile][playerID];
        games[roomID][socket.id][cash] = 100000000;
        games[roomID][socket.id][coinVol] = 0;

        socket.playerID = joinData[profile];
        socket.join(roomID);
        socket.roomID = roomID;
        socket.to(roomID).emit('joinRoom_Res', joinData[profile]);

        players.push(socket);
        socket.emit('loadOhterPlayer', players);

        // 'front'
        // socket.on('loadOhterPlayer', players);
        // players.forEach((player) => putPlayer(player));
    }
}

export default Room;