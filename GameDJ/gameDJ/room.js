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
    dbllen,
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
        let playerID = data.playerID;
        let playerInfo = {
            playerID: playerID,
            cash: 100000000,
            asset: 100000000,
            coinVol: 0,
            avgPrice: 0,
            bid: {},
            ask: {},
        };

        let roomInfo = {
            gameTime: 10,
            music: 'King_Conga.mp3',
            roomLeader: socket.id,
            gaming : false,
        };

        roomInfo[socketID] = playerInfo;
        roomList[roomID] = roomInfo;

        socket.roomID = roomID;
        socket.join(roomID);
        let musicList = ['Deja_Vu.mp3', 'King_Conga.mp3', 'Mausoleum_Mash.mp3'];

        socket.emit('createPrivateRoom_Res', {
            roomInfo: roomInfo,
            roomID: roomID,
            musicList: musicList,
        });
    }

    // data : {roomID : roomID, playerID : name}
    async joinRoom(data) {
        const { io, socket } = this;
        const roomID = data.roomID;
        let roomInfo = roomList[roomID];
        let socketID = socket.id;

        if (data.playerID) {
            let playerInfo = {
                playerID: data['playerID'],
                cash: 100000000,
                asset: 100000000,
                coinVol: 0,
                avgPrice: 0,
                bid: {},
                ask: {},
            };
            roomInfo[socketID] = playerInfo;
            roomList[roomID] = roomInfo;

            socket.roomID = roomID;
            socket.join(roomID);
            io.to(roomID).emit('joinRoom_Res', {
                roomID: roomID,
                roomInfo: roomInfo,
            });
        }
    }

    sendChartData() {
        const { io, socket } = this;
        let roomID = socket.roomID;
        io.to(roomID).emit('chartData_Res', { chartData: chartData });
    }

    // data : {roomID : roomID, musicName : 클라에서 선택한 음악명 (select 창)}
    // 해당 음악의 길이만큼 게임의 time 설정
    async updateSettings(data) {
        const { io } = this;
        const roomID = data.roomID;
        const musicName = data.musicName;
        const musicTime = bgmList[musicName];

        roomList[roomID]['gameTime'] = musicTime;
        roomList[roomID]['music'] = musicName;

        io.to(roomID).emit('settingsUpdate_Res', {
            musicName: musicName,
            musicTime: musicTime,
        });
    }
}

export default Room;
