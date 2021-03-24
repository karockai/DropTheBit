import {
    dbset,
    dbget,
    dbhset,
    dbhget,
    dbhgetall,
    dbrpush,
    dblpush, 
    dblrem,
    dblrange, 
    dbllen 
} from './redis.js';
import { nanoid } from 'nanoid';
import fs from 'fs';


class Room {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
    
    // data : {playerID : name}
    async createPrivateRoom(data) {
        const { socket } = this;
        const roomID = nanoid(15);
        const socketID = socket.id;
        let playerInfo = {
            playerID: data.playerID,
            cash: '100000000',
            asset: '100000000',
            coinVol: '0',
            bid: {},
            ask: {}
        };

        let roomInfo = {
            gameTime: '0',
            music: '',
        };

        roomInfo[socketID] = playerInfo;
        console.log('create', roomInfo);
        let strplayerInfo = JSON.stringify(playerInfo);
        await dbhset(roomID, socketID, strplayerInfo);
        await dbhset(roomID, 'gameTime', 0);
        await dbhset(roomID, 'music', '');
        await dbhset('bgmList', 'Deja_Vu.mp3', 265);
        await dbhset('bgmList', 'King_Conga.mp3', 145);
        await dbhset('bgmList', 'Mausoleum_Mash.mp3', 176);
        dblpush('roomList', roomID);
        socket.roomID = roomID;
        socket.join(roomID);
        let musicList = ['Deja_Vu.mp3', 'King_Conga.mp3', 'Mausoleum_Mash.mp3'];
        socket.emit('createPrivateRoom_Res', {
        roomInfo: roomInfo,
        roomID: roomID,
        musicList: musicList
    })
    }

    // data : {roomID : roomID, playerID : name}
    async joinRoom(data) {
        const { io, socket } = this;
        const roomID = data.roomID;
        let roomInfo = {};
        let socketID = socket.id;

        let playerInfo = {
            playerID: data["playerID"],
            cash: '100000000',
            asset: '100000000',
            coinVol: '0',
            bid: {},
            add: {}
        };
        console.log('joinRoom', data.playerID);
        // roomInfo[socketID] = playerInfo;
        let strplayerInfo = JSON.stringify(playerInfo);
        await dbhset(roomID, socketID, strplayerInfo);

        let rawRoom = await dbhgetall(roomID);
        for (const [key, value] of Object.entries(rawRoom)) {
            roomInfo[key] = JSON.parse(value);
        }
        console.log('joinRoom', roomInfo);
        socket.roomID = roomID;
        socket.join(roomID);
        console.log('playerInfo', playerInfo);
        io.to(roomID).emit('joinRoom_Res', roomInfo);
        console.log('someone joined a room');
        console.log('roomID : ', roomID);
        console.log('newbie :', data.playerID);
    }

    // data : {roomID : roomID, musicName : 클라에서 선택한 음악명 (select 창)}
    // 해당 음악의 길이만큼 게임의 time 설정
    async updateSettings(data) {
        const { io, socket } = this;
        const roomID = data.roomID;
        const musicName = data.musicName;
        const musicTime = Number(await dbhget('bgmList', musicName));
        console.log('update ', musicName, musicTime);
        console.log(await dbhgetall(roomID));
        await dbhset(roomID, 'gameTime', musicTime);
        await dbhset(roomID, 'music', musicName);
        console.log('update ',await dbhget(roomID, 'music'));
        console.log('update ',await dbhget(roomID, 'gameTime'));
        io.to(data.roomID).emit('settingsUpdate_Res', musicTime);
    }
}

export default Room;
