import socketio from 'socket.io';
import redis from 'redis';
import util from 'util';
let client = redis.createClient({ host: '3.34.156.16' });
client.on('error', function (error) {
    console.error(error);
});
const dbget = util.promisify(client.get).bind(client);
const dbset = util.promisify(client.set).bind(client);
const dbhset = util.promisify(client.hset).bind(client);
const dbhmset = util.promisify(client.hmset).bind(client);
const dbhget = util.promisify(client.hget).bind(client);
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
                let serverList = ['AWS0', 'AWS1'];
            if (roomID) {
                // 링크 받아서 들어온 사람
                console.log("참가자 연결");
                // roomID에 해당하는 주소를 받아와서 연결한다.
                console.log(roomID);
                let ipAddress = await dbget(roomID);
                socket.emit('ipToConnect', ipAddress);
            } else {
                // 방장
                console.log("방장 연결");
                // IPAddress를 돌면서 room * 5 + people이 가장 낮은 곳을 찾음
                let minConnected = 300;
                let connectionInfo = 0;
                let numConnected = 0;
                let ipAddress = 0;

                // 최소로 연결된 IP를 찾는다.
                for(let idx =0; idx <serverList.length; idx++){
                    
                    console.log(serverList[idx]);
                    connectionInfo = await dbhgetall(serverList[idx]);
                    console.log(connectionInfo);
                    console.log(connectionInfo['room']);
                    numConnected = Number(connectionInfo['room']) * 5 + Number(connectionInfo['player']);
                    if (numConnected < minConnected){
                        minConnected = numConnected;
                        ipAddress = connectionInfo['IP'];
                    }
                }
                console.log(ipAddress);
                if(ipAddress){
                    socket.emit('ipToConnect', ipAddress);
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
