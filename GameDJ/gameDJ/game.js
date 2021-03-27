// const {
//     dbget,
//     dbset
// } = require('./js');
import {
    dbset,
    dbget,
    dbhset,
    dbhget,
    dbhexi,
    dbhgetall,
    dbrpush,
    dblpush,
    dblrem,
    dblrange,
    dbllen,
    dbwatch,
    dbhdel,
} from './redis.js';

// const = require('./);
class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async startGame() {
        const { io, socket } = this;
        let gameTime = Number(await dbhget(socket.roomID, 'gameTime'));
        let roomID = socket.roomID;
        io.to(roomID).emit('chartData', {chartData: chartData});
        console.log(chartData);
        await io.to(roomID).emit('startGame_Res', gameTime);
        // await socket.to(roomID).emit('startGame', gameTime);
        // let ReadyPlayer = socket.on('allReady', () => {
        //     // 모두가 준비되면 게임 시작
        // });

        async function realStart() {
            let roomID = socket.roomID;
            let musicName = await dbhget(roomID, 'music');
            io.to(roomID).emit('startGame_Real', musicName);
        }

        async function gameOver() {
            let roomID = socket.roomID;
            let roomInfo = await dbhgetall(roomID);
            let leaderBoard = [];
            for (let socketID in roomInfo) {
                if (socketID.length < 15) continue;
                let playerInfo = JSON.parse(roomInfo[socketID]);
                let temp = {};

                temp['playerID'] = playerInfo['playerID'];
                temp['asset'] = playerInfo['asset'];

                leaderBoard.push(temp);
            }

            leaderBoard.sort(function (a, b) {
                return b['asset'] - a['asset'];
            });

            io.to(roomID).emit('gameOver', leaderBoard);
        }

