import {
    dbhincrby,
    dbdel
} from './redis.js';
import dotenv from 'dotenv';
dotenv.config();

class Disconnect {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async onDisconnect() {
        try{

            const { io, socket } = this;
            const { roomID } = socket;
    
            // roomID가 있으면 제대로된 소켓
            // disconnection 보내면 room에서 그 사람을 지우도록 함
            if (roomID && roomList[roomID]) {
                let playerCnt = 0;
                let roomInfo = roomList[roomID];
                let playerInfo = roomInfo[socket.id];
                //ask, bid 지우기
                //성현 추가(210403) 서버 인원 감소시키기
                await dbhincrby(process.env.SERVERNAME, 'player', -1);
    
                // ask, bid List에서 해당 player 삭제
                for (let bid in playerInfo['bid']){
                    for (let id  in bidList[bid]){
                        if (socket.id === id){
                            delete bidList[bid][id]
                        }
                    }
                }
                for (let ask in playerInfo['ask']){
                    for (let id  in askList[ask]){
                        if (socket.id === id){
                            delete askList[ask][id]
                        }
                    }
                }
    
                // 방에 사람 수 세기
                for (const [key, value] of Object.entries(roomInfo)) {
                    if (key.length === 20) {
                        playerCnt++;
                    }
                }
                
                playerCnt--;
                console.log('player:-------------', playerCnt);
                // 방에 사람이 0명이 되면 방을 지운다
                if (playerCnt === 0) {
                    delete roomList[roomID];
                    await dbdel(roomID);
                    // playerStress = 0;
                } 
                else {
                    let message = playerInfo['playerID'] + '님이 나가셨습니다.\n';
                    // 방에 사람이 1명 이상이면 방을 지우지 않는다
                    // 나간 사람이 방장이라면 다음 사람으로 방장을 변경한다
                    if (roomInfo['roomLeader'] == socket.id) {
                        for (const [key, value] of Object.entries(roomInfo)) {
                            if (key.length === 20 && key !== socket.id) {
                                roomInfo['roomLeader'] = key;
                                message += ' ' + roomInfo[key]['playerID'] + '님으로 방장이 변경되었습니다.';
                                break;
                            }
                        }
                    }
                    io.to(roomID).emit('update', {message : message, author : '[SERVER]'});
                    delete roomList[roomID][socket.id];
                }
                console.log('disconnect-----');
                console.log('나간 놈: ', socket.id);
                console.log(roomInfo);
                io.to(roomID).emit('disconnect', roomInfo);
            }
        }
        catch(err){
            console.error(err);
        }
    }
}

export default Disconnect;
