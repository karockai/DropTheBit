import { dbget } from './redis.js';
import Game from './game.js';

class Refresh {
    constructor(io) {
        this.io = io;
    }

    async renewalCurCoin() {
        const { io } = this;

        // 1. bidList 불러옴
        let updateCurCoin = JSON.parse(await dbget('curCoin'));
        if (!updateCurCoin) return false;
        curCoin = updateCurCoin;
        io.emit('chart', curCoin);
        curPrice = curCoin['curPrice'];
        if (curPrice === prePrice) {
            return false;
        }
        console.log(curPrice);

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
                // console.log(askPrice, curPrice);
                // console.log(askPrice < curPrice);
                // console.log(Number(askPrice) < curPrice);
                if (Number(askPrice) > curPrice) continue;

                // 낮다면 거래를 체결한다.
                for (let socketID in askList[askPrice]) {
                    let roomID = askList[askPrice][socketID];
                    let playerInfo = roomList[roomID][socketID];
                    let cash = playerInfo['cash'];
                    let askVol = playerInfo['ask'][askPrice];
                    let coinVol = playerInfo['coinVol'];

                    // 평단가 로직
                    if (coinVol === 0) {
                        playerInfo['avgPrice'] = 0;
                    }

                    let bfrWallet = {};
                    bfrWallet['coinVol'] = coinVol;
                    bfrWallet['cash'] = playerInfo['cash'];
                    bfrWallet['asset'] = playerInfo['asset'];

                    cash += askVol * askPrice;
                    playerInfo['cash'] = cash;
                    playerInfo['askVol'] -= askVol;
                    playerInfo['actionRestTime'] = 5;
                    playerInfo['recentAction'] = 1;

                    // console.log('매도 체결',askPrice, playerInfo['ask'][askPrice])
                    delete playerInfo['ask'][askPrice];
                    roomList[roomID][socketID] = playerInfo;
                    delete askList[askPrice][socketID];
                    playerInfo['asset'] =
                        cash +
                        playerInfo['bidCash'] +
                        curPrice * (playerInfo['askVol'] + coinVol);

                    let refreshWallet = {};
                    refreshWallet['result'] = 'success';
                    refreshWallet['type'] = 'refreshCurCoin-Sell';
                    refreshWallet['coinVol'] = playerInfo['coinVol'];
                    refreshWallet['cash'] = playerInfo['cash'];
                    refreshWallet['asset'] = playerInfo['asset'];
                    refreshWallet['avgPrice'] = playerInfo['avgPrice'];

                    new Game(io, socketID).refreshWallet(
                        socketID,
                        refreshWallet,
                        bfrWallet
                    );

                    // sellDone
                    let playerID = playerInfo['playerID'];
                    let sellDone = {
                        type: '매도 주문 체결',
                        socketID: socketID,
                        playerID: playerID,
                        vol: askVol,
                        price: askPrice,
                    };
                    io.to(roomID).emit('sellDone_Room', sellDone);
                    new Game(io, socketID).sendAskTable({
                        roomID: roomID,
                        socketID: socketID,
                    });
                }
                delete askList[askPrice];
            }
        }

        // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
        else if (curPrice < prePrice) {
            // bidPrice가 curPrice보다 높은지 확인
            for (let bidPrice in bidList) {
                // console.log(bidPrice, curPrice);
                // console.log(bidPrice < curPrice);
                // console.log(Number(bidPrice) < curPrice);
                if (Number(bidPrice) < curPrice) continue;
                // 높다면 거래를 체결한다.
                for (let socketID in bidList[bidPrice]) {
                    let roomID = bidList[bidPrice][socketID];
                    let playerInfo = roomList[roomID][socketID];
                    let coinVol = playerInfo['coinVol'];
                    let bidVol = playerInfo['bid'][bidPrice];
                    let cash = playerInfo['cash'];

                    let bfrWallet = {};
                    bfrWallet['coinVol'] = playerInfo['coinVol'];
                    bfrWallet['cash'] = playerInfo['cash'];
                    bfrWallet['asset'] = playerInfo['asset'];

                    if (playerInfo['avgPrice'] === 0) {
                        playerInfo['avgPrice'] = bidPrice;
                    } else {
                        playerInfo['avgPrice'] = Math.round(
                            (coinVol * playerInfo['avgPrice'] +
                                bidVol * bidPrice) /
                                (coinVol + bidVol)
                        );
                    }

                    coinVol += bidVol;
                    playerInfo['coinVol'] = coinVol;
                    playerInfo['bidCash'] -= bidPrice * bidVol;
                    playerInfo['asset'] =
                        cash +
                        playerInfo['bidCash'] +
                        curPrice * (playerInfo['askVol'] + coinVol);
                    playerInfo['actionRestTime'] = 5;
                    playerInfo['recentAction'] = 0;

                    let refreshWallet = {};
                    refreshWallet['result'] = 'success';
                    refreshWallet['type'] = 'refreshCurCoin-Buy';
                    refreshWallet['coinVol'] = playerInfo['coinVol'];
                    refreshWallet['cash'] = playerInfo['cash'];
                    refreshWallet['asset'] = playerInfo['asset'];
                    refreshWallet['avgPrice'] = playerInfo['avgPrice'];

                    new Game(io, socketID).refreshWallet(
                        socketID,
                        refreshWallet,
                        bfrWallet
                    );

                    // console.log('매수 체결', bidPrice, playerInfo['bid'][bidPrice])
                    delete playerInfo['bid'][bidPrice];
                    roomList[roomID][socketID] = playerInfo;
                    delete bidList[bidPrice][socketID];

                    // buyDone
                    let playerID = playerInfo['playerID'];
                    let buyDone = {
                        type: '매수 주문 체결',
                        socketID: socketID,
                        playerID: playerID,
                        vol: bidVol,
                        price: bidPrice,
                    };

                    io.to(roomID).emit('buyDone_Room', buyDone);
                    new Game(io, socketID).sendBidTable({
                        roomID: roomID,
                        socketID: socketID,
                    });
                }
                delete bidList[bidPrice];
            }
        }

        // console
        //     .log
        //     // '----------------------renewalCurCoin End------------------------'
        //     ();
        // this.renewalInfo();
    }

    renewalInfo() {
        const { io } = this;

        for (let roomID in roomList) {
            let roomInfo = roomList[roomID];
            let rankList = [];

            if (roomInfo['gaming']) {
                roomInfo['recentBuy'] = 0;
                roomInfo['recentSell'] = 0;
                roomInfo['recentNothing'] = 0;
                // roomInfo 순회하면서 playerInfo 가져옴
                for (let socketID in roomInfo) {
                    if (socketID.length !== 20) continue;

                    let playerInfo = roomInfo[socketID];

                    let cash = playerInfo['cash'];
                    let coinVol = playerInfo['coinVol'];
                    let bidCash = playerInfo['bidCash'];
                    let askVol = playerInfo['askVol'];
                    playerInfo['asset'] =
                        cash + bidCash + curPrice * (askVol + coinVol);

                    if (playerInfo['actionRestTime'] > 0) {
                        playerInfo['actionRestTime']--;
                        if (playerInfo['recentAction']) {
                            roomInfo['recentBuy']++;
                        } else {
                            roomInfo['recentSell']++;
                        }
                    } else {
                        roomInfo['recentNothing']++;
                    }

                    let bfrWallet = {};
                    bfrWallet['coinVol'] = playerInfo['coinVol'];
                    bfrWallet['cash'] = playerInfo['cash'];
                    bfrWallet['asset'] =
                        cash + bidCash + prePrice * (askVol + coinVol);

                    let refreshWallet = {};
                    refreshWallet['result'] = 'success';
                    refreshWallet['type'] = 'renewalInfo';
                    refreshWallet['coinVol'] = playerInfo['coinVol'];
                    refreshWallet['cash'] = playerInfo['cash'];
                    refreshWallet['asset'] = playerInfo['asset'];
                    refreshWallet['avgPrice'] = playerInfo['avgPrice'];

                    new Game(io, socketID).refreshWallet(
                        socketID,
                        refreshWallet,5
                        bfrWallet
                    );

                    // rankObj 삽입
                    let rankObj = {
                        playerID: playerInfo['playerID'],
                        asset: playerInfo['asset'],
                        socketID: socketID,
                    };
                    rankList.push(rankObj);

                    roomList[roomID][socketID] = playerInfo;
                }
                rankList.sort(function (a, b) {
                    return b['asset'] - a['asset'];
                });

                for (let idx in rankList) {
                    io.to(rankList[idx]['socketID']).emit(
                        'MyRank',
                        rankList[idx],
                        parseInt(idx) + 1
                    );
                }
                let rankList2 = rankList.slice(0, 7);
                io.to(roomID).emit('roomRank', rankList2);

                let roomAction = {
                    rececntBuy: roomInfo['recentBuy'],
                    rececntSell: roomInfo['recentSell'],
                    recentNothing: roomInfo['recentNothing'],
                };
                io.to(roomID).emit('roomAction', roomAction);
            }

            // gameOver logic
            if (roomInfo['gaming']) {
                roomList[roomID]['gameTime']--;
                console.log('gameTime: ', roomList[roomID]['gameTime']);
                io.to(roomID).emit(
                    'restGameTime',
                    roomList[roomID]['gameTime']
                );
            }
            if (roomInfo['gameTime'] === -1) {
                roomList[roomID]['gaming'] = false;
                this.gameOver(roomID);
            }
        }
    }

    gameOver(roomID) {
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

            for (let bid in playerInfo['bid']) {
                for (let id in bidList[bid]) {
                    if (socketID === id) {
                        delete bidList[bid][id];
                    }
                }
            }
            for (let ask in playerInfo['ask']) {
                for (let id in askList[ask]) {
                    if (socketID === id) {
                        delete askList[ask][id];
                    }
                }
            }
        }
        leaderBoard.sort(function (a, b) {
            return b['asset'] - a['asset'];
        });

        // 랭크 갱신
        for (let i = 0; i <= leaderBoard.length - 1; i++) {
            let newRankIdx = -1;
            for (let j = 9; j >= 0; j--) {
                if (todayRank[j]['asset'] < leaderBoard[i]['asset']) {
                    newRankIdx = j;
                } else break;
            }
            if (newRankIdx === -1) {
                break;
            } else {
                todayRank.splice(newRankIdx, 0, leaderBoard[i]);
            }
        }
        todayRank.splice(10);

        io.to(roomID).emit('gameOver', leaderBoard);

        // back to lobby 전에 미리 방 정보 초기화
        if (roomInfo['gameTime'] < 0) {
            roomInfo['gameTime'] = 0;
            roomInfo['music'] = 'Random_Music';
            if (roomID === publicRoomID) {
                roomInfo['roomLeader'] = 0;
            }
        }
        roomInfo['leaderBoard'] = leaderBoard;
        roomList[roomID] = roomInfo;
    }

    // refreshBid 갱신
    async refreshBid() {
        const { io } = this;
        let exTable = JSON.parse(await dbget('bidTable'));
        if (!exTable) return false;

        exList = [];

        let bidObject4 = {
            price: exTable.bid_price4,
            buy: parseInt(exTable.bid_size4),
        };

        let bidObject3 = {
            price: exTable.bid_price3,
            buy: parseInt(exTable.bid_size3),
        };

        let bidObject2 = {
            price: exTable.bid_price2,
            buy: parseInt(exTable.bid_size2),
        };

        let bidObject1 = {
            price: exTable.bid_price1,
            buy: parseInt(exTable.bid_size1),
        };

        let bidObject0 = {
            price: exTable.bid_price0,
            buy: parseInt(exTable.bid_size0),
        };

        let askObject0 = {
            price: exTable.ask_price0,
            buy: parseInt(exTable.ask_size0),
        };

        let askObject1 = {
            price: exTable.ask_price1,
            buy: parseInt(exTable.ask_size1),
        };

        let askObject2 = {
            price: exTable.ask_price2,
            buy: parseInt(exTable.ask_size2),
        };

        let askObject3 = {
            price: exTable.ask_price3,
            buy: parseInt(exTable.ask_size3),
        };

        let askObject4 = {
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
