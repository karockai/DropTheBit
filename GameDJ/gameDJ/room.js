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
import { publicDecrypt } from 'crypto';

class Room {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    // joinPublic 에서 최초의 유저인지 아닌지 확인
    checkPublic(playerID) {
        let data = {
            roomID: publicRoomID,
            playerID: playerID.playerID,
        };
        // 공방 존재 확인
        let roomExist = false;
        if (roomList[publicRoomID]) {
            roomExist = true;
        }
        // 공방 최초의 유저라면
        if (roomExist === false) {
            this.createPublicRoom(data);
        }
        // 공방 최초의 유저가 아니라면
        else {
            this.joinRoom(data);
        }
    }

    // 사방 : data : {playerID : name}
    createPrivateRoom(data) {
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
            bidCash: 0,
            askVol: 0,
        };

        let roomInfo = {
            gameTime: 145,
            music: 'King_Conga.mp3',
            roomLeader: socket.id,
            gaming: false,
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

    // 공방 : data : {roomID : roomID, playerID : name}
    createPublicRoom(data) {
        const { socket } = this;
        const roomID = data.roomID;
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
            bidCash: 0,
            askVol: 0,
        };

        let roomInfo = {
            gameTime: 145,
            music: 'King_Conga.mp3',
            roomLeader: socket.id,
            gaming: false,
            readyTime: 10, // 디버깅 위해 10초로 (원래 30초)
        };

        roomInfo[socketID] = playerInfo;
        roomList[roomID] = roomInfo;

        socket.roomID = roomID;
        socket.join(roomID);
        let musicList = ['Deja_Vu.mp3', 'King_Conga.mp3', 'Mausoleum_Mash.mp3'];

        socket.emit('createPublic_Res', {
            roomInfo: roomInfo,
            roomID: roomID,
            musicList: musicList,
        });
    }

    // data : {roomID : roomID, playerID : name}
    joinRoom(data) {
        const { io, socket } = this;
        if (data.playerID) {
            const roomID = data.roomID;
            let roomInfo = roomList[roomID];
            let socketID = socket.id;

            let playerInfo = {
                playerID: data['playerID'],
                cash: 100000000,
                asset: 100000000,
                coinVol: 0,
                avgPrice: 0,
                bid: {},
                ask: {},
                bidCash: 0,
                askVol: 0,
            };

            roomInfo[socketID] = playerInfo;
            roomList[roomID] = roomInfo;

            socket.roomID = roomID;
            socket.join(roomID);
            playerStress++;
            io.to(roomID).emit('joinRoom_Res', {
                roomID: roomID,
                roomInfo: roomInfo,
                socketID: socket.id,
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
    updateSettings(data) {
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

    // 게임 한판 끝나고 로비로 돌아왔을때 방의 정보, 유저 정보 초기화
    // 룸의 정보가 초기화된 상태인지만 확인하고, 안되어있으면 초기화하고 되어있으면 안한다
    roomReinit(roomID) {
        const { io, socket } = this;
        const socketID = socket.id;
        let roomInfo = roomList[roomID];
        let playerID = roomInfo[socketID]['playerID'];
        let playerInfo = {
            playerID: playerID,
            cash: 100000000,
            asset: 100000000,
            coinVol: 0,
            avgPrice: 0,
            bid: {},
            ask: {},
            bidCash: 0,
            askVol: 0,
        };
        roomInfo[socketID] = playerInfo;

        // 방 정보가 초기화되어있지 않으면
        if (roomInfo['gameTime'] === -1) {
            roomInfo['gameTime'] = 145;
            roomInfo['music'] = 'King_Conga.mp3';
            roomInfo['roomLeader'] = socketID;
            roomInfo['gaming'] = false;
            if (roomInfo['readyTime']) {
                roomInfo['readyTime'] = 30;
            }
        }
    }
}

export default Room;
