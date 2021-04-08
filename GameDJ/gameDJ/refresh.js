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
        // io.emit('chart', curCoin);
        curPrice = curCoin['curPrice'];
        if (curPrice === prePrice) {
            return false;
        }

        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- >>
        chartData.push(curCoin);
        if (chartData.length > 100) {
            chartData.shift();
        }
        // 시작하자마자 차트를 그리기 위한 배열 ----------------------- <<
    }

    renewalInfo() {
        const { io } = this;

        for (let roomID in roomList) {
            let roomInfo = roomList[roomID];
            let rankList = [];

            if (roomInfo['gaming']) {
                // roomInfo 순회하면서 playerInfo 가져옴
                for (let socketID in roomInfo) {
                    if (socketID.length !== 20) continue;

                    let playerInfo = roomInfo[socketID];

                    let cash = playerInfo['cash'];
                    let coinVol = playerInfo['coinVol'];

                    playerInfo['asset'] = cash + curPrice * coinVol;

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
                    refreshWallet['preExPrice'] = playerInfo['preExPrice'];

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
            }

            // 공방 startGame logic
            // if (roomInfo['readyTime'] > 0 && roomInfo['roomLeader']) {
            //     roomList[roomID]['readyTime']--;
            //     console.log('readyTime :', roomList[roomID]['readyTime']);
            //     console.log('gaming :', roomList[roomID]['gaming']);
            //     io.to(roomID).emit(
            //         'restReadyTime',
            //         roomList[roomID]['readyTime']
            //     );
            // }

            // if (
            //     roomInfo['readyTime'] === 0 &&
            //     roomList[roomID]['gaming'] === false
            // ) {
            //     console.log('여기로 들어옵니까?');
            //     roomList[roomID]['gaming'] = true;
            //     io.to(roomInfo['roomLeader']).emit('publicGameStart');
            // }

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
}
export default Refresh;
