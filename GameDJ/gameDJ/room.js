import { dbset, dbget } from "./redis.js";
import { nanoid } from 'nanoid';

class Room {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    createPrivateRoom(profile) {
        const { socket } = this;
        const roomID = nanoid(15);
        games[roomID] = {
            gameTime: 60 * 1000, // 게임 시간
            music: ''
        };

        games[roomID][socket.id] = {};
        games[roomID][socket.id][playerID] = profile[playerID];
        games[roomID][socket.id][cash] = 100000000;
        games[roomID][socket.id][asset] = 100000000;
        games[roomID][socket.id][coinVol] = 0;

        console.log("Room Created");
        console.log("games : ", games[roomID]);

        socket.playerID = profile;
        socket.roomID = roomID;
        socket.join(roomID);
        socket.emit('createPrivateRoom_Res', roomID);
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

    // data : 클라에서 선택한 음악명 (select 창)
    // 해당 음악의 길이만큼 게임의 time 설정 
    updateSettings(music_name) {
        const { socket } = this;
        // games[socket.roomID][gameTime] = 음악 길이 ;
        // 음악길이는 여기서 세팅하지말고, 클라에서 music.duration 으로 길이 구해서 보내주고 
        // start game 버튼 누르면 그때 games[roomID][time] 을 세팅해주는 것으로 하자 
        games[socket.roomID][music] = music_name;
        socket.to(socket.roomID).emit('settingsUpdate_Res', music_name);
        console.log(games[socket.roomID]);
    }

}

export default Room;