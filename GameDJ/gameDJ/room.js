import {
    dbset,
    dbget,
    dbhset,
    dbhget,
    dbhmset,
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
        // 코인이름 구하기
        // console.log(JSON.parse(await dbget("bidTable"))['coinName']);

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
            music: 'Select Music',
            roomLeader: socket.id
        };
        
        console.log('create', roomInfo);
        await dbhmset(roomID, 'gameTime', 0, 'music', 'Select Music', 'roomLeader', socket.id);
        await dbhset(roomID, socketID, JSON.stringify(playerInfo));
        await dbhmset('bgmList', 'Deja_Vu.mp3', 265, 'King_Conga.mp3', 145, 'Mausoleum_Mash.mp3', 176);
        dblpush('roomList', roomID);
        // console.log(await dbhgetall(roomID));
        socket.roomID = roomID;
        socket.join(roomID);
        let musicList = ['Deja_Vu.mp3', 'King_Conga.mp3', 'Mausoleum_Mash.mp3'];
        roomInfo = await dbhgetall(roomID);
        roomInfo[socket.id] = JSON.parse(roomInfo[socket.id]);
        
        // console.log(roomInfo);
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
        // 아이디 입력안하면 실행 안됨 
        if(data.playerID){
            let playerInfo = {
                playerID: data["playerID"],
                cash: '100000000',
                asset: '100000000',
                coinVol: '0',
                bid: {},
                add: {}
            };
            // roomInfo[socketID] = playerInfo;
            let strplayerInfo = JSON.stringify(playerInfo);
            await dbhset(roomID, socketID, strplayerInfo);
    
            let rawRoom = await dbhgetall(roomID);
            for (const [key, value] of Object.entries(rawRoom)) {
                if (key.length === 20){
                    roomInfo[key] = JSON.parse(value);
                }
                else{
                    roomInfo[key] = value;
                }
            }
            console.log('joinRoom', roomInfo);
            socket.roomID = roomID;
            socket.join(roomID);
            io.to(roomID).emit('joinRoom_Res', {roomID:roomID, roomInfo: roomInfo});
            console.log('someone joined a room');
            console.log('roomID : ', roomID);
            console.log('newbie :', data.playerID);
        }
    }

    // data : {roomID : roomID, musicName : 클라에서 선택한 음악명 (select 창)}
    // 해당 음악의 길이만큼 게임의 time 설정
    async updateSettings(data) {
        const { io, socket } = this;
        const roomID = data.roomID;
        const musicName = data.musicName;
        const musicTime = Number(await dbhget('bgmList', musicName));
        // console.log('update ', musicName, musicTime);
        // console.log(await dbhgetall(roomID));
        await dbhset(roomID, 'gameTime', musicTime);
        await dbhset(roomID, 'music', musicName);
        // console.log('update ',await dbhget(roomID, 'music'));
        // console.log('update ',await dbhget(roomID, 'gameTime'));
        io.to(roomID).emit('settingsUpdate_Res', {musicName : musicName, musicTime : musicTime});
    }
}

export default Room;
