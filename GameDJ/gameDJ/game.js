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
} from './redis.js';

// const = require('./);
class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async startGame(roomID) {
        const { io, socket } = this;
        let gameTime = Number(await dbhget(socket.roomID, 'gameTime')) + 2;
        // let gameTime = 10000;
        console.log(await dbhgetall(socket.roomID));
        console.log('gameTime : ', gameTime);
        roomID = socket.roomID;
        io.to(roomID).emit('chartData', {chartData: chartData,});
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
        let gameSchedule2 = setTimeout(gameOver, (gameTime + 3) * 1000);
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
        let strReqPrice = reqJson['currentBid'];
        let intReqPrice = Number(strReqPrice);
        let strReqVol = reqJson['currentVolume'];
        let intReqVol = Number(strReqVol);

        // 2. player_info 가져오기
        // console.log('** BUY REQUEST :', roomID, socketID);
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        // console.log('** BUY REQUEST 요청내용', reqJson);
        // console.log('** BUY REQUEST 기존 Data', playerInfo);
        // console.log('** BUY REQUEST :', playerInfo);
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        let playerID = playerInfo['playerID'];

        // 3. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        // let curPrice = await dbget('curCoin');
        // console.log(curPrice);

        let refreshWallet = {};
        // 4. 구매 가능 여부 확인 후 "asset" emit
        if (cash >= intReqPrice * intReqVol) {
            // 5. 구매 처리 및 asset 정보 emit
            refreshWallet['result'] = 'success';
            refreshWallet['asset'] = asset;
            refreshWallet['type'] = 6;

            // 6. 요청가 <= 현재가 : 거래 체결 후 결과 송신(asset, buy_res("체결"))
            if (intReqPrice >= curPrice) {
                // 6-1. cash, coin 갯수 갱신
                // console.log(cash);
                cash -= curPrice * intReqVol;
                coinVol += intReqVol;

                // 6-2. buy_res update
                //! 이 아래 중복되는 부분 줄이기
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                socket.emit('refreshWallet', refreshWallet);

                // 6-3. playerInfo Update
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);

                // 6-4. buyDone
                let buyDone = {
                    type: '매수',
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
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                socket.emit('refreshWallet', refreshWallet);

                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);

                // 4-3. player 호가 목록 등록
                // console.log(playerInfo);
                // console.log(playerInfo['bid']);
                if (playerInfo['bid'].hasOwnProperty(strReqPrice)) {
                    playerInfo['bid'][strReqPrice] = String(
                        Number(playerInfo['bid'][strReqPrice]) + intReqVol
                    );
                } else {
                    playerInfo['bid'][strReqPrice] = strReqVol;
                    let bidList = JSON.parse(await dbget('bidList'));
                    bidList[strReqPrice] = {};
                    bidList[strReqPrice][socketID] = roomID;
                    dbset('bidList', JSON.stringify(bidList));
                }
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
            await dbhset(roomID, socketID, JSON.stringify(playerInfo));
        } else {
            //보유 현금이 부족한 경우 : refreshWallet["result"] = False를 emit
            refreshWallet['result'] = 'false';
            refreshWallet['coinVol'] = String(coinVol);
            refreshWallet['cash'] = String(cash);
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);
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
        let strReqPrice = reqJson['currentBid'];
        let intReqPrice = Number(strReqPrice);
        let strReqVol = reqJson['currentVolume'];
        let intReqVol = Number(strReqVol);
        
        // 2. player_info 가져오기
        // console.log('** Sell REQUEST :', roomID, socketID);
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        // console.log('** Sell REQUEST :', playerInfo);
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        let playerID = playerInfo['playerID'];
        
        // 3. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        // let curPrice = await dbget('curCoin');
        // console.log(curPrice);
        
        let refreshWallet = {};
        // 4. 구매 가능 여부 확인 : 보유 coinVol > 요청 coinVol 후 "asset" emit
        // * 이미 호가 올려놓은 것들은 어떡하지?
        if (coinVol >= intReqVol) {
            // 5. 구매 처리 및 asset 정보 emit
            refreshWallet['result'] = 'success';
            refreshWallet['asset'] = asset;
            refreshWallet['type'] = 6;
            
            // 6. 요청가 <= 현재가 : 거래 체결 후 결과 송신(asset, sell_res("체결"))
            if (intReqPrice <= curPrice) {
                // 6-1. cash, coin 갯수 갱신
                // console.log(cash);
                cash += curPrice * intReqVol;
                coinVol -= intReqVol;
                
                // 6-2. sell_res update
                //! 이 아래 중복되는 부분 줄이기
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                socket.emit('refreshWallet', refreshWallet);
                
                // 6-3. playerInfo Update
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 6-4. sellDone
                let sellDone = {
                    type: '매도 주문',
                    playerID: playerID,
                    vol: intReqVol,
                    price: curPrice,
                };
                socket.emit('sellDone', sellDone);
                socket.to(roomID).emit('sellDone_Room', sellDone);

                // 7. 요청가 > 현재가 : 호가 등록 후 결과 송신(asset, sell_res("호가"))
            } else {
                coinVol -= intReqVol;
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                socket.emit('refreshWallet', refreshWallet);
                
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 4-3. player 호가 목록 등록
                // console.log(playerInfo);
                // console.log(playerInfo['ask']);
                if (playerInfo['ask'].hasOwnProperty(strReqPrice)) {
                    playerInfo['ask'][strReqPrice] = String(
                        Number(playerInfo['ask'][strReqPrice]) + intReqVol
                        );
                    } else {
                        playerInfo['ask'][strReqPrice] = strReqVol;
                        let askList = JSON.parse(await dbget('askList'));
                        askList[strReqPrice] = {};
                        askList[strReqPrice][socketID] = roomID;
                        dbset('askList', JSON.stringify(askList));
                    }
                    console.log('호가 등록 완료', playerInfo);
                    let askDone = {
                        type: '매도',
                        playerID: playerID,
                        vol: intReqVol,
                        price: intReqPrice,
                    };
                    socket.emit('askDone', askDone);
                    socket.to(roomID).emit('askDone_Room', askDone);
                }
                await dbhset(roomID, socketID, JSON.stringify(playerInfo));
            } else {
                //보유 현금이 부족한 경우 : refreshWallet["result"] = False를 emit
                refreshWallet['result'] = 'false';
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                refreshWallet['asset'] = asset;
                socket.emit('refreshWallet', refreshWallet);
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

        let bidList = JSON.parse(await dbhget('bidList', bidPrice));
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));

        let cash = Number(playerInfo['cash']);
        let bidVol = Number(playerInfo['bid'][bidPrice]);

        cash += bidVol * Number(bidPrice);
        playerInfo['cash'] = String(cash);
        delete playerInfo['bid'][bidPrice];
        await dbhset(roomID, socketID, JSON.stringify(playerInfo));

        delete bidList[socketID];
        await dbhset('bidList', bidPrice, JSON.stringify(bidList));
    }

    // 매도 요청 취소
    async cancelAsk(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let AskPrice = reqJson['reqPrice'];

        let askList = await dbget('askList', AskPrice);
        let playerInfo = await dbget(roomID, socketID);

        let coinVol = Number(playerInfo['coinVol']);
        let askVol = Number(playerInfo['askList'][AskPrice]);

        coinVol += bidVol;
        playerInfo['coinVol'] = String(coinVol);

        delete playerInfo[AskPrice];
        dbset(roomID, socketID, playerInfo);

        delete askList[socketID];
        dbset('askList', AskPrice, askList);
    }
}

export default Game;
