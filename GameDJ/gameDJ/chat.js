class Chat {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    // socket.on('message', function (data)   에 대한 함수
    // data : {roomID : roomID, message:message, author : playerID}
    messageReq(data) {
        const { io, socket } = this;
        /* io.sockets.emit() = 모든 유저(본인 포함)
        socket.broadcast.emit() = 본인을 제외한 나머지 모두 */
        console.log(data.roomID);
        console.log(data.message);
        console.log(data.author);
        io.to(data.roomID).emit('update', {message : data.message, author : data.author});
    };


}

export default Chat;
