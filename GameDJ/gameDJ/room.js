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
            gameInfo: '0',
            music: '',
        };

        roomInfo[socketID] = playerInfo;
        console.log('create', roomInfo);
        let strplayerInfo = JSON.stringify(playerInfo);
        await dbhset(roomID, socketID, strplayerInfo);
        dblpush('roomList', roomID);
        // console.log('roomList : ', await dblrange('roomList', 0, -1));
        socket.roomID = roomID;
        socket.join(roomID);
        let musicList = fs.readdir('../PartyPeople/src/audios', (err, filelist)=> {
            console.log(filelist);
            socket.emit('createPrivateRoom_Res', {
            roomInfo: roomInfo,
            roomID: roomID,
            musicList: filelist
        })
    });

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

        // 'front'
        // socket.on('loadOhterPlayer', players);
        // players.forEach((player) => putPlayer(player));
    }

    // data : {roomID : roomID, musicName : 클라에서 선택한 음악명 (select 창), musicTime : musicTime}
    // 해당 음악의 길이만큼 게임의 time 설정
    async updateSettings(data) {
        const { socket } = this;
        // 클라에서 music.duration 으로 길이 구해서 보내주면 게임타임 세팅
        // console.log(getDuration(Bit)['PromiseResult']);
        // 위와 같이 하면 구할 수 있음 

        const roomID = data.roomID;
        dbhset(roomID, music, data.musicName);
        dbhset(roomID, gameTime, data.musicTime);
        socket.to(data.roomID).emit('settingsUpdate_Res', data);
    }
}

export default Room;
