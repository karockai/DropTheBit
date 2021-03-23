// const {
//     dbget,
//     dbset
// } = require('./js');
import { dbset, dbget, dbhset, dbhget, dbhexi } from './redis.js';

// const = require('./);
class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async startGame() {
        const { io, socket } = this;
        let roomID = socket.roomID;
        let musicTime = Number(await dbhget(roomID, gameTime));

        await socket.to(roomID).emit('startGame', gameTime);
        let ReadyPlayer = socket.on('allReady', () => {
            // 모두가 준비되면 게임 시작
        });

        const gamePlay = function () {
            return Promise(function (resolve, reject) {
                let schedule = setInterval(() => {
                    renewalCurCoin(roomID);
                    sendRoomInfo(roomID);
                }, 1000);
                // gameTime만큼 멈췄다가, 끝나면 endGame 실행

                // setTimeout(() => {
                //     clearInterval(schedule);

                //     resolve();
                // }, musicTime);
            });
        };

        gamePlay().then(() => {
            // game 종료 함수 만들 것
            socket.to(roomID).emit('endGame');
            console.log('Game Over');
        });
    }

    // 매수 요청 등록
    /*reqJson{
      roomID
      socketID
      reqPrice
      reqVol
  }
  **/

    async buy(reqJson) {
        // 1. reqJson setting
        console.log('** BUY REQUEST :', reqJson);
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let strReqPrice = reqJson['currentBid'];
        let intReqPrice = Number(strReqPrice);
        let strReqVol = reqJson['currentVolume'];
        let intReqVol = Number(strReqVol);

        // 2. player_info 가져오기
        console.log('** BUY REQUEST :', roomID, socketID);
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));
        console.log('** BUY REQUEST :', playerInfo);
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        
        // 3. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        // let curPrice = await dbget('curCoin');
        console.log(curPrice);

        let refreshWallet = {};
        let buy_res = {};
        buy_res["curPrice"] = curPrice;
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
                buy_res['type'] = '체결';
                //! 이 아래 중복되는 부분 줄이기
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                this.socket.emit('refreshAsset', refreshWallet);
                this.socket.emit('buy_Res', buy_res);
                
                // 6-3. playerInfo Update
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 7. 요청가 < 현재가 : 호가 등록 후 결과 송신(asset, buy_res("호가"))
            } else {
                // 7-1. cash 갱신
                cash -= intReqPrice * intReqVol;
                buy_res['type'] = '호가';
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                this.socket.emit('refreshAsset', refreshWallet);
                this.socket.emit('buy_Res', buy_res);
                
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 4-3. player 호가 목록 등록
                // console.log(playerInfo['bid']);
                if ((playerInfo['bid']).hasOwnProperty(strReqPrice)) {
                    playerInfo['bid'][strReqPrice] = String(
                        Number(playerInfo['bid'][strReqPrice]) +
                        intReqVol
                        );
                    } else {
                        playerInfo['bid'][strReqPrice] = strReqVol;
                        let bidList = JSON.parse(await dbget('bidList'));
                        bidList[strReqPrice] = {};
                        bidList[strReqPrice][socketID] = roomID;
                        console.log(bidList);
                        dbset('bidList', JSON.stringify(bidList));
                    }
                }
            console.log("BUY", playerInfo);
            dbhset(roomID, socketID, JSON.stringify(playerInfo));
        } else {
            //보유 현금이 부족한 경우 : refreshWallet["result"] = False를 emit
            refreshWallet['result'] = 'false';
            this.socket.emit('refreshAsset', refreshWallet);
        }
    }

    // 매도 요청 등록
    async sell(reqJson) {
        // 1. reqJson setting
        // console.log('** Sell REQUEST :', reqJson);
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
        
        // 3. curPrice 가져오기
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        // let curPrice = await dbget('curCoin');
        console.log(curPrice);

        let refreshWallet = {};
        let sell_res = {};
        sell_res["curPrice"] = curPrice;
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
                sell_res['type'] = '체결';
                //! 이 아래 중복되는 부분 줄이기
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                this.socket.emit('refreshAsset', refreshWallet);
                this.socket.emit('sell_Res', sell_res);
                
                // 6-3. playerInfo Update
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 7. 요청가 > 현재가 : 호가 등록 후 결과 송신(asset, sell_res("호가"))
            } else {
                coinVol -= intReqVol;
                sell_res['type'] = '호가';
                refreshWallet['coinVol'] = String(coinVol);
                refreshWallet['cash'] = String(cash);
                this.socket.emit('refreshAsset', refreshWallet);
                this.socket.emit('sell_Res', sell_res);
                
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);
                
                // 4-3. player 호가 목록 등록
                // console.log(playerInfo['ask']);
                if ((playerInfo['ask']).hasOwnProperty(strReqPrice)) {
                    playerInfo['ask'][strReqPrice] = String(
                        Number(playerInfo['ask'][strReqPrice]) +
                        intReqVol
                        );
                    } else {
                        playerInfo['ask'][strReqPrice] = strReqVol;
                        let askList = JSON.parse(await dbget('askList'));
                        askList[strReqPrice] = {};
                        askList[strReqPrice][socketID] = roomID;
                        console.log(askList);
                        dbset('askList', JSON.stringify(askList));
                    }
                }
            console.log("SELL", playerInfo);
            dbhset(roomID, socketID, JSON.stringify(playerInfo));
        } else {
            //보유 현금이 부족한 경우 : refreshWallet["result"] = False를 emit
            refreshWallet['result'] = 'false';
            this.socket.emit('refreshAsset', refreshWallet);
        }
    }

    // 매수 요청 취소
    async cancelBid(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let bidPrice = reqJson['reqPrice'];

        let bidList = JSON.parse(await dbhget('bidList', bidPrice));
        let playerInfo = JSON.parse(await dbhget(roomID, socketID));

        let cash = Number(playerInfo['cash']);
        let bidVol = Number(playerInfo['bidInPlayer'][bidPrice]);

        cash += bidVol * Number(bidPrice);
        playerInfo['cash'] = String(cash);
        delete playerInfo['bidInPlayer'][bidPrice];
        dbhset(roomID, socketID, JSON.stringify(playerInfo));

        delete bidList[socketID];
        dbhset('bidList', bidPrice, JSON.stringify(bidList));
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