        let gameSchedule1 = setTimeout(realStart, 3000);
        let gameSchedule2 = setTimeout(gameOver, (gameTime) * 1000);
    }

    // 매수 요청 등록
    /*reqJson{
      roomID
      socketID
      reqPrice
      reqVol
  }
  **/
  buy(reqJson, socket) {
        return new Promise(async function(resolve, reject) {
        // const { io, socket } = this;
        console.log("-----BUY-----", reqJson);
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let strReqPrice = String(reqJson['currentBid']);
        let intReqPrice = Number(strReqPrice);
        let strReqVol = String(reqJson['currentVolume']);
        let intReqVol = Number(strReqVol);

        // 2. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        
        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 6;
        
        // 3. player_info 가져오기
        console.log("hget PlayerINFO");
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        let playerID = playerInfo['playerID'];
        
        // 5. 구매 처리 및 asset 정보 emit
        
        // 6. 요청가 >= 현재가 : 거래 체결 후 결과 송신(asset, buy_res("체결"))
        if (intReqPrice >= curPrice) {
            // 6-1. cash, coin 갯수 갱신
            cash -= curPrice * intReqVol;
            coinVol += intReqVol;
            
            // 6-2. playerInfo Update
            playerInfo['cash'] = String(cash);
            playerInfo['coinVol'] = String(coinVol);
            await dbhset(roomID, socketID, JSON.stringify(playerInfo)).then(console.log).catch(console.error);
            
            // 6-3. refreshWallet update & emit
            refreshWallet['coinVol'] = String(coinVol);
            refreshWallet['cash'] = String(cash);
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);
            
            // 6-4. buyDone
            let buyDone = {
                type: '매수 완료',
                // 6-3. refreshWallet update & emit
                playerID: playerID,
                vol: intReqVol,
                price: curPrice,
            };
            socket.emit('buyDone', buyDone);
            socket.to(roomID).emit('buyDone_Room', buyDone);
            
            console.log('현재가로 구매 완료 :', playerInfo);
            // 7. 요청가 < 현재가 : 호가 등록 후 결과 송신(asset, buy_res("호가"))
        } else {
            // 7-1. cash 갱신
            cash -= intReqPrice * intReqVol;
            playerInfo['cash'] = String(cash);
            playerInfo['coinVol'] = String(coinVol);
            
            // 4-3. player 호가 목록 등록
            if (playerInfo['bid'].hasOwnProperty(strReqPrice)) {
                playerInfo['bid'][strReqPrice] = String(
                    Number(playerInfo['bid'][strReqPrice]) + intReqVol
                    );
                } else {
                    playerInfo['bid'][strReqPrice] = strReqVol;
                    let bidList = JSON.parse(await dbget('bidList'));
                    bidList[strReqPrice] = {};
                    bidList[strReqPrice][socketID] = roomID;
                    await dbset('bidList', JSON.stringify(bidList));
                }
                await dbhset(roomID, socketID, JSON.stringify(playerInfo));
                
                // 6-3. refreshWallet update & emit
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                refreshWallet['asset'] = asset;
                socket.emit('refreshWallet', refreshWallet);
                
                let bidDone = {
                    type: '매수 주문',
                    playerID: playerID,
                    vol: intReqVol,
                    price: intReqPrice,
                };
                console.log('호가 등록 완료', playerInfo);
                socket.emit('bidDone', bidDone);
                socket.to(roomID).emit('bidDone_Room', bidDone);
            }
            console.log("-------BUY END-------------");
            resolve();
        });
    }
    
    // 매도 요청 등록
    sell(reqJson, socket) {
        return new Promise(async function(resolve, reject) {
            // const { io, socket } = this;
            // 1. reqJson setting
            console.log('-----------Sell -----------', reqJson);
            let roomID = reqJson['roomID'];
            let socketID = reqJson['socketID'];
            let strReqPrice = String(reqJson['currentBid']);
        let intReqPrice = Number(strReqPrice);
        let strReqVol = String(reqJson['currentVolume']);
        let intReqVol = Number(strReqVol);
        
        
        // 2. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        
        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 6;
        
        // 3. player_info 가져오기
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        let playerID = playerInfo['playerID'];
        
        // 6. 요청가 <= 현재가 : 거래 체결 후 결과 송신(asset, sell_res("체결"))
        if (intReqPrice <= curPrice) {
            // 6-1. cash, coin 갯수 갱신
            cash += curPrice * intReqVol;
            coinVol -= intReqVol;
            
            // 6-3. playerInfo Update
            playerInfo['cash'] = String(cash);
            playerInfo['coinVol'] = String(coinVol);
            await dbhset(roomID, socketID, JSON.stringify(playerInfo));
            
            // 6-2. sell_res update
            refreshWallet['coinVol'] = String(coinVol);
            refreshWallet['cash'] = String(cash);
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);
            
            // 6-4. sellDone
            let sellDone = {
                type: '매도 완료',
                playerID: playerID,
                vol: intReqVol,
                price: curPrice,
            };
            
            socket.emit('sellDone', sellDone);
            socket.to(roomID).emit('sellDone_Room', sellDone);
            console.log('현재가로 판매 완료 :', playerInfo);
            // 7. 요청가 > 현재가 : 호가 등록 후 결과 송신(asset, sell_res("호가"))
        } else {
            coinVol -= intReqVol;
            
            playerInfo['cash'] = String(cash);
            playerInfo['coinVol'] = String(coinVol);
            
            // 4-3. player 호가 목록 등록
            console.log(playerInfo);
            console.log(playerInfo['ask']);
            
            if (playerInfo['ask'].hasOwnProperty(strReqPrice)) {
                playerInfo['ask'][strReqPrice] = String(
                    Number(playerInfo['ask'][strReqPrice]) + intReqVol
                    );
                } else {
                    playerInfo['ask'][strReqPrice] = strReqVol;
                    let askList = JSON.parse(await dbget('askList'));
                    askList[strReqPrice] = {};
                    askList[strReqPrice][socketID] = roomID;
                    await dbset('askList', JSON.stringify(askList));
                }
                await dbhset(roomID, socketID, JSON.stringify(playerInfo));
                
                console.log('호가 등록 완료', playerInfo);
                let askDone = {
                    type: '매도 주문',
                    playerID: playerID,
                    vol: intReqVol,
                    price: intReqPrice,
                };
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                refreshWallet['asset'] = asset;
                socket.emit('refreshWallet', refreshWallet);
                socket.emit('askDone', askDone);
                socket.to(roomID).emit('askDone_Room', askDone);
            }
        console.log('-----------Sell End-----------');
        resolve();
        });
    }

    // 매수 요청 취소
    async cancelBid(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let bidPrice = reqJson['reqPrice'];
        
        // 취소 요청한 가격에 해당하는 목록을 불러온다
        let bidList = JSON.parse(await dbhget('bidList', bidPrice));
        
        // bidList의 Length가 1이면 가격 자체를 지워버린다.
        if (Object.keys(bidList).length === 1) {
            await dbhdel('bidList', bidPrice);   
        }
        else{
            delete bidList[socketID];
            await dbhset('bidList', bidPrice, JSON.stringify(bidList));
        }
        
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        let cash = Number(playerInfo['cash']);
        let bidVol = Number(playerInfo['bid'][bidPrice]);
        cash += bidVol * Number(bidPrice);
        playerInfo['cash'] = String(cash);
        delete playerInfo['bid'][bidPrice];
        await dbhset(roomID, socketID, JSON.stringify(playerInfo));
        
        // 매수 취소 완료 Response 필요
        
        
        
        // 매수 취소 완료 Response 필요
    }
    
    // 매도 요청 취소
    async cancelAsk(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let askPrice = reqJson['reqPrice'];
        
        // 취소 요청한 가격에 해당하는 목록을 불러온다
        let askList = JSON.parse(await dbhget('askList', askPrice));

        // askList의 Length가 1이면 가격 자체를 지워버린다.
        if (Object.keys(bidList).length === 1) {
            await dbhdel('bidList', bidPrice);   
        }
        else{
            delete askList[socketID];
            await dbhset('askList', askPrice, JSON.stringify(askList));
        }

        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        let coinVol = Number(playerInfo['coinVol']);
        let askVol = Number(playerInfo['askList'][askPrice]);
        
        coinVol += askVol;
        playerInfo['coinVol'] = String(coinVol);
        delete playerInfo[AskPrice];
        await dbhset(roomID, socketID, JSON.stringify(playerInfo));
        
        // 매수 취소 완료 Response 필요
        
    
    
        // 매수 취소 완료 Response 필요
    }
    
    async sendBidTable(reqJson){
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        
        let bidTable = playerInfo['bid'];
        let bidTableKeys = Object.keys(bidTable);
        let bidTable_Res = [];
        
        for (let bidPriceIdx in bidTableKeys) {
            
            let temp = {};
            let bidPrice = bidTableKeys[bidPriceIdx];
            let bidVol = bidtable[bidPrice];
            temp['price'] = bidPrice;
            temp['vol'] = bidVol;
            
            bidTable_Res.push(temp);
        }
        
        bidTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        this.socket.emit('bitTable_Res', bidTable_Res);
        
    }
    
    async sendAskTable(reqJson){
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        
        let askTable = playerInfo['ask'];
        let askTableKeys = Object.keys(askTable);
        let askTable_Res = [];
        
        for (let askPriceIdx in askTableKeys) {
            
            let temp = {};
            let askPrice = askTableKeys[askPriceIdx];
            let askVol = asktable[askPrice];
            temp['price'] = askPrice;
            temp['vol'] = askVol;
            
            askTable_Res.push(temp);
        }
        
        askTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        this.socket.emit('askTable_Res', askTable_Res);

    }
        
    }
export default Game;
