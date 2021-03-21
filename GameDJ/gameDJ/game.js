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



        let schedule = setInterval(() => {
            renewalCurCoin();
        }, 250);
        // gameTime만큼 멈췄다가, 끝나면 endGame 실행


        setTimeout(() => {
            clearInterval(schedule);

            console.log('Game Over');
        }, gameTime)
    }

    async renewalCurCoin() {
        const { io, socket } = this;
        const { gameTime } = games[socket.roomID];
        
        
        // 1. bidList 불러옴
        let curCoin = await dbget("curCoin");
        socket.to(socket.roomID).emit('renewalCurCoin', curCoin);
        curPrice = Number(curCoin["curPrice"]);
        
    
        // 2. prePrice랑 curPrice를 비교
        // 2-1. curPrice === prePrice면 아무것도 하지않는다.
        // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다.
        if (curPrice > prePrice) {
            let askList = await dbget("askList");
            // askPrice가 curPrice보다 낮은지 확인
            for (let askPrice in askList) {
                let intAskPrice = Number(askPrice);
                if (intAskPrice > curPrice) continue
    
                // 낮다면 거래를 체결한다.
                for (let playerID in askList[askPrice]) {
                    let roomID = askList[askPrice][playerID];
                    let playerInfo = await dbget(roomID, playerID);
                    let cash = Number(playerInfo["cash"]);
                    let askVol = Number(playerInfo["bidList"][askPrice]);
                    let socketID = playerInfo["socketID"];
                    cash += askVol * intAskPrice;
                    playerInfo["cash"] = String(cash);
    
                    dbset(roomID, playerID, playerInfo);
                    socket.to(socketID).emit("askDone");
    
                    delete playerID["askList"][askPrice];
                    delete askList[askPrice][playerID];
                }
            }
            dbset("askList", askList);
        }
    
        // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
        if (curPrice < prePrice) {
            let bidList = await dbget("bidList");
            // bidPrice가 curPrice보다 높은지 확인
            for (let bidPrice in bidList) {
                let intBidPrice = Number(bidPrice);
                if (intBidPrice < curPrice) continue
    
                // 높다면 거래를 체결한다.
                for (let playerID in bidList[bidPrice]) {
                    let roomID = bidList[bidPrice][playerID];
                    let playerInfo = await dbget(roomID, playerID);
                    let coinVol = Number(playerInfo["coinVol"]);
                    let vol = Number(playerInfo["bidList"][bidPrice]);
                    let socketID = playerInfo["socketID"];
                    coinVol += vol;
                    playerInfo["coinVol"] = String(coinVol);
    
                    dbset(roomID, playerID, playerInfo);
                    socket.to(socketID).emit("bidDone");
    
                    delete playerID["bidList"][bidPrice];
                    delete bidList[bidPrice][playerID];
                }
            }
            dbset("bidList", bidList);
        }
    
        if (curPrice === prePrice) {
            let askList = await dbget("askList", String(curPrice));
            // 낮다면 거래를 체결한다.
            for (let playerID in askList) {
                let roomID = askList[playerID];
                let playerInfo = await dbget(roomID, playerID);
                let cash = Number(playerInfo["cash"]);
                let askVol = Number(playerInfo["bidList"][askPrice]);
                let socketID = playerInfo["socketID"];
                cash += askVol * intAskPrice;
                playerInfo["cash"] = String(cash);
    
                dbset(roomID, playerID, playerInfo);
                socket.to(socketID).emit("askDone");
    
                delete playerID["askList"][askPrice];
                delete askList[playerID];
            }
            dbset("askList", String(curPrice), askList);
    
            let bidList = await dbget("bidList", String(curPrice));
            // bidPrice가 curPrice보다 높은지 확인
    
            // 높다면 거래를 체결한다.
            for (let playerID in bidList) {
                let roomID = bidList[playerID];
                let playerInfo = await dbget(roomID, playerID);
                let coinVol = Number(playerInfo["coinVol"]);
                let bidVol = Number(playerInfo["bidList"][bidPrice]);
                let socketID = playerInfo["socketID"];
                coinVol += bidVol;
                playerInfo["coinVol"] = String(coinVol);
    
                dbset(roomID, playerID, playerInfo);
                socket.to(socketID).emit("bidDone");
    
                delete playerID["bidList"][bidPrice];
                delete bidList[playerID];
            }
            dbset("bidList", String(curPrice), bidList);
        }
    }




}