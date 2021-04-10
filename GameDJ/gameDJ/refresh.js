import { dbget } from './redis.js';
import Game from './game.js';
import webhook from '../slack.js';

class Refresh {
    constructor(io) {
        this.io = io;
    }

    async renewalCurCoin() {
        try {
            const { io } = this;

            // 1. bidList 불러옴
            let updateCurCoin = JSON.parse(await dbget('curCoin'));
            if (!updateCurCoin) return false;
            curCoin = updateCurCoin;
            // io.emit('chart', curCoin);
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
            // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다. (매도)
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

                        let bfrWallet = {};
                        bfrWallet['coinVol'] = playerInfo['coinVol'];
                        bfrWallet['cash'] = playerInfo['cash'];
                        bfrWallet['asset'] = playerInfo['asset'];

                        cash += askVol * Number(askPrice);
                        playerInfo['cash'] = cash;
                        playerInfo['actionRestTime'] = 5;
                        playerInfo['recentAction'] = 0;
                        //? 예은 디버깅
                        if (playerInfo['playerID'].length === 2) {
                            console.log('sell 호가 체결---------');
                            console.log(playerInfo);
                            console.log(askList);
                        }
                        // console.log('매도 체결',askPrice, playerInfo['ask'][askPrice])
                        delete playerInfo['ask'][askPrice];
                        roomList[roomID][socketID] = playerInfo;
                        delete askList[askPrice][socketID];

                        let refreshWallet = {};
                        refreshWallet['result'] = 'success';
                        refreshWallet['type'] = 'refreshCurCoin-Sell';
                        refreshWallet['coinVol'] = playerInfo['coinVol'];
                        refreshWallet['cash'] = playerInfo['cash'];
                        refreshWallet['asset'] = playerInfo['asset'];

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
                    }
                    delete askList[askPrice];
                }
            }

            // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다. (매수)
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

                        let bfrWallet = {};
                        bfrWallet['coinVol'] = playerInfo['coinVol'];
                        bfrWallet['cash'] = playerInfo['cash'];
                        bfrWallet['asset'] = playerInfo['asset'];

                        coinVol += bidVol;
                        playerInfo['coinVol'] = coinVol;
                        playerInfo['actionRestTime'] = 5;
                        playerInfo['recentAction'] = 1;

                        let refreshWallet = {};
                        refreshWallet['result'] = 'success';
                        refreshWallet['type'] = 'refreshCurCoin-Buy';
                        refreshWallet['coinVol'] = playerInfo['coinVol'];
                        refreshWallet['cash'] = playerInfo['cash'];
                        refreshWallet['asset'] = playerInfo['asset'];

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
                    }
                    delete bidList[bidPrice];
                }
            }
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    renewalInfo() {
        try {
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
                        let bidCash = 0;
                        let askVol = 0;
                        let playerBid = Object.keys(playerInfo['bid']);
                        let playerAsk = Object.keys(playerInfo['ask']);
                        if (playerBid.length > 0) {
                            bidCash =
                                playerBid[0] * playerInfo['bid'][playerBid[0]];
                        }
                        if (playerAsk.length > 0) {
                            askVol = playerInfo['ask'][playerAsk[0]];
                        }

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
                        bfrWallet['asset'] = cash + prePrice * coinVol;

                        let refreshWallet = {};
                        refreshWallet['result'] = 'success';
                        refreshWallet['type'] = 'renewalInfo';
                        refreshWallet['coinVol'] = playerInfo['coinVol'];
                        refreshWallet['cash'] = playerInfo['cash'];
                        refreshWallet['asset'] = playerInfo['asset'];

                        new Game(io, socketID).refreshWallet(
                            socketID,
                            refreshWallet,
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

                        let a_curCoin = io.to(socketID).emit('chart', curCoin);
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
                        recentBuy: roomInfo['recentBuy'],
                        recentSell: roomInfo['recentSell'],
                        recentNothing: roomInfo['recentNothing'],
                    };
                    io.to(roomID).emit('roomAction', roomAction);
                }

                // gameOver logic
                if (roomInfo['gaming']) {
                    roomList[roomID]['gameTime']--;

                    // let gameTimeData = {
                    //     timerSet: true,
                    //     isPlaying: true,
                    //     gameTime: roomList[roomID]['gameTime'],
                    // };

                    io.to(roomID).emit(
                        'restGameTime',
                        roomList[roomID]['gameTime']
                    );
                    console.log('gameTime:', roomList[roomID]['gameTime']);
                }

                if (roomInfo['gameTime'] === -1) {
                    roomList[roomID]['gaming'] = false;
                    this.gameOver(roomID);
                }
            }
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    gameOver(roomID) {
        try {
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
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }

    // refreshBid 갱신
    async refreshBid() {
// <<<<<<< HEAD
//         const { io } = this;
//         let bidObj = JSON.parse(await dbget('bidTable'));
//         let totalAsk = bidObj['total_ask_size'];
//         let totalBid = bidObj['total_bid_size'];
//         let total = totalAsk + totalBid;

//         let askPercent = (totalAsk / total) * 100;
//         let bidPercent = 100 - askPercent;

//         let exList = {
//             askPercent: askPercent,
//             bidPercent: bidPercent,
//         };
//         io.emit('refreshExList', exList);
// =======
        try {
            const { io } = this;
            let bidObj = JSON.parse(await dbget('bidTable'));

            let totalAsk = bidObj['total_ask_size'];
            let totalBid = bidObj['total_bid_size'];
            let total = totalAsk + totalBid;

            let askPercent = (totalAsk / total) * 100;
            let bidPercent = 100 - askPercent;

            let exList = {
                askPercent: askPercent,
                bidPercent: bidPercent,
            };

            io.emit('refreshExList', exList);
        } catch (err) {
            console.error(err);
            webhook.sendMessage(`에러 발생 : ${error}`);
        }
    }
}
export default Refresh;
