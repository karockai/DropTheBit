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
        let music_time = 5000;
        const { io, socket } = this;
        socket.to(socket.roomID).emit('startGame', gameTime);

        const gameOver = function () {
            return Promise(function (resolve, reject) {
                let schedule = setInterval(() => {
                    renewalCurCoin();
                }, 1000);
                // gameTime만큼 멈췄다가, 끝나면 endGame 실행

                setTimeout(() => {
                    clearInterval(schedule);

                    resolve();
                }, music_time);
            });
        };

        gameOver().then(() => {
            console.log('Game Over');
        });
    }

    async renewalCurCoin() {
        const { io, socket } = this;

        // 1. bidList 불러옴
        let curCoin = JSON.parse(await dbget('curCoin'));
        console.log('curCoin : ', curCoin);
        console.log('curCoinType : ', typeof curCoin);
        socket.to(socket.roomID).emit('renewalCurCoin', curCoin);
        let prePrice = curCoin['prePrice'];
        let curPrice = curCoin['curPrice'];

        // 2. prePrice랑 curPrice를 비교
        // 2-1. curPrice === prePrice면 아무것도 하지않는다.
        // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다.
        if (curPrice > prePrice) {
            let askList = JSON.parse(await dbget('askList'));
            // askPrice가 curPrice보다 낮은지 확인
            for (let strAskPrice in askList) {
                let intAskPrice = Number(strAskPrice);
                if (intAskPrice > curPrice) continue;

                // 낮다면 거래를 체결한다.
                for (let socketID in askList[strAskPrice]) {
                    let roomID = askList[strAskPrice][socketID];
                    let playerInfo = JSON.parse(await dbhget(roomID, socketID));
                    let cash = Number(playerInfo['cash']);
                    let askVol = Number(playerInfo['askInPlayer'][strAskPrice]);
                    cash += askVol * intAskPrice;
                    playerInfo['cash'] = String(cash);

                    delete playerInfo['askInPlayer'][strAskPrice];
                    dbhset(roomID, socketID, JSON.stringfy(playerInfo));
                    socket.to(socketID).emit('askDone');

                    delete askList[strAskPrice][socketID];
                }
            }
            dbset('askList', JSON.stringify(askList));
        }

        // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
        else if (curPrice < prePrice) {
            let bidList = JSON.parse(await dbget('bidList'));
            // bidPrice가 curPrice보다 높은지 확인
            for (let strBidPrice in bidList) {
                let intBidPrice = Number(strBidPrice);
                if (intBidPrice < curPrice) continue;

                // 높다면 거래를 체결한다.
                for (let socketID in bidList[strBidPrice]) {
                    let roomID = bidList[strBidPrice][socketID];
                    let playerInfo = JSON.parse(await dbhget(roomID, socketID));
                    let coinVol = Number(playerInfo['coinVol']);
                    let askVol = Number(playerInfo['bidInPlayer'][strBidPrice]);
                    coinVol += askVol;
                    playerInfo['coinVol'] = String(coinVol);

                    delete playerInfo['bidInPlayer'][strBidPrice];
                    dbhset(roomID, socketID, JSON.stringfy(playerInfo));
                    socket.to(socketID).emit('bidDone');

                    delete bidList[strBidPrice][socketID];
                }
            }
            dbset('bidList', JSON.stringify(bidList));
        }
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
        let playerInfo = await dbhget(roomID, socketID);
        console.log('** BUY REQUEST :', playerInfo);
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.

        // 3. curPrice 가져오기
        let curPrice = Number(await dbget('curCoin', 'curPrice'));

        let asset_res = {};
        let buy_res = {};

        // 4. 구매 가능 여부 확인 후 "asset" emit
        if (cash >= intReqPrice * intReqVol) {
            // 5. 구매 처리 및 asset 정보 emit
            asset_res['result'] = 'success';
            asset_res['asset'] = asset;

            // 6. 현재가 >= 요청가 : 거래 체결 후 결과 송신(asset, buy_res("체결"))
            if (intReqPrice >= curPrice) {
                // 6-1. cash, coin 갯수 갱신
                cash -= curPrice * intReqVol;
                coinVol += intReqVol;

                // 6-2. buy_res update
                buy_res['type'] = '체결';
                asset_res['coinVol'] = String(coinVol);
                asset_res['cash'] = String(cash);
                this.socket.emit('asset', asset_res);
                this.socket.emit('buy_Res', buy_res);

                // 6-3. playerInfo Update
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);

                // 7. 현재가 < 요청가 : 호가 등록 후 결과 송신(asset, buy_res("호가"))
            } else {
                // 7-1. cash 갱신
                cash -= intReqPrice * intReqPrice;
                buy_res['type'] = '호가';
                asset_res['coinVol'] = String(coinVol);
                asset_res['cash'] = String(cash);
                this.socket.emit('asset', asset_res);
                this.socket.emit('buy_Res', buy_res);

                playerInfo['cash'] = String(cash);

                // 4-3. player 호가 목록 등록
                if (playerInfo['bidInPlayer'].hasOwnProperty(strReqPrice)) {
                    playerInfo['bidInPlayer'][strReqPrice] = String(
                        Number(playerInfo['bidInPlayer'][strReqPrice]) +
                            intReqVol
                    );
                } else {
                    playerInfo['bidInPlayer'][strReqPrice] = strReqVol;
                    let bidList = JSON.parse(await dbget('bidList'));
                    bidList[strReqPrice][socketID] = roomID;
                    dbset('bidList', JSON.stringfy(bidList));
                }
            }
            dbhset(roomID, socketID, JSON.stringfy(playerInfo));
        } else {
            //보유 현금이 부족한 경우 : asset_res["result"] = False를 emit
            asset_res['result'] = 'false';
            this.socket.emit('asset', asset_res);
        }
    }

    // 매도 요청 등록
    async sell(reqJson) {
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let strReqPrice = reqJson['reqPrice'];
        let intReqPrice = Number(strReqPrice);
        let strReqVol = reqJson['reqVol'];
        let intReqVol = Number(strReqVol);

        // 2. player_info 가져오기
        let playerInfo = await dbget(roomID, socketID);
        let cash = Number(playerInfo['cash']);
        let coinVol = Number(playerInfo['coinVol']);

        // 3. curPrice 가져오기
        let curPrice = Number(await dbget('curCoin', 'curPrice'));

        // 4. 매도 처리
        coinVol -= intReqVol;
        playerInfo['coinVol'] = String(coinVol);

        // 4. reqPrice <= curPrice?
        if (intReqPrice <= curPrice) {
            // 4-1. cash 갱신
            cash += intReqVol * intReqPrice;
            playerInfo['cash'] = String(cash);
        } else {
            // 4-2. bidList 등록
            let askPriceList = await dbget('askList', strReqPrice);
            askPriceList[socketID] = roomID;
            dbset(askList, strReqPrice, askPriceList, redis.print);

            // 4-3. player 호가 목록 등록
            let vol = 0;
            if (playerInfo['bid']['price']) {
                vol += Number(playerInfo['bid'][strReqPrice]);
            }
            vol += intReqVol;
            playerInfo['askList'][strReqPrice] = String(vol);
        }

        // 5. playerInfo 갱신
        dbset(roomID, socketID, playerInfo);

        // 6. success 보내기
        let resJson = {};
        resJson[result] = true;
        socket.emit('sell_Res', (resJson, playerInfo));
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
