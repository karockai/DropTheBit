class Chat {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
    
    // data : {roomID : roomID, message:message, author : playerID}
    messageReq(data) {
        const { io, socket } = this;
        io.to(data.roomID).emit('update', {message : data.message, author : data.author});
    };


}

export default Chat;
