import { dbset, dbget, dbhset, dbhget, dbhexi } from './redis.js';
class Refresh {
    async renewalCurCoin() {
        // 1. bidList 불러옴
        let curCoin = JSON.parse(await dbget('curCoin'));
        console.log('curCoin : ', curCoin);
        console.log('curCoinType : ', typeof curCoin);
        // socket.to(socket.roomID).emit('renewalCurCoin', curCoin);
        socket.of('/').emit('chart', curCoin);
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
}

export default Refresh;
