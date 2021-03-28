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
        return new Promise(async function (resolve, reject) {
            // const { io } = this;
            console.log(
                '----------------------renewalCurCoin------------------------'
            );
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
            // console.log('chartData : ', chartData);
            // 시작하자마자 차트를 그리기 위한 배열 ----------------------- <<

            // console.log("현재가", curPrice, "이전가", prePrice);
            // 2. prePrice랑 curPrice를 비교
            // 2-1. curPrice === prePrice면 아무것도 하지않는다.
            // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다.
            if (curPrice > prePrice) {
                // let askList = JSON.parse(await dbget('askList'));
                // askPrice가 curPrice보다 낮은지 확인

                for (let askPrice in askList) {
                    // let askPrice = Number(askPrice);
                    if (askPrice > curPrice) continue;

                    // 낮다면 거래를 체결한다.
                    for (let socketID in askList[askPrice]) {
                        let roomID = askList[askPrice][socketID];
                        // let playerInfo = JSON.parse(
                        //     await dbhget(roomID, socketID)
                        // );
                        let playerInfo = roomList[roomID][socketID];
                        let cash = playerInfo['cash'];
                        let askVol = playerInfo['ask'][askPrice];
                        cash += askVol * askPrice;
                        playerInfo['cash'] = cash;

                        delete playerInfo['ask'][askPrice];
                        // await dbhset(
                        //     roomID,
                        //     socketID,
                        //     JSON.stringify(playerInfo)
                        // );
                        roomList[roomID][socketID] = playerInfo;

                        delete askList[askPrice][socketID];
                        // updateCount += 1;

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
                    }
                    delete askList[askPrice];
                }
                // if (updateCount !== 0) {
                //     console.log('호가 체결 결과 : 판매');
                //     console.log(askList);
                //     await dbset('askList', JSON.stringify(askList));

                // }
            }

            // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
            else if (curPrice < prePrice) {
                // let bidList = JSON.parse(await dbget('bidList'));

                // bidPrice가 curPrice보다 높은지 확인
                for (let bidPrice in bidList) {
                    // let bidPrice = bidPrice;
                    // console.log("얘는 통과할까요?",bidPrice);
                    if (bidPrice < curPrice) continue;

                    // 높다면 거래를 체결한다.
                    for (let socketID in bidList[bidPrice]) {
                        let roomID = bidList[bidPrice][socketID];
                        // let playerInfo = JSON.parse(
                        //     await dbhget(roomID, socketID)
                        // );
                        let playerInfo = roomList[roomID][socketID];
                        let coinVol = playerInfo['coinVol'];
                        let bidVol = playerInfo['bid'][bidPrice];
                        coinVol += bidVol;
                        playerInfo['coinVol'] = coinVol;

                        delete playerInfo['bid'][bidPrice];
                        // console.log("구매 중 PlayerInfo 저장", playerInfo);
                        // await dbhset(
                        //     roomID,
                        //     socketID,
                        //     JSON.stringify(playerInfo)
                        // );
                        roomList[roomID][socketID] = playerInfo;

                        delete bidList[bidPrice][socketID];
                        // updateCount += 1;

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
                    }
                    delete bidList[bidPrice];
                }
                // if (updateCount !== 0) {
                //     console.log('호가 체결 결과 : 구매');
                //     console.log(bidList);
                //     await dbset('bidList', JSON.stringify(bidList));
                // }
            }

            console.log(
                '----------------------renewalCurCoin End------------------------'
            );
            // await renewalInfo(curPrice);
            resolve();
        });
    }

    renewalInfo(io) {
        return new Promise(async function (resolve, reject) {
            console.log(
                '----------------------renewalInfo Start------------------------'
            );
            // const { io } = this;
            // let curCoin = JSON.parse(await dbget('curCoin'));
            let curPrice = curCoin['curPrice'];
            console.log(curPrice);
            // 해야할 것. 방을 돌면서 현재 가격에 맞게 갱신시켜준다.
            // let roomList = await dblrange('roomList', 0, -1);
            // let roomList = [];
            // redis 순회하면서 roomInfo 가져옴
            // console.log(roomList);
            for (let roomID in roomList) {
                // let roomID = roomList[idx];
                // if (roomID.length < 15) continue;
                // console.log(roomID);
                // let roomInfo = await dbhgetall(roomID);
                let roomInfo = roomList[roomID];
                // let roomTime = timeList[roomID];
                // room 호가 수집
                let rankList = [];

                // roomInfo 순회하면서 playerInfo 가져옴
                for (let socketID in roomInfo) {
                    if (socketID.length != 20) continue;
                    // let playerInfo = JSON.parse(roomInfo[socketID]);
                    let playerInfo = roomInfo[socketID];

                    let asset = 0;
                    let cash = playerInfo['cash'];
                    let coinVol = playerInfo['coinVol'];
                    asset = cash + coinVol * curPrice;

                    for (let bidPrice in playerInfo['bid']) {
                        asset += bidPrice * playerInfo['bid'][bidPrice];
                    }

                    for (let askPrice in playerInfo['ask']) {
                        asset += curPrice * playerInfo['ask'][askPrice];
                    }
                    if (asset) {
                        playerInfo['asset'] = asset;
                    }
                    playerInfo['cash'] = cash;
                    playerInfo['coinVol'] = coinVol;

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

                    io.to(socketID).emit('refreshWallet', refreshWallet);

                    // await dbhset(roomID, socketID, JSON.stringify(playerInfo));
                    roomList[roomID][socketID] = playerInfo;
                }

                rankList.sort(function (a, b) {
                    return b['asset'] - a['asset'];
                });

                if (roomInfo['gaming']){
                    roomList[roomID]['gameTime']--;
                }
                if (roomInfo['gameTime'] < 0){
                    gameOver(roomID);
                }
                io.to(roomID).emit('roomRank', rankList);
                io.to(roomID).emit('restGameTime', roomList[roomID]['gameTime']);
            }
            console.log(
                '----------------------renewalInfo End------------------------'
            );
            resolve();
        });

        async function gameOver(roomID) {
            let roomInfo = roomList[roomID];
            let leaderBoard = [];
            for (let socketID in roomInfo) {
                if (socketID.length < 15) continue;
                let playerInfo = roomInfo[socketID];
                let temp = {};
                temp['playerID'] = playerInfo['playerID'];
                temp['asset'] = playerInfo['asset'];

                leaderBoard.push(temp);
            }

            leaderBoard.sort(function (a, b) {
                return b['asset'] - a['asset'];
            });
            // delete timeList[roomID];
            io.to(roomID).emit('gameOver', leaderBoard);
        }
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
