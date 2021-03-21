const express = require('express');
const bodyParser = require('body-parser');
const sql = require('./mysql/connect');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var cors = require('cors');



// Todo : Add a User, Module

app.use(cors());

http.listen(5000, () => {
    console.log("Running on Port 5000...");
});


// DB function ---------------------------->>
const util = require('util');
const dbset = util.promisify(client.set).bind(client);
const dbget = util.promisify(client.get).bind(client);
// DB function ----------------------------<<


let tick = 0;
let prePrice = 0;
let curPrice = 0;


async function curPriceRenewal() {
    // let today = new Date();
    // let minutes = today.getMinutes();  // 분
    // let seconds = today.getSeconds();  // 초
    // let milliseconds = today.getMilliseconds(); // 밀리초
    // console.log("bfr:", minutes, ":", seconds, ":", milliseconds);

    // 1. bidList 불러옴
    let curCoin = await dbget("curCoin");
    curPrice = Number(curCoin["curPrice"]);


    // 2. prePrice랑 curPrice를 비교
    // 2-1. curPrice === prePrice면 아무것도 하지않는다.
    // 2-2. curPrice >= prePrice면, askPrice에서 curPrice보다 낮은 호가를 처리한다.
    if (curPrice > prePrice) {
        let askList = await dbget("askList");
        // askPrice가 curPrice보다 낮은지 확인
        for (let askPrice in askList) {
            let intAskPrice = Number(askPrice);
            if (intAskPrice > curPrice) continue

            // 낮다면 거래를 체결한다.
            for (let playerID in askList[askPrice]) {
                let roomID = askList[askPrice][playerID];
                let playerInfo = await dbget(roomID, playerID);
                let cash = Number(playerInfo["cash"]);
                let askVol = Number(playerInfo["bidList"][askPrice]);
                let socketID = playerInfo["socketID"];
                cash += askVol * intAskPrice;
                playerInfo["cash"] = String(cash);

                dbset(roomID, playerID, playerInfo);
                socket.to(socketID).emit("askDone");

                delete playerID["askList"][askPrice];
                delete askList[askPrice][playerID];
            }
        }
        dbset("askList", askList);
    }

    // 2-3. curPrice < prePrice면, bidPrice에서 curPrice보다 높은 호가를 처리한다.
    if (curPrice < prePrice) {
        let bidList = await dbget("bidList");
        // bidPrice가 curPrice보다 높은지 확인
        for (let bidPrice in bidList) {
            let intBidPrice = Number(bidPrice);
            if (intBidPrice < curPrice) continue

            // 높다면 거래를 체결한다.
            for (let playerID in bidList[bidPrice]) {
                let roomID = bidList[bidPrice][playerID];
                let playerInfo = await dbget(roomID, playerID);
                let coinVol = Number(playerInfo["coinVol"]);
                let vol = Number(playerInfo["bidList"][bidPrice]);
                let socketID = playerInfo["socketID"];
                coinVol += vol;
                playerInfo["coinVol"] = String(coinVol);

                dbset(roomID, playerID, playerInfo);
                socket.to(socketID).emit("bidDone");

                delete playerID["bidList"][bidPrice];
                delete bidList[bidPrice][playerID];
            }
        }
        dbset("bidList", bidList);
    }

    if (curPrice === prePrice) {
        let askList = await dbget("askList", String(curPrice));
        // 낮다면 거래를 체결한다.
        for (let playerID in askList) {
            let roomID = askList[playerID];
            let playerInfo = await dbget(roomID, playerID);
            let cash = Number(playerInfo["cash"]);
            let askVol = Number(playerInfo["bidList"][askPrice]);
            let socketID = playerInfo["socketID"];
            cash += askVol * intAskPrice;
            playerInfo["cash"] = String(cash);

            dbset(roomID, playerID, playerInfo);
            socket.to(socketID).emit("askDone");

            delete playerID["askList"][askPrice];
            delete askList[playerID];
        }
        dbset("askList", String(curPrice), askList);

        let bidList = await dbget("bidList", String(curPrice));
        // bidPrice가 curPrice보다 높은지 확인

        // 높다면 거래를 체결한다.
        for (let playerID in bidList) {
            let roomID = bidList[playerID];
            let playerInfo = await dbget(roomID, playerID);
            let coinVol = Number(playerInfo["coinVol"]);
            let bidVol = Number(playerInfo["bidList"][bidPrice]);
            let socketID = playerInfo["socketID"];
            coinVol += bidVol;
            playerInfo["coinVol"] = String(coinVol);

            dbset(roomID, playerID, playerInfo);
            socket.to(socketID).emit("bidDone");

            delete playerID["bidList"][bidPrice];
            delete bidList[playerID];
        }
        dbset("bidList", String(curPrice), bidList);
    }
}



