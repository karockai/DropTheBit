class Chat {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    // socket.on('message', function (data)   에 대한 함수
    // data : {roomID : roomID, message : {message:message, author : playerID}}
    messageReq(data) {
        /* io.sockets.emit() = 모든 유저(본인 포함)
        socket.broadcast.emit() = 본인을 제외한 나머지 모두 */
        io.to(data.roomID).emit('update', data.message);
    };


}

export default Chat;
