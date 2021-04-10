import { dbhget, dbhmset, dbhincrby } from './redis.js';
import { nanoid } from 'nanoid';
import dotenv from 'dotenv';
import webhook from '../slack.js';

class Room {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    // joinPublic 에서 최초의 유저인지 아닌지 확인
    checkPublic(playerID) {
        try {
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
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // 사방 : data : {playerID : name}
    async createPrivateRoom(data) {
        try {
            const { io, socket } = this;
            const roomID = nanoid(15);
            const socketID = socket.id;
            dotenv.config();
            let ipAddress = await dbhget(process.env.SERVERNAME, 'ip');
            if (ipAddress) {
                console.log(
                    process.env.SERVERNAME,
                    typeof process.env.SERVERNAME
                );
                console.log(ipAddress);
                await dbhmset(
                    roomID,
                    'name',
                    process.env.SERVERNAME,
                    'ip',
                    ipAddress
                );
                await dbhincrby(process.env.SERVERNAME, 'player', 1);
            }
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
                actionRestTime: 0,
                recentAction: 0,
            };

            let roomInfo = {
                initGameTime: 0,
                gameTime: 0,
                music: 'Random_Music',
                roomLeader: socket.id,
                gaming: false,
                leaderBoard: 0,
                recentBuy: 0,
                recentSell: 0,
                recentNothing: 0,
            };

            roomInfo[socketID] = playerInfo;
            roomList[roomID] = roomInfo;

            socket.roomID = roomID;
            socket.join(roomID);

            socket.emit('createPrivateRoom_Res', {
                roomInfo: roomInfo,
                roomID: roomID,
            });
            let message = playerID + '님이 들어오셨습니다.';
            io.to(roomID).emit('update', {
                message: message,
                author: '[SERVER]',
            });
        } catch (err) {
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // 공방 : data : {roomID : roomID, playerID : name}
    createPublicRoom(data) {
        try {
            const { io, socket } = this;
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
                actionRestTime: 0,
                recentAction: 0,
            };

            let roomInfo = {
                initGameTime: 0,
                gameTime: 0,
                music: 'Random_Music',
                roomLeader: socket.id,
                gaming: false,
                leaderBoard: 0,
                recentBuy: 0,
                recentSell: 0,
                recentNothing: 0,
            };

            roomInfo[socketID] = playerInfo;
            roomList[roomID] = roomInfo;

            socket.roomID = roomID;
            socket.join(roomID);

            socket.emit('createPublic_Res', {
                roomInfo: roomInfo,
                roomID: roomID,
            });
            let message = playerID + '님이 들어오셨습니다.';
            io.to(roomID).emit('update', {
                message: message,
                author: '[SERVER]',
            });
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // data : {roomID : roomID, playerID : name}
    joinRoom(data) {
        try {
            const { io, socket } = this;
            if (data.playerID) {
                const roomID = data.roomID;
                let roomInfo = roomList[roomID];
                let playerID = data.playerID;
                let socketID = socket.id;

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
                    actionRestTime: 0,
                    recentAction: 0,
                };

                // 공방에서 아무도 back to lobby 안했는데 새 유저가 들어온 경우, 새 유저를 방장으로 지정
                if (roomInfo['roomLeader'] === 0) {
                    roomInfo['roomLeader'] = socket.id;
                }

                roomInfo[socketID] = playerInfo;
                roomList[roomID] = roomInfo;

                socket.roomID = roomID;
                socket.join(roomID);

                // for stress test
                playerStress++;

                io.to(roomID).emit('joinRoom_Res', {
                    roomID: roomID,
                    roomInfo: roomInfo,
                    socketID: socket.id,
                });

                let message = playerID + '님이 들어오셨습니다.';
                io.to(roomID).emit('update', {
                    message: message,
                    author: '[SERVER]',
                });
            }
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    sendChartData() {
        try {
            const { io, socket } = this;
            let roomID = socket.roomID;
            io.to(roomID).emit('chartData_Res', { chartData: chartData });
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // data : {roomID : roomID, musicName : 클라에서 선택한 음악명 (select 창)}
    // 해당 음악의 길이만큼 게임의 time 설정
    updateSettings(data) {
        try {
            const { io } = this;
            const roomID = data.roomID;
            const musicName = data.musicName;
            const musicTime = data.gameTime;

            roomList[roomID]['gameTime'] = musicTime;
            roomList[roomID]['music'] = musicName;

            io.to(roomID).emit('settingsUpdate_Res', {
                musicName: musicName,
                musicTime: musicTime,
            });
            let message = '배경음악이 "' + musicName + '"로 변경되었습니다.';
            io.to(roomID).emit('update', {
                message: message,
                author: '[SYSTEM]',
            });
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // 게임 한판 끝나고 로비로 돌아왔을때 유저 정보 초기화 (방 정보는 gameOver시 초기화)
    playerReinit(roomID) {
        try {
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
                actionRestTime: 0,
                recentAction: 0,
            };

            // 게임오버 시, 방장은 정해주지 않고, back to lobby한 최초의 유저가 방장이 되도록 함.
            // 방장이 설정된 후부터 ready time이 줄어들도록 함
            if (roomInfo['roomLeader'] === 0) {
                roomInfo['roomLeader'] = socket.id;
            }
            roomInfo[socketID] = playerInfo;
            roomList[roomID] = roomInfo;
            console.log('playerReinit----------');
            console.log(roomInfo);

            let message = playerID + '님이 들어오셨습니다.';
            io.to(roomID).emit('update', {
                message: message,
                author: '[SERVER]',
            });
            io.to(socketID).emit('backToLobby_Res', roomInfo['roomLeader']);
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }
}

export default Room;
