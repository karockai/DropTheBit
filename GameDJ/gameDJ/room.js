import { dbset, dbget, dbhset, dbhget, dbhgetall, dbrpush, dblrem, dblrange, dbllen } from './redis.js';
import { nanoid } from 'nanoid';

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
        };

        let roomInfo = {
            gameInfo: '0',
            music: '',
        };

        roomInfo[socketID] = playerInfo;
        console.log('create', roomInfo);
        let strplayerInfo = JSON.stringify(playerInfo);
        await dbhset(roomID, socketID, strplayerInfo);
        // await dbrpush(roomList, roomID);
        // console.log(await dblrange(roomList, 0, -1));
        socket.roomID = roomID;
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
            playerID: data["playerID"],
            cash: '100000000',
            asset: '100000000',
            coinVol: '0',
            bid: {},
        };
        console.log('joinRoom', data.playerID);
        roomInfo[socketID] = playerInfo;
        let strplayerInfo = JSON.stringify(playerInfo);
        dbhset(roomID, socketID, strplayerInfo);

        let rawRoom = await dbhgetall(roomID);
        for (const [key, value] of Object.entries(rawRoom)) {
            roomInfo[key] = JSON.parse(value);
        }
        console.log('joinRoom', rawRoom);
        console.log('joinRoom', roomInfo);
        socket.roomID = roomID;
        socket.join(roomID);
        io.to(roomID).emit('NewbieInRoom', roomInfo);

        // players.push(socket);
        const temp = io.of('/').clients(roomID);
        print('joinRoom', temp);
        // const players = Array.from(temp);
        socket.emit('loadOhterPlayer', roomInfo);

        console.log('someone joined a room');
        console.log('roomID : ', roomID);
        console.log('newbie :', data.playerID);

        // 'front'
        // socket.on('loadOhterPlayer', players);
        // players.forEach((player) => putPlayer(player));
    }

    // data : 클라에서 선택한 음악명 (select 창)
    // 해당 음악의 길이만큼 게임의 time 설정
    async updateSettings(music_name) {
        const { socket } = this;
        // games[socket.roomID][gameTime] = 음악 길이 ;
        // 음악길이는 여기서 세팅하지말고, 클라에서 music.duration 으로 길이 구해서 보내주고
        // start game 버튼 누르면 그때 games[roomID][time] 을 세팅해주는 것으로 하자
        const roomID = socket.roomID;
        dbhset(roomID, music, music_name);
        socket.to(socket.roomID).emit('settingsUpdate_Res', music_name);
    }
}

export default Room;
