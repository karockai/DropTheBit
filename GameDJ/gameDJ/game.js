class Game {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }

    startGame(musicData) {
        const { io, socket } = this;
        let roomID = socket.roomID;

        // 방장만 노래를 바꿀 수 있도록 함
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
            if (!roomList[roomID]) return 0;
            if (
                roomList[roomID].hasOwnProperty('roomLeader') &&
                roomList[roomID]['roomLeader'] === socket.id
            ) {
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
        refreshWallet['preExPrice'] = 0;

        let walletInfo = {
            refreshWallet: refreshWallet,
            bfrWallet: bfrWallet,
        };
        io.to(roomID).emit('refreshWallet', walletInfo);
    }

    buy(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = socket.id;

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let playerID = playerInfo['playerID'];

        let bfrWallet = {};
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['coinVol'] = 0;
        bfrWallet['asset'] = playerInfo['asset'];

        let coinVol = parseInt(cash / curPrice);
        cash = cash - coinVol * curPrice;

        playerInfo['cash'] = cash;
        playerInfo['coinVol'] = coinVol;
        playerInfo['buyPrice'] = curPrice;

        // 6-4. buyDone
        let buyDone = {
            type: '매수 완료',
            // 6-3. refreshWallet update & emit
            socketID: socketID,
            playerID: playerID,
            vol: coinVol,
            buyPrice: curPrice,
        };
        io.to(roomID).emit('buyDone_Room', buyDone);

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'buy';
        refreshWallet['coinVol'] = playerInfo['coinVol'];
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['buyPrice'] = curPrice;

        this.refreshWallet(socketID, refreshWallet, bfrWallet);
    }

    // 매도 요청 등록
    sell(reqJson) {
        const { io, socket } = this;
        // 1. reqJson setting
        let roomID = reqJson['roomID'];
        let socketID = socket.id;

        // 3. player_info 가져오기
        let playerInfo = roomList[roomID][socketID];
        let cash = playerInfo['cash'];
        let coinVol = playerInfo['coinVol'];
        let playerID = playerInfo['playerID'];

        let bfrWallet = {};
        bfrWallet['cash'] = playerInfo['cash'];
        bfrWallet['coinVol'] = playerInfo['coinVol'];
        bfrWallet['asset'] = playerInfo['asset'];

        cash = cash + coinVol * curPrice;

        playerInfo['cash'] = cash;
        playerInfo['coinVol'] = 0;
        playerInfo['sellPrice'] = curPrice;

        let sellDone = {
            type: '매도 완료',
            socketID: socketID,
            playerID: playerID,
            vol: 0,
            sellPrice: curPrice,
        };

        io.to(roomID).emit('sellDone_Room', sellDone);

        let refreshWallet = {};
        refreshWallet['result'] = 'success';
        refreshWallet['type'] = 'sell';
        refreshWallet['coinVol'] = 0;
        refreshWallet['cash'] = playerInfo['cash'];
        refreshWallet['asset'] = playerInfo['asset'];
        refreshWallet['sellPrice'] = curPrice;

        this.refreshWallet(socketID, refreshWallet, bfrWallet);
    }

    refreshWallet(socketID, refreshWallet, bfrWallet) {
        const { io } = this;
        let walletInfo = {
            refreshWallet: refreshWallet,
            bfrWallet: bfrWallet,
        };

        io.to(socketID).emit('refreshWallet', walletInfo);
    }
}
export default Game;