// 매수 취소
async function cancelBid(reqJson) {
    let roomID = reqJson["roomID"];
    let playerID = reqJson["playerID"];
    let BidPrice = reqJson["reqPrice"];

    let bidList = await dbget("bidList", BidPrice);
    let playerInfo = await dbget(roomID, playerID);

    let cash = Number(playerInfo["cash"]);
    let bidVol = Number(playerInfo["bidList"][BidPrice]);

    cash += bidVol * Number(BidPrice);
    playerInfo["cash"] = String(cash);
    delete playerInfo["bidList"][BidPrice];
    dbset(roomID, playerID, playerInfo);

    delete bidList[playerID];
    dbset("bidList", BidPrice, bidList);
}

// 매도 취소 
async function cancelAsk(reqJson) {
    let roomID = reqJson["roomID"];
    let playerID = reqJson["playerID"];
    let AskPrice = reqJson["reqPrice"];

    let askList = await dbget("askList", AskPrice);
    let playerInfo = await dbget(roomID, playerID);

    let coinVol = Number(playerInfo["coinVol"]);
    let askVol = Number(playerInfo["askList"][AskPrice]);

    coinVol += bidVol;
    playerInfo["coinVol"] = String(coinVol);

    delete playerInfo[AskPrice];
    dbset(roomID, playerID, playerInfo);

    delete askList[playerID];
    dbset("askList", AskPrice, askList);
}




