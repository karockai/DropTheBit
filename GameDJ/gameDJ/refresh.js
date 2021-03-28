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
import Game from './game.js';

class Refresh {
    constructor(io) {
        this.io = io;
    }

    async renewalCurCoin() {
        const { io } = this;
        // console
        //     .log
        //     // '----------------------renewalCurCoin------------------------'
        //     ();
        // 1. bidList 불러옴
        curCoin = JSON.parse(await dbget('curCoin'));

        io.emit('chart', curCoin);
        // console.log(curCoin);
        let prePrice = curCoin['prePrice'];
        let curPrice = curCoin['curPrice'];
        let updateCount = 0;

        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- >>
        chartData.push(curCoin);
        if (chartData.length > 100) {
            chartData.shift();
        }
        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- <<

        // 2. prePrice랑 curPrice를 비교
        // 2-1. curPrice === prePrice면 아무것도 하지않는다.
        // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다.
        if (curPrice > prePrice) {
            // askPrice가 curPrice보다 낮은지 확인
            for (let askPrice in askList) {
                if (askPrice > curPrice) continue;

                // 낮다면 거래를 체결한다.
                for (let socketID in askList[askPrice]) {
                    let roomID = askList[askPrice][socketID];
                    let playerInfo = roomList[roomID][socketID];
                    let cash = playerInfo['cash'];
                    let askVol = playerInfo['ask'][askPrice];
                    cash += askVol * askPrice;
                    playerInfo['cash'] = cash;

                    delete playerInfo['ask'][askPrice];
                    roomList[roomID][socketID] = playerInfo;

                    delete askList[askPrice][socketID];

                    // buyDone
                    let playerID = playerInfo['playerID'];
                    let sellDone = {
                        type: '매도 주문 체결',
                        playerID: playerID,
                        vol: askVol,
                        price: askPrice,
                    };
                    io.to(socketID).emit('sellDone', sellDone);
                    io.to(roomID).emit('sellDone_Room', sellDone);
                    await new Game(io, socketID).sendAskTable({'roomID':roomID, 'socketID':socketID});
                }
                delete askList[askPrice];
            }
        }

        // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
        else if (curPrice < prePrice) {
            // bidPrice가 curPrice보다 높은지 확인
            for (let bidPrice in bidList) {
                if (bidPrice < curPrice) continue;

                // 높다면 거래를 체결한다.
                for (let socketID in bidList[bidPrice]) {
                    let roomID = bidList[bidPrice][socketID];
                    let playerInfo = roomList[roomID][socketID];
                    let coinVol = playerInfo['coinVol'];
                    let bidVol = playerInfo['bid'][bidPrice];

                    if (playerInfo['avgPrice'] === 0){
                        playerInfo['avgPrice'] = bidPrice;
                    } else{
                        playerInfo['avgPrice'] = Math.round(((coinVol * playerInfo['avgPrice']) + (bidVol * bidPrice)) / (coinVol + bidVol));
                    }

                    coinVol += bidVol;
                    playerInfo['coinVol'] = coinVol;

                    delete playerInfo['bid'][bidPrice];
                    roomList[roomID][socketID] = playerInfo;

                    delete bidList[bidPrice][socketID];

                    // sellDone
                    let playerID = playerInfo['playerID'];
                    let buyDone = {
                        type: '매수 주문 체결',
                        playerID: playerID,
                        vol: bidVol,
                        price: bidPrice,
                    };
                    io.to(socketID).emit('buyDone', buyDone);
                    io.to(roomID).emit('buyDone_Room', buyDone);
                    await new Game(io, socketID).sendBidTable({'roomID':roomID, 'socketID':socketID});
                }
                delete bidList[bidPrice];
            }
        }

        // console
        //     .log
        //     // '----------------------renewalCurCoin End------------------------'
        //     ();
    }

