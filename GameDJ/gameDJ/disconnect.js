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
    dbhdel
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
            await dbhdel(roomID, socket.id);
            // console.log('disconnect roomID 있음');
            let playerCnt = 0;
            let roomInfo = await dbhgetall(roomID);
            for(const [key, value] of Object.entries(roomInfo)) {
                if (key.length === 20){
                    playerCnt++;
                }
            };
            // console.log('disconnect 사람수 ', playerCnt);
            // 방에 사람이 0명이 되면 방을 지운다 
            if (playerCnt === 0){
                // console.log('disconnect 방을 지워요 ', playerCnt);
                dbdel(roomID);
            }
            else{
                // console.log('disconnect 방을 지우지 않아요 ', playerCnt);
                io.to(roomID).emit('disconnection', socket.id);
            }
            // console.log('disconnect 방 존재 여부 확인 ', await dbhgetall(roomID));
        }
    }
}

export default Disconnect;
