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
    dbllen,
    dbdel,
    dbhdel,
} from './redis.js';

class Disconnect {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async onDisconnect() {
        const { io, socket } = this;
        const { roomID } = socket;
        // roomID가 있으면 제대로된 소켓
        // disconnection 보내면 room에서 그 사람을 지우도록 함
        // 근데 lobby인지, game중인지 다르게 줘야하나?
        if (roomID) {
            // await dbhdel(roomID, socket.id);
            delete roomList[roomID][socket.id];
            let playerCnt = 0;
            // let roomInfo = await dbhgetall(roomID);
            let roomInfo = roomList[roomID];

            console.log('나간 놈 ', socket.id);
            console.log(roomInfo);
            io.to(roomID).emit('disconnect', roomInfo);

            for (const [key, value] of Object.entries(roomInfo)) {
                if (key.length === 20) {
                    playerCnt++;
                }
            }
            // 방에 사람이 0명이 되면 방을 지운다
            if (playerCnt === 0) {
                delete roomList[roomID];
            } else {
                // 방에 사람이 1명 이상이면 방을 지우지 않는다
                // 나간 사람이 방장이라면 다음 사람으로 방장을 변경한다
                if (roomInfo['roomLeader'] == socket.id){
                    console.log('흑흑 방장이 나갔어요');
                    for (const [key, value] of Object.entries(roomInfo)) {
                        if (key.length === 20) {
                            roomInfo['roomLeader'] = key;
                            console.log('방장을 바꿨어요', key);
                            break;
                        }
                    }
                    // io.to(roomID).emit('changeLeader', roomInfo);
                }
            }
            // console.log('disconnect 방 존재 여부 확인 ', await dbhgetall(roomID));
        }
    }
}

export default Disconnect;
