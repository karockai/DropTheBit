class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    startGame(musicData) {
        const { io, socket } = this;
        let roomID = socket.roomID;

        // 공방이 아닐 때, 방장만 노래를 바꿀 수 있도록 함
        if (roomList[roomID]['gaming'] === false) {
            roomList[roomID]['gaming'] = true;
            roomList[roomID]['music'] = musicData['musicName'];
            roomList[roomID]['gameTime'] = musicData['gameTime'];
        }
        io.to(roomID).emit('chartData', { chartData: chartData });
        io.to(roomID).emit('startGame_Res', {
            gameTime: roomList[roomID]['gameTime'],
            musicName: roomList[roomID]['music'],
        });
        let message = '게임이 시작됩니다.';
        io.to(roomID).emit('update', { message: message, author: '[SYSTEM]' });

        function realStart() {
            let roomID = socket.roomID;
            let dataForStart = {};
            // 방장이 시작하는 경우에만 3,2,1 추가되도록함 (중간유저 입장 시 3초 추가 안되도록)
            if (roomList[roomID]['roomLeader'] === socket.id) {
                roomList[roomID]['gameTime'] += 3;
            }
            dataForStart['musicName'] = roomList[roomID]['music'];
            dataForStart['gameTime'] = roomList[roomID]['gameTime'];

            io.to(roomID).emit('startGame_Real', dataForStart);
        }
        //!  확인 필요
        let gameSchedule1 = setTimeout(realStart, 3000);

        let bfrWallet = {};
        bfrWallet['coinVol'] = 0;
        bfrWallet['cash'] = 100000000;
        bfrWallet['asset'] = 100000000;

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'initialize';
        refreshWallet['coinVol'] = 0;
        refreshWallet['cash'] = 100000000;
        refreshWallet['asset'] = 100000000;
        refreshWallet['avgPrice'] = 0;

        let walletInfo = {
            refreshWallet:refreshWallet,
            bfrWallet:bfrWallet,
        };
        io.to(roomID).emit('refreshWallet', walletInfo);
    }

    buy(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = socket.id;
        let reqPrice = Number(reqJson['currentBid']);
        let reqVol = Number(reqJson['currentVolume']);

        // 2. curPrice 가져오기
        let curPrice = curCoin['curPrice'];

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let coinVol = playerInfo['coinVol'];
        let playerID = playerInfo['playerID'];

        let bfrWallet = {};
        bfrWallet['coinVol'] = playerInfo['coinVol'];
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['asset'] = playerInfo['asset'];

        // ! 실수로 잘못된 값이 들어온 경우 처리하기
        if (cash < reqPrice * reqVol) {
            console.log('buy 실패 :', reqJson);
        }

        // 5. 구매 처리 및 asset 정보 emit
        // 6. 요청가 >= 현재가 : 거래 체결 후 결과 송신(asset, buy_res("체결"))
        if (reqPrice >= curPrice) {
            if (playerInfo['avgPrice'] === 0) {
                playerInfo['avgPrice'] = curPrice;
            } else {
                playerInfo['avgPrice'] = Math.round(
                    (coinVol * playerInfo['avgPrice'] + reqVol * curPrice) /
                        (coinVol + reqVol)
                );
            }

            // 6-1. cash, coin 갯수 갱신
            cash -= curPrice * reqVol;
            coinVol += reqVol;

            // 6-2. playerInfo Update
            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;

            roomList[roomID][socketID] = playerInfo;

            // 6-4. buyDone
            let buyDone = {
                type: '매수 완료',
                // 6-3. refreshWallet update & emit
                socketID: socketID,
                playerID: playerID,
                vol: reqVol,
                price: curPrice,
            };
            io.to(roomID).emit('buyDone_Room', buyDone);

            // console.log('현재가로 구매 완료 :', playerInfo);
            // 7. 요청가 < 현재가 : 호가 등록 후 결과 송신(asset, buy_res("호가"))
        } else {
            // 7-1. cash 갱신
            cash -= reqPrice * reqVol;
            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;
            // 4-3. player 호가 목록 등록
            if (playerInfo['bid'].hasOwnProperty(reqPrice)) {
                playerInfo['bid'][reqPrice] =
                    playerInfo['bid'][reqPrice] + reqVol;
            } else {
                playerInfo['bid'][reqPrice] = reqVol;
                if (!bidList.hasOwnProperty(reqPrice)) {
                    bidList[reqPrice] = {};
                }
                bidList[reqPrice][socketID] = roomID;
            }
            playerInfo['bidCash'] += reqPrice * reqVol;
            roomList[roomID][socketID] = playerInfo;

            let bidDone = {
                type: '매수 주문',
                socketID: socketID,
                playerID: playerID,
                vol: reqVol,
                price: reqPrice,
            };
            // console.log('호가 등록 완료', playerInfo);
            io.to(roomID).emit('bidDone_Room', bidDone);
            // console.log("호가 등록 완료", bidList);
            this.sendBidTable(reqJson);
        }

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'buy';
        refreshWallet['coinVol'] = playerInfo['coinVol'];
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['avgPrice'] = playerInfo['avgPrice'];

        // 6-3. refreshWallet update & emit
        this.refreshWallet(socketID, refreshWallet, bfrWallet);
        // console.log('-------BUY END-------------');
    }

    // 매도 요청 등록
    sell(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        // console.log('-----------Sell -----------', reqJson);
        let roomID = reqJson['roomID'];
        let socketID = socket.id;
        let reqPrice = Number(reqJson['currentBid']);
        let reqVol = Number(reqJson['currentVolume']);

        // 2. curPrice 가져오기
        let curPrice = curCoin['curPrice'];

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let coinVol = playerInfo['coinVol'];
        let playerID = playerInfo['playerID'];

        let bfrWallet = {};
        bfrWallet['coinVol'] = playerInfo['coinVol'];
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['asset'] = playerInfo['asset'];

        // ! 실수로 잘못된 값이 들어온 경우 처리하기
        if (coinVol < reqVol) {
            console.log('sell 실패 :', reqJson);
        }
        // ! 실수로 잘못된 값이 들어온 경우 처리하기

        // 6. 요청가 <= 현재가 : 거래 체결 후 결과 송신(asset, sell_res("체결"))
        if (reqPrice <= curPrice) {
            // 6-1. cash, coin 갯수 갱신
            cash += curPrice * reqVol;
            coinVol -= reqVol;
            // asset = cash + coinVol * curPrice;

            // 6-3. playerInfo Update
            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;
            // playerInfo['asset'] = asset;
            roomList[roomID][socketID] = playerInfo;

            // 6-4. sellDone
            let sellDone = {
                type: '매도 완료',
                socketID: socketID,
                playerID: playerID,
                vol: reqVol,
                price: curPrice,
            };

            io.to(roomID).emit('sellDone_Room', sellDone);
            // console.log('현재가로 판매 완료 :', playerInfo);
            // 7. 요청가 > 현재가 : 호가 등록 후 결과 송신(asset, sell_res("호가"))
        } else {
            coinVol -= reqVol;
            // asset = cash + coinVol * curPrice;

            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;
            // playerInfo['asset'] = asset;
            // 4-3. player 호가 목록 등록
            // console.log(playerInfo);
            // console.log(playerInfo['ask']);

            if (playerInfo['ask'].hasOwnProperty(reqPrice)) {
                playerInfo['ask'][reqPrice] =
                    playerInfo['ask'][reqPrice] + reqVol;
            } else {
                playerInfo['ask'][reqPrice] = reqVol;
                if (!askList.hasOwnProperty(reqPrice)) {
                    askList[reqPrice] = {};
                }
                askList[reqPrice][socketID] = roomID;
            }
            playerInfo['askVol'] += reqVol;
            roomList[roomID][socketID] = playerInfo;

            // console.log('호가 등록 완료', playerInfo);
            let askDone = {
                type: '매도 주문',
                socketID: socketID,
                playerID: playerID,
                vol: reqVol,
                price: reqPrice,
            };

            io.to(roomID).emit('askDone_Room', askDone);
            // console.log("호가 등록 완료", askList);
            this.sendAskTable(reqJson);
        }

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'sell';
        refreshWallet['coinVol'] = playerInfo['coinVol'];
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['avgPrice'] = playerInfo['avgPrice'];

        this.refreshWallet(socketID, refreshWallet, bfrWallet);
        // console.log('-----------Sell End-----------');
    }

    // 매수 요청 취소
    async cancelBid(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let bidPrice = reqJson['reqPrice'];

        // bidList의 Length가 1이면 가격 자체를 지워버린다.
        if (!bidList[bidPrice]) return false;
        // console.log("매수 취소 전", bidList);
        if (Object.keys(bidList[bidPrice]).length === 1) {
            delete bidList[bidPrice];
        } else {
            delete bidList[bidPrice][socketID];
        }

        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let bidVol = playerInfo['bid'][bidPrice];

        let bfrWallet = {};
        bfrWallet['coinVol'] = playerInfo['coinVol'];
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['asset'] = playerInfo['asset'];

        cash += bidVol * bidPrice;
        playerInfo['cash'] = cash;
        playerInfo['bidCash'] -= bidVol * bidPrice;
        delete playerInfo['bid'][bidPrice];
        roomList[roomID][socketID] = playerInfo;

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'cancelBid';
        refreshWallet['coinVol'] = playerInfo['coinVol'];
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['avgPrice'] = playerInfo['avgPrice'];

        this.refreshWallet(socketID, refreshWallet, bfrWallet);

        this.sendBidTable(reqJson);
    }

    // 매도 요청 취소
    async cancelAsk(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let askPrice = reqJson['reqPrice'];

        // 취소 요청한 가격에 해당하는 목록을 불러온다
        // askList의 Length가 1이면 가격 자체를 지워버린다.
        if (!askList[askPrice]) return false;
        // console.log("매도 취소 전", askList);
        if (Object.keys(askList[askPrice]).length === 1) {
            delete askList[askPrice];
        } else {
            delete askList[askPrice][socketID];
        }

        let playerInfo = roomList[roomID][socketID];
        let coinVol = playerInfo['coinVol'];
        let askVol = playerInfo['ask'][askPrice];

        let bfrWallet = {};
        bfrWallet['coinVol'] = playerInfo['coinVol'];
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['asset'] = playerInfo['asset'];

        coinVol += askVol;
        playerInfo['coinVol'] = coinVol;
        playerInfo['askVol'] -= askVol;
        delete playerInfo['ask'][askPrice];
        roomList[roomID][socketID] = playerInfo;

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'cancelAsk';
        refreshWallet['coinVol'] = playerInfo['coinVol'];
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['avgPrice'] = playerInfo['avgPrice'];

        this.refreshWallet(socketID, walletInfo, bfrWallet);

        this.sendAskTable(reqJson);
    }

    async sendBidTable(reqJson) {
        const { io } = this;
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = roomList[roomID][socketID];

        let bidTable = playerInfo['bid'];
        let bidTable_Res = [];

        for (let key in bidTable) {
            let temp = {};
            temp['price'] = key;
            temp['vol'] = bidTable[key];

            bidTable_Res.push(temp);
        }

        bidTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        io.to(socketID).emit('bidTable_Res', bidTable_Res);
    }

    async sendAskTable(reqJson) {
        const { io } = this;
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = roomList[roomID][socketID];

        let askTable = playerInfo['ask'];
        let askTable_Res = [];

        for (let key in askTable) {
            let temp = {};
            temp['price'] = key;
            temp['vol'] = askTable[key];

            askTable_Res.push(temp);
        }

        askTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        io.to(socketID).emit('askTable_Res', askTable_Res);
    }

    refreshWallet(socketID, refreshWallet, bfrWallet) {
        const { io } = this;
        let walletInfo = {
            refreshWallet: refreshWallet,
            bfrWallet: bfrWallet,
        };

        io.to(socketID).emit('refreshWallet', walletInfo);
    }

    // async refreshWallet(socketID, type, coinVol, cash, asset, avgPrice) {
    //     const { io } = this;
    //     let refreshWallet = {};
    //     refreshWallet['result'] = 'success';
    //     refreshWallet['type'] = type;
    //     refreshWallet['coinVol'] = coinVol;
    //     refreshWallet['cash'] = cash;
    //     refreshWallet['asset'] = asset;
    //     refreshWallet['avgPrice'] = avgPrice;
    //     io.to(socketID).emit('refreshWallet', refreshWallet);
    // }
}
export default Game;
