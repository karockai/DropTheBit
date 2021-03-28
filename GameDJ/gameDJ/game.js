import { POINT_CONVERSION_COMPRESSED } from 'constants';
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
    dbwatch,
    dbhdel,
} from './redis.js';

class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    async startGame() {
        const { io, socket } = this;
        let roomID = socket.roomID;
        let gameTime = roomList[roomID]['gameTime'];
        io.to(roomID).emit('chartData', { chartData: chartData });
        io.to(roomID).emit('startGame_Res', gameTime);

        async function realStart() {
            let roomID = socket.roomID;
            let musicName = roomList[roomID]['music'];
            roomList[roomID]['gaming'] = true;
            io.to(roomID).emit('startGame_Real', musicName);
        }

        let gameSchedule1 = setTimeout(realStart, 3000);
    }

    buy(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let reqPrice = Number(reqJson['currentBid']);
        let reqVol = Number(reqJson['currentVolume']);

        // 2. curPrice 가져오기
        let curPrice = curCoin['curPrice'];
        console.log('---------------------------------------------------');
        console.log(typeof curPrice);
        console.log('---------------------------------------------------');

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 6;

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let coinVol = playerInfo['coinVol'];
        let asset = playerInfo['asset'];
        let playerID = playerInfo['playerID'];

        // 5. 구매 처리 및 asset 정보 emit

        // 6. 요청가 >= 현재가 : 거래 체결 후 결과 송신(asset, buy_res("체결"))
        if (reqPrice >= curPrice) {
            // 6-1. cash, coin 갯수 갱신
            cash -= curPrice * reqVol;
            coinVol += reqVol;

            // 6-2. playerInfo Update
            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;

            roomList[roomID][socketID] = playerInfo;

            // 6-3. refreshWallet update & emit
            refreshWallet['coinVol'] = coinVol;
            refreshWallet['cash'] = cash;
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);

            // 6-4. buyDone
            let buyDone = {
                type: '매수 완료',
                // 6-3. refreshWallet update & emit
                playerID: playerID,
                vol: reqVol,
                price: curPrice,
            };
            io.to(socketID).emit('buyDone', buyDone);
            io.to(roomID).emit('buyDone_Room', buyDone);

            console.log('현재가로 구매 완료 :', playerInfo);
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
                bidList[reqPrice] = {};
                bidList[reqPrice][socketID] = roomID;
            }
            roomList[roomID][socketID] = playerInfo;

            // 6-3. refreshWallet update & emit
            refreshWallet['coinVol'] = coinVol;
            refreshWallet['cash'] = cash;
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);

            let bidDone = {
                type: '매수 주문',
                playerID: playerID,
                vol: reqVol,
                price: reqPrice,
            };
            console.log('호가 등록 완료', playerInfo);
            socket.emit('bidDone', bidDone);
            socket.to(roomID).emit('bidDone_Room', bidDone);

            this.sendBidTable(reqJson);
        }
        console.log('-------BUY END-------------');
    }

    // 매도 요청 등록
    sell(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        console.log('-----------Sell -----------', reqJson);
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let reqPrice = Number(reqJson['currentBid']);
        let reqVol = Number(reqJson['currentVolume']);

        // 2. curPrice 가져오기
        let curPrice = curCoin['curPrice'];

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 6;

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let coinVol = playerInfo['coinVol'];
        let asset = playerInfo['asset']; // asset은 변할 일이 없으므로 그냥 String 채로 가져와서 그대로 넣는다.
        let playerID = playerInfo['playerID'];

        // 6. 요청가 <= 현재가 : 거래 체결 후 결과 송신(asset, sell_res("체결"))
        if (reqPrice <= curPrice) {
            // 6-1. cash, coin 갯수 갱신
            cash += curPrice * reqVol;
            coinVol -= reqVol;

            // 6-3. playerInfo Update
            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;
            roomList[roomID][socketID] = playerInfo;

            // 6-2. sell_res update
            refreshWallet['coinVol'] = coinVol;
            refreshWallet['cash'] = cash;
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);

            // 6-4. sellDone
            let sellDone = {
                type: '매도 완료',
                playerID: playerID,
                vol: reqVol,
                price: curPrice,
            };

            io.to(socketID).emit('sellDone', sellDone);
            io.to(roomID).emit('sellDone_Room', sellDone);
            console.log('현재가로 판매 완료 :', playerInfo);
            // 7. 요청가 > 현재가 : 호가 등록 후 결과 송신(asset, sell_res("호가"))
        } else {
            coinVol -= reqVol;

            playerInfo['cash'] = cash;
            playerInfo['coinVol'] = coinVol;

            // 4-3. player 호가 목록 등록
            console.log(playerInfo);
            console.log(playerInfo['ask']);

            if (playerInfo['ask'].hasOwnProperty(reqPrice)) {
                playerInfo['ask'][reqPrice] =
                    playerInfo['ask'][reqPrice] + reqVol;
            } else {
                playerInfo['ask'][reqPrice] = reqVol;
                askList[reqPrice] = {};
                askList[reqPrice][socketID] = roomID;
            }
            roomList[roomID][socketID] = playerInfo;

            console.log('호가 등록 완료', playerInfo);
            let askDone = {
                type: '매도 주문',
                playerID: playerID,
                vol: reqVol,
                price: reqPrice,
            };
            refreshWallet['coinVol'] = coinVol;
            refreshWallet['cash'] = cash;
            refreshWallet['asset'] = asset;
            socket.emit('refreshWallet', refreshWallet);
            socket.emit('askDone', askDone);
            socket.to(roomID).emit('askDone_Room', askDone);

            this.sendAskTable(reqJson);
        }
        console.log('-----------Sell End-----------');
    }

    // 매수 요청 취소
    async cancelBid(reqJson) {
        const { socket } = this;
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let bidPrice = reqJson['reqPrice'];

        // bidList의 Length가 1이면 가격 자체를 지워버린다.
        if (Object.keys(bidList[bidPrice]).length === 1) {
            delete bidList[bidPrice];
        } else {
            delete bidList[bidPrice][socketID];
        }

        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let bidVol = playerInfo['bid'][bidPrice];
        cash += bidVol * bidPrice;
        playerInfo['cash'] = cash;
        delete playerInfo['bid'][bidPrice];
        roomList[roomID][socketID] = playerInfo;

        // 매수 취소 완료 Response 필요
        this.sendBidTable(reqJson);
    }

    // 매도 요청 취소
    async cancelAsk(reqJson) {
        const { socket } = this;
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let askPrice = reqJson['reqPrice'];

        // 취소 요청한 가격에 해당하는 목록을 불러온다
        console.log(reqJson);
        // askList의 Length가 1이면 가격 자체를 지워버린다.
        if (Object.keys(askList[askPrice]).length === 1) {
            delete askList[askPrice];
        } else {
            delete askList[askPrice][socketID];
        }

        let playerInfo = roomList[roomID][socketID];
        let coinVol = playerInfo['coinVol'];
        let askVol = playerInfo['ask'][askPrice];

        coinVol += askVol;
        playerInfo['coinVol'] = coinVol;
        delete playerInfo['ask'][askPrice];
        roomList[roomID][socketID] = playerInfo;

        // 매수 취소 완료 Response 필요
        this.sendAskTable(reqJson);
    }

    async sendBidTable(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = roomList[roomID][socketID];

        let bidTable = playerInfo['bid'];
        let bidTableKeys = Object.keys(bidTable);
        let bidTable_Res = [];

        for (let bidPriceIdx in bidTableKeys) {
            let temp = {};
            let bidPrice = bidTableKeys[bidPriceIdx];
            let bidVol = bidTable[bidPrice];
            temp['price'] = bidPrice;
            temp['vol'] = bidVol;

            bidTable_Res.push(temp);
        }

        bidTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        this.socket.emit('bidTable_Res', bidTable_Res);
    }

    async sendAskTable(reqJson) {
        let roomID = reqJson['roomID'];
        let socketID = reqJson['socketID'];
        let playerInfo = roomList[roomID][socketID];

        let askTable = playerInfo['ask'];
        let askTableKeys = Object.keys(askTable);
        let askTable_Res = [];

        for (let askPriceIdx in askTableKeys) {
            let temp = {};
            let askPrice = askTableKeys[askPriceIdx];
            let askVol = askTable[askPrice];
            temp['price'] = askPrice;
            temp['vol'] = askVol;

            askTable_Res.push(temp);
        }

        askTable_Res.sort(function (a, b) {
            return b['price'] - a['price'];
        });

        this.socket.emit('askTable_Res', askTable_Res);
    }
}
export default Game;
