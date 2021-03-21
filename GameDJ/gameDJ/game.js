const {
    dbget,
    dbset
} = require('./redis');

class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async startGame() {
        const { io, socket } = this;
        const { gameTime } = games[socket.roomID];
        const players = Array.from(await io.in(socket.roomID).allSockets());
        socket.to(socket.roomID).emit('startGame', (gameTime));

        setInterval(() => {
            getCurCoin();
        }, 250);
        // gameTime만큼 멈췄다가, 끝나면 endGame 실행

        // await setTimeout( () {
        //     clearTimeout(testInterval);
        // }, gameTime);
        // endGame;
        // // 식=>
    }


    async gameLogic() {
        while (true) {




    }

}
}