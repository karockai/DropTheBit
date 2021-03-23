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

class Refresh {
    constructor(io) {
        this.io = io;
    }

    async renewalCurCoin() {
        const { io } = this;
        // 1. bidList 불러옴
        let curCoin = JSON.parse(await dbget('curCoin'));

        io.emit('chart', curCoin);
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
                    let askVol = Number(playerInfo['ask'][strAskPrice]);
                    cash += askVol * intAskPrice;
                    playerInfo['cash'] = String(cash);

                    delete playerInfo['ask'][strAskPrice];
                    dbhset(roomID, socketID, JSON.stringfy(playerInfo));
                    socket.to(socketID).emit('askDone');

                    delete askList[strAskPrice][socketID];
                }
            }
            await dbset('askList', JSON.stringify(askList));
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
                    let askVol = Number(playerInfo['bid'][strBidPrice]);
                    coinVol += askVol;
                    playerInfo['coinVol'] = String(coinVol);

                    delete playerInfo['bid'][strBidPrice];
                    dbhset(roomID, socketID, JSON.stringify(playerInfo));
                    socket.to(socketID).emit('bidDone');

                    delete bidList[strBidPrice][socketID];
                }
            }
            await dbset('bidList', JSON.stringify(bidList));
        }

        await this.renewalInfo(curPrice);
    }

    async renewalInfo(curPrice) {
        const { io } = this;

        // 해야할 것. 방을 돌면서 현재 가격에 맞게 갱신시켜준다.
        let roomList = await dblrange('roomList', 0, -1);
        // let roomList = [];
        // redis 순회하면서 roomInfo 가져옴
        // console.log(roomList);
        for (let idx in roomList) {
            let roomID = roomList[idx];
            if (roomID.length < 15) continue;
            // console.log(roomID);
            let roomInfo = await dbhgetall(roomID);

            // room 호가 수집

            // roomInfo 순회하면서 playerInfo 가져옴
            // console.log(roomInfo);
            for (let socketID in roomInfo) {
                if (socketID.length != 15) continue;
                let playerInfo = JSON.parse(roomInfo[socketID]);
                console.log('여기까지 ', socketID);

                let asset = 0;
                let cash = Number(playerInfo['cash']);
                let coinVol = Number(playerInfo['coinVol']);
                asset = cash + coinVol * curPrice;

                for (let bidPrice in playerInfo['bid']) {
                    asset +=
                        Number(bidPrice) * Number(playerInfo['bid'][bidPrice]);
                }

                for (let askPrice in playerInfo['ask']) {
                    asset +=
                        Number(askPrice) * Number(playerInfo['ask'][askPrice]);
                }

                playerInfo['asset'] = String(coinVol);

                let refreshWallet = {
                    type: 1,
                    cash: cash,
                    coinVol: coinVol,
                    asset: asset,
                };

                // await dbhset(roomID, socketID, playerInfo);
                // roomInfo[socketID] = JSON.stringify(playerInfo);
                io.to(socketID).emit('refreshWallet', refreshWallet);
            }

            await dbhset(roomID, roomInfo);
        }
    }

    // refreshBid 갱신
    async refreshBid() {}
}
export default Refresh;
