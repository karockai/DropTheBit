class Chat {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
    
    // data : {roomID : roomID, message:message, author : playerID}
    messageReq(data) {
        const { io, socket } = this;
        let writer = 0;
        if (roomList[data.roomID][socket.id]['playerID']){
            writer = roomList[data.roomID][socket.id]['playerID'];
        }
        io.to(data.roomID).emit('update', {message : data.message, author : writer});
    };


}

export default Chat;