curPriceRenewal();
setInterval(curPriceRenewal, 100);
io.on('connection', (socket) => {
    socket.on('receive_data', (comment) => {
        console.log(comment);
        socket.emit('receive_data',
            {
                x: new Date(2016, 6, 1), open: 5, close: 10, high: 15, low: 0
            });
    });
    // db 넣기 --------------- >>
    // client.set("karockai", sObj);
    // client.set("test_room", dObj);
    // db 넣기 --------------- <<

    // curPrice 갱신 및 호가 처리
    // curPrice 갱신되면 bid 처리

    socket.on('join', () => {
        socket.emit('socket', '소켓이 연결됬습니다.');
    });


    /* 클라에서 socket.emit("createPrivateRoom")
    profile =
    {
        "socketID" : "String",
        "playerID" : "String"
    }
    */
    class Room {
        constructor(io, socket) {
            this.io = io;
            this.socket = socket;

            createPrivateRoom(profile) {
                const {socket} = this;
                const id = nanoid(15);

            }

        }
    }
    socket.on('createPrivateRoom', (profile) => {

        
    });







    // 매수호가 등록 
    socket.on("buyReq", (reqJson) => {
        async function buyReq(reqJson) {
            // 1. reqJson setting
            let roomID = reqJson["roomID"];
            let playerID = reqJson["playerID"];
            let strReqPrice = reqJson["reqPrice"];
            let intReqPrice = Number(strReqPrice);
            let strReqVol = reqJson["reqVol"];
            let intReqVol = Number(strReqVol);

            // 2. player_info 가져오기
            let playerInfo = await dbget(roomID, playerID);
            let cash = Number(playerInfo["cash"]);
            let coinVol = Number(playerInfo["coinVol"]);

            // 3. curPrice 가져오기
            let curPrice = Number(await dbget("curCoin", "curPrice"));

            // 4. 구매 처리
            cash -= intReqPrice * intReqVol;
            playerInfo["cash"] = String(cash);

            // 4. reqPrice > curPrice?
            if (intReqPrice >= curPrice) {
                // 4-1. coin 갯수 갱신
                coinVol += intReqVol;
                playerInfo["coinVol"] = String(coinVol);
            }
            else {
                // 4-2. buyList 등록
                let bidPriceList = await dbget("buyList", strReqPrice);
                bidPriceList[playerID] = roomID;
                dbset("buyList", strReqPrice, bidPriceList, redis.print);

                // 4-3. player 호가 목록 등록
                let vol = 0;
                if (playerInfo["bidList"][strReqPrice]) {
                    vol += Number(playerInfo["bidList"][strReqPrice]);
                }
                vol += intReqVol;
                playerInfo["bidList"][strReqPrice] = String(vol);
            }

            // 5. playerInfo 갱신
            dbset(roomID, playerID, playerInfo);

            // 6. success 보내기
            let resJson = {};
            resJson[result] = true;
            socket.emit("buyReqRes", (resJson, playerInfo));
            return true;
        }
        return buyReq(reqJson);
    });

    // 매도호가 등록 
    socket.on("sellReq", (reqJson) => {
        async function sellReq(reqJson) {
            // 1. reqJson setting
            let roomID = reqJson["roomID"];
            let playerID = reqJson["playerID"];
            let strReqPrice = reqJson["reqPrice"];
            let intReqPrice = Number(strReqPrice);
            let strReqVol = reqJson["reqVol"];
            let intReqVol = Number(strReqVol);

            // 2. player_info 가져오기
            let playerInfo = await dbget(roomID, playerID);
            let cash = Number(playerInfo["cash"]);
            let coinVol = Number(playerInfo["coinVol"]);

            // 3. curPrice 가져오기
            let curPrice = Number(await dbget("curCoin", "curPrice"));

            // 4. 매도 처리
            coinVol -= intReqVol;
            playerInfo["coinVol"] = String(coinVol);

            // 4. reqPrice <= curPrice?
            if (intReqPrice <= curPrice) {
                // 4-1. cash 갱신
                cash += intReqVol * intReqPrice;
                playerInfo["cash"] = String(cash);
            }
            else {
                // 4-2. bidList 등록
                let askPriceList = await dbget("askList", strReqPrice);
                askPriceList[playerID] = roomID;
                dbset(askList, strReqPrice, askPriceList, redis.print);

                // 4-3. player 호가 목록 등록
                let vol = 0;
                if (playerInfo["bid"]["price"]) {
                    vol += Number(playerInfo["bid"][strReqPrice]);
                }
                vol += intReqVol;
                playerInfo["askList"][strReqPrice] = String(vol);
            }

            // 5. playerInfo 갱신
            dbset(roomID, playerID, playerInfo);

            // 6. success 보내기
            let resJson = {};
            resJson[result] = true;
            socket.emit("sellReqRes", (resJson, playerInfo));
            return true;
        }
        return sellReq(reqJson);
    });


    socket.on('test', (comment) => {
        console.log(comment);
    });






    // console.log('user connected : ', socket.id);

    // socket.on('join', function () {
    //     var username = 'User' + user_count;
    //     socket.name = username;

    //     users[user_count] = {};
    //     users[user_count].id = socket.id;
    //     users[user_count].name = username;
    //     users[user_count].turn = false;
    //     user_count++;

    //     console.log('User Hash : ' + socket.id + '\nUser Name : ' + socket.name);

    //     io.emit('update', { author: '알림', message: socket.name + '님이 접속하였습니다.' });

    //     io.emit('update_users', users, user_count);
    // });

    // socket.on('message', function (data) {
    //     data.author = socket.name;
    //     console.log(data);
    //     /* io.sockets.emit() = 모든 유저(본인 포함)
    //     socket.broadcast.emit() = 본인을 제외한 나머지 모두 */
    //     io.emit('update', data);
    // });






    // socket.on('disconnect', function () {
    //     if (socket.name !== undefined) {
    //         console.log(socket.name + '님이 나가셨습니다.');
    //         for (let i = 0; i < user_count; i++) {
    //             if (users[i].id == socket.id) {
    //                 delete users[i];
    //                 break;

    //             }
    //         }
    //         user_count--;
    //         socket.broadcast.emit('update', { author: '알림', message: socket.name + '님이 나가셨습니다.' })
    //     }
    // });
});



