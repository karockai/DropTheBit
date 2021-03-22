import { dbset, dbget } from "./redis.js";
import { nanoid } from "nanoid";

class Room {
  constructor(io, socket) {
    this.io = io;
    this.socket = socket;
  }

  createPrivateRoom(profile) {
    const { socket } = this;
    const roomID = nanoid(15);

    const socketID = socket.id;
    let playerInfo = {
      playerID: profile["playerID"],
      cash: "100000000",
      asset: "100000000",
      coinVol: "0",
      bid: {},
    };

    let roomInfo = {
      gameInfo: "0",
      music: "",
    };

    roomInfo[socketID] = playerInfo;
    dbset(roomID, roomInfo);

    socket.roomID = roomID;
    socket.join(roomID);
    socket.emit("createPrivateRoom_Res", roomID, roomInfo);
    // 'front'
    // createPrivateRoom_res 구현

    console.log("room_created");
    console.log("roomID : ", roomID);
    console.log("roomBoss :", profile["playerID"]);
    console.log;
  }

  async joinRoom(profile) {
    const { io, socket } = this;
    const roomID = socket["roomID"];
    let roomInfo = await dbget(roomID);
    let socketID = socket.id;

    let playerInfo = {
      playerID: profile["playerID"],
      cash: "100000000",
      asset: "100000000",
      coinVol: "0",
      bid: {},
    };

    roomInfo[socketID] = playerInfo;
    dbset(roomID, roomInfo);

    socket.join(roomID);
    socket.roomID = roomID;
    socket.to(roomID).emit("NewbieInRoom", roomInfo);

    // players.push(socket);
    socket.emit("loadOhterPlayer", roomInfo);

    console.log("someone joined a room");
    console.log("roomID : ", roomID);
    console.log("newbie :", profile["playerID"]);

    // 'front'
    // socket.on('loadOhterPlayer', players);
    // players.forEach((player) => putPlayer(player));
  }

  // data : 클라에서 선택한 음악명 (select 창)
  // 해당 음악의 길이만큼 게임의 time 설정
  updateSettings(music_name) {
    const { socket } = this;
    // games[socket.roomID][gameTime] = 음악 길이 ;
    // 음악길이는 여기서 세팅하지말고, 클라에서 music.duration 으로 길이 구해서 보내주고
    // start game 버튼 누르면 그때 games[roomID][time] 을 세팅해주는 것으로 하자
    const roomID = socket["roomID"];
    let roomInfo = await dbget(roomID);

    roomInfo[music] = music_name;
    dbset(roomID, roomInfo);

    socket.to(socket.roomID).emit("settingsUpdate_Res", music_name);
    console.log(games[socket.roomID]);
  }
}

export default Room;