    async renewalInfo() {
        // console
        //     .log
        //     // '----------------------renewalInfo Start------------------------'
        //     ();
        const { io } = this;
        let curPrice = curCoin['curPrice'];
        let prePrice = curCoin['prePrice'];
        let priceChange = curPrice - prePrice;
        // console.log(curPrice);
        // 해야할 것. 방을 돌면서 현재 가격에 맞게 갱신시켜준다.
        // redis 순회하면서 roomInfo 가져옴
        if (priceChange) {
            for (let roomID in roomList) {
                let roomInfo = roomList[roomID];
                let rankList = [];

                // roomInfo 순회하면서 playerInfo 가져옴
                for (let socketID in roomInfo) {
                    if (socketID.length != 20) continue;

                    let playerInfo = roomInfo[socketID];
                    let asset = playerInfo['asset'];
                    let cash = playerInfo['cash'];
                    let coinVol = playerInfo['coinVol'];

                    for (let askPrice in playerInfo['ask']) {
                        coinVol += playerInfo['ask'][askPrice];
                    }
                    asset += priceChange * coinVol;
                    playerInfo['asset'] = asset;
                    
                    let refreshWallet = {
                        type: 1,
                        cash: cash,
                        coinVol: coinVol,
                        asset: asset,
                        avgPrice: playerInfo['avgPrice'],
                    };

                    // rankObj 삽입
                    let rankObj = {
                        playerID: playerInfo['playerID'],
                        asset: asset,
                    };
                    rankList.push(rankObj);

                    io.to(socketID).emit('refreshWallet', refreshWallet);

                    roomList[roomID][socketID] = playerInfo;
                }

                rankList.sort(function (a, b) {
                    return b['asset'] - a['asset'];
                });
                // console.log(roomInfo);
                if (roomInfo['gaming']) {
                    roomList[roomID]['gameTime']--;
                    console.log(roomList[roomID]['gameTime']);
                }
                if (roomInfo['gameTime'] < 0) {
                    this.gameOver(roomID);
                }
                io.to(roomID).emit('roomRank', rankList);
                io.to(roomID).emit(
                    'restGameTime',
                    roomList[roomID]['gameTime']
                );
            }
            // console
            //     .log
            //     // '----------------------renewalInfo End------------------------'
            //     ();
        }
    }

    async gameOver(roomID) {
        const { io } = this;
        let roomInfo = roomList[roomID];
        let leaderBoard = [];
        for (let socketID in roomInfo) {
            if (socketID.length < 15) continue;
            let playerInfo = roomInfo[socketID];
            let temp = {};
            temp['playerID'] = playerInfo['playerID'];
            temp['asset'] = playerInfo['asset'];

            leaderBoard.push(temp);

            for (let bid in playerInfo['bid']){
                for (let id  in bidList[bid]){
                    if (socketID === id){
                        delete bidList[bid][id]
                    }
                }
            }

            for (let ask in playerInfo['ask']){
                for (let id  in askList[ask]){
                    if (socketID === id){
                        delete askList[ask][id]
                    }
                }
            }
        }

        leaderBoard.sort(function (a, b) {
            return b['asset'] - a['asset'];
        });

        delete roomList[roomID];
        io.to(roomID).emit('gameOver', leaderBoard);
    }

    // refreshBid 갱신
    async refreshBid() {
        const { io } = this;
        let exTable = JSON.parse(await dbget('bidTable'));
        let exList = [];

        let bidObject4 = {
            sell: parseInt(exTable.bid_size4),
            price: exTable.bid_price4,
            buy: 0,
        };

        let bidObject3 = {
            sell: parseInt(exTable.bid_size3),
            price: exTable.bid_price3,
            buy: 0,
        };

        let bidObject2 = {
            sell: parseInt(exTable.bid_size2),
            price: exTable.bid_price2,
            buy: 0,
        };

        let bidObject1 = {
            sell: parseInt(exTable.bid_size1),
            price: exTable.bid_price1,
            buy: 0,
        };

        let bidObject0 = {
            sell: parseInt(exTable.bid_size0),
            price: exTable.bid_price0,
            buy: 0,
        };

        let askObject0 = {
            sell: 0,
            price: exTable.ask_price0,
            buy: parseInt(exTable.ask_size0),
        };

        let askObject1 = {
            sell: 0,
            price: exTable.ask_price1,
            buy: parseInt(exTable.ask_size1),
        };

        let askObject2 = {
            sell: 0,
            price: exTable.ask_price2,
            buy: parseInt(exTable.ask_size2),
        };

        let askObject3 = {
            sell: 0,
            price: exTable.ask_price3,
            buy: parseInt(exTable.ask_size3),
        };

        let askObject4 = {
            sell: 0,
            price: exTable.ask_price4,
            buy: parseInt(exTable.ask_size4),
        };

        exList.push(askObject4);
        exList.push(askObject3);
        exList.push(askObject2);
        exList.push(askObject1);
        exList.push(askObject0);
        exList.push(bidObject0);
        exList.push(bidObject1);
        exList.push(bidObject2);
        exList.push(bidObject3);
        exList.push(bidObject4);

        io.emit('refreshBid', exList);
    }
}
export default Refresh;
