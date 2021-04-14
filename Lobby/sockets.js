import socketio from 'socket.io';
import redis from 'redis';
import util from 'util';
import dotenv from 'dotenv';
dotenv.config();
let client = redis.createClient({ host: process.env.REDIS, password: process.env.REDIS_PASSWORD});
client.on('error', function (error) {
    console.error(error);
});
const dbhmget = util.promisify(client.hmget).bind(client);
const dbhincrby = util.promisify(client.hincrby).bind(client);
const dbhgetall = util.promisify(client.hgetall).bind(client);

export default {
    async init(server) {
        let io;
        function serverSetting(server) {
            return new Promise(function (resolve, reject) {
                io = socketio(server);
                resolve();
            });
        }
        await serverSetting(server);
        function returnIpAddress(socket, roomID){
            return new Promise(async function (resolve, reject) {
            let serverList = (process.env.SERVERS).split(' ');
            if (roomID) {
                // 링크 받아서 들어온 사람
                // console.log("참가자 연결");
                // roomID에 해당하는 주소를 받아와서 연결한다.
                let response = await dbhgetall(roomID);
                console.log(roomID, response);
                //이상한 방으로 접속을 시도할 경우 Home으로 Redirect한다.
                if (!response){
                    socket.emit('roomConnectErr');
                    return
                }
                let ipAddress = response['ip'];
                let name = response['name'];
                console.log("기존 방에 접속", name, ipAddress);
                await dbhincrby(name, 'player', 1);
                // console.log(name, "의 인원", player);
                socket.emit('ipToConnect', ipAddress);
            } else {
                // 방장
                // console.log("방장 연결");
                // IPAddress를 돌면서 room * 5 + people이 가장 낮은 곳을 찾음
                let minConnected = 300;
                let connectionInfo = 0;
                let numConnected = 0;
                let ipAddress = 0;
                let name = '';
                // 최소로 연결된 IP를 찾는다.
                for(let idx =0; idx <serverList.length; idx++){
                    
                    // console.log(serverList[idx]);
                    connectionInfo = await dbhgetall(serverList[idx]);
                    // console.log(connectionInfo);
                    // console.log(connectionInfo['room']);
                    numConnected = Number(connectionInfo['player']);
                    if (numConnected < minConnected){
                        minConnected = numConnected;
                        ipAddress = connectionInfo['ip'];
                        name = serverList[idx];
                    }
                }
                
                // console.log(ipAddress);
                if(ipAddress){
                    console.log("새로운 방 생성", ipAddress);
                    socket.emit('ipToConnect', ipAddress);
                    await dbhincrby(name, 'player', 1);
                }
                else{
                    //이리로 들어올 일이 있으려나?
                    console.log("서버 수용인원이 가득찼습니다.")
                    return undefined
                }
            }
            resolve();
            });
        }
        

        io.on('connection', (socket) => {
            socket.on('requireIpInfo', (roomID) => {
                returnIpAddress(socket, roomID);
            });
        });   
    }
};
