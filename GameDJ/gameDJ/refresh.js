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

    renewalCurCoin(io) {
        return new Promise(async function(resolve, reject) {
        // const { io } = this;
        console.log('----------------------renewalCurCoin------------------------');
        // 1. bidList 불러옴
        let curCoin = JSON.parse(await dbget('curCoin'));

        io.emit('chart', curCoin);
        // console.log(curCoin);
        let prePrice = curCoin['prePrice'];
        let curPrice = curCoin['curPrice'];
        let updateCount = 0;

        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- >>
        chartData.push(curCoin);
        if (chartData.length > 50) {
            chartData.shift();
        }
        // console.log('chartData : ', chartData);
        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- <<

        // console.log("현재가", curPrice, "이전가", prePrice);
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
                    // console.log("판매 중 player info 저장", playerInfo);
                    await dbhset(roomID, socketID, JSON.stringify(playerInfo));

                    delete askList[strAskPrice][socketID];
                    updateCount += 1;

                    // buyDone
                    let playerID = playerInfo['playerID'];
                    let sellDone = {
                        type: '매도 주문 체결',
                        playerID: playerID,
                        vol: askVol,
                        price: intAskPrice,
                    };
                    io.to(socketID).emit('sellDone', sellDone);
                    io.to(roomID).emit('sellDone_Room', sellDone);
                }
                if (Object.keys(askList[strAskPrice]).length === 0) {
                    // console.log("삭제해버립니다 : 판매", strAskPrice);
                    delete askList[strAskPrice];
                }
            }
            if (updateCount !== 0) {
                // console.log("호가 체결 결과 : 판매");
                // console.log(askList);
                await dbset('askList', JSON.stringify(askList));
            }
        }

        // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
        else if (curPrice < prePrice) {
            let bidList = JSON.parse(await dbget('bidList'));

            // bidPrice가 curPrice보다 높은지 확인
            for (let strBidPrice in bidList) {
                let intBidPrice = Number(strBidPrice);
                // console.log("얘는 통과할까요?",intBidPrice);
                if (intBidPrice < curPrice) continue;

                // 높다면 거래를 체결한다.
                for (let socketID in bidList[strBidPrice]) {
                    let roomID = bidList[strBidPrice][socketID];
                    let playerInfo = JSON.parse(await dbhget(roomID, socketID));
                    let coinVol = Number(playerInfo['coinVol']);
                    let bidVol = Number(playerInfo['bid'][strBidPrice]);
                    coinVol += bidVol;
                    playerInfo['coinVol'] = String(coinVol);

                    delete playerInfo['bid'][strBidPrice];
                    // console.log("구매 중 PlayerInfo 저장", playerInfo);
                    await dbhset(roomID, socketID, JSON.stringify(playerInfo));

                    delete bidList[strBidPrice][socketID];
                    updateCount += 1;

                    // sellDone
                    let playerID = playerInfo['playerID'];
                    let buyDone = {
                        type: '매수 주문 체결',
                        playerID: playerID,
                        vol: bidVol,
                        price: intBidPrice,
                    };
                    io.to(socketID).emit('buyDone', buyDone);
                    io.to(roomID).emit('buyDone_Room', buyDone);
                }
                if (Object.keys(bidList[strBidPrice]).length === 0) {
                    // console.log("삭제해버립니다 : 구매", strBidPrice);
                    delete bidList[strBidPrice];
                }
            }
            if (updateCount !== 0) {
                // console.log("호가 체결 결과 : 구매");
                console.log(bidList);
                await dbset('bidList', JSON.stringify(bidList));
            }
        }

        console.log('----------------------renewalCurCoin End------------------------');
        // await renewalInfo(curPrice);
        resolve();
    })
};

    renewalInfo(io) {
        return new Promise(async function(resolve, reject) {
        console.log('----------------------renewalInfo Start------------------------');
        // const { io } = this;
        let curCoin = JSON.parse(await dbget('curCoin'));
        let curPrice = curCoin['curPrice'];
        console.log(curPrice);
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
            let rankList = [];

            // roomInfo 순회하면서 playerInfo 가져옴
            // console.log(roomInfo);
            for (let socketID in roomInfo) {
                if (socketID.length != 20) continue;
                let playerInfo = JSON.parse(roomInfo[socketID]);

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
                if (asset) {
                    playerInfo['asset'] = String(asset);
                }
                playerInfo['cash'] = String(cash);
                playerInfo['coinVol'] = String(coinVol);

                let refreshWallet = {
                    type: 1,
                    cash: cash,
                    coinVol: coinVol,
                    asset: asset,
                };

                // rankObj 삽입
                let rankObj = {
                    playerID: playerInfo['playerID'],
                    asset: asset,
                };
                rankList.push(rankObj);

                // await dbhset(roomID, socketID, playerInfo);
                // roomInfo[socketID] = JSON.stringify(playerInfo);
                io.to(socketID).emit('refreshWallet', refreshWallet);
                // this.socket.emit('refreshWallet', refreshWallet);
                // console.log("renewalInfo :", playerInfo);
                await dbhset(roomID, socketID, JSON.stringify(playerInfo));
            }
            
            rankList.sort(function (a, b) {
                return b['asset'] - a['asset'];
            });
            
            io.to(roomID).emit('roomRank', rankList);
        }
        console.log('----------------------renewalInfo End------------------------');
        resolve();
        })
    };

    // refreshBid 갱신
    async refreshBid() {
        const { io } = this;
        let bidTable = JSON.parse(await dbget('bidTable'));
        let bidList = [];

        let bidObject4 = {
            sell: parseInt(bidTable.bid_size4),
            price: bidTable.bid_price4,
            buy: 0,
        };

        let bidObject3 = {
            sell: parseInt(bidTable.bid_size3),
            price: bidTable.bid_price3,
            buy: 0,
        };

        let bidObject2 = {
            sell: parseInt(bidTable.bid_size2),
            price: bidTable.bid_price2,
            buy: 0,
        };

        let bidObject1 = {
            sell: parseInt(bidTable.bid_size1),
            price: bidTable.bid_price1,
            buy: 0,
        };

        let bidObject0 = {
            sell: parseInt(bidTable.bid_size0),
            price: bidTable.bid_price0,
            buy: 0,
        };

        let askObject0 = {
            sell: 0,
            price: bidTable.ask_price0,
            buy: parseInt(bidTable.ask_size0),
        };

        let askObject1 = {
            sell: 0,
            price: bidTable.ask_price1,
            buy: parseInt(bidTable.ask_size1),
        };

        let askObject2 = {
            sell: 0,
            price: bidTable.ask_price2,
            buy: parseInt(bidTable.ask_size2),
        };

        let askObject3 = {
            sell: 0,
            price: bidTable.ask_price3,
            buy: parseInt(bidTable.ask_size3),
        };

        let askObject4 = {
            sell: 0,
            price: bidTable.ask_price4,
            buy: parseInt(bidTable.ask_size4),
        };

        bidList.push(askObject4);
        bidList.push(askObject3);
        bidList.push(askObject2);
        bidList.push(askObject1);
        bidList.push(askObject0);
        bidList.push(bidObject0);
        bidList.push(bidObject1);
        bidList.push(bidObject2);
        bidList.push(bidObject3);
        bidList.push(bidObject4);

        io.emit('refreshBid', bidList);
    }
}
export default Refresh;
