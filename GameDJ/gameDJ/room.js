import { dbset, dbget, dbhset, dbhget } from './redis.js';
import { nanoid } from 'nanoid';

class Room {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async createPrivateRoom(playerID) {
        const { socket } = this;
        const roomID = nanoid(15);
        const socketID = socket.id;
        let playerInfo = {
            playerID: playerID,
            cash: '100000000',
            asset: '100000000',
            coinVol: '0',
            bid: {},
        };

        let roomInfo = {
            gameTime: '0',
            music: '',
        };

        roomInfo[socketID] = playerInfo;
        let strplayerInfo = JSON.stringify(playerInfo);
        await dbhset(roomID, socketID, strplayerInfo);
        console.log(roomID);
        socket.roomID = roomID;
        console.log(socket);
        socket.join(roomID);
        socket.emit('createPrivateRoom_Res', {
            roomInfo: roomInfo,
            roomID: roomID,
        });
    }

    // data : {roomID : roomID, playerID : name}
    async joinRoom(data) {
        const { io, socket } = this;
        const roomID = data.roomID;
        let roomInfo = await dbhgetall(roomID);
        let socketID = socket.id;

        let playerInfo = {
            playerID: data.playerID,
            cash: '100000000',
            asset: '100000000',
            coinVol: '0',
            bid: {},
        };

        roomInfo[socketID] = playerInfo;
        let strplayerInfo = JSON.stringify(playerInfo);
        dbhset(roomID, socketID, strplayerInfo);
        socket.roomID = roomID;
        socket.join(roomID);
        socket.to(roomID).emit('NewbieInRoom', roomInfo);

        // players.push(socket);
        const players = Array.from(await io.in(socket.roomID).allSockets());
        socket.emit('loadOhterPlayer', roomInfo);

        console.log('someone joined a room');
        console.log('roomID : ', roomID);
        console.log('newbie :', data.playerID);

        // 'front'
        // socket.on('loadOhterPlayer', players);
        // players.forEach((player) => putPlayer(player));
    }
    
    // front : selet창에서 변할때마다 프론트단 updateSettings 함수를 실행한다
    // front - updateSettings : music_name, gameTime (music.duration으로 구함) 을 서버로 넘겨준다
    // sockets.js 에서 back - updateSettings를 호출한다 
    // data : {music_name : 클라에서 선택한 음악명 (select 창), gameTime : gameTime}
    async updateSettings(data) {
        const { socket } = this;
        const roomID = socket.roomID;
        dbhset(roomID, music, data.music_name);
        dbhset(roomID, gameTime, data.gameTime);
        // front - 넘겨준 데이터를 받아 화면에 표시한다 
        socket.to(socket.roomID).emit('settingsUpdate_Res', {music_name : music_name, gameTime : gameTime});
    }
}

export default Room;
