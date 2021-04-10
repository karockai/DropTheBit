#!/usr/bin/env node

import sockets from '../sockets.js';
import express from 'express';
import redis from 'redis';
import util from 'util';
import dotenv from 'dotenv';
import axios from 'axios';
import webhook from '../slack.js';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
dotenv.config();
let client = redis.createClient({ host: process.env.REDIS, password: process.env.REDIS_PASSWORD});
client.on('error', function (error) {
    console.error(error);
});
const dbhset = util.promisify(client.hset).bind(client);
const dbhgetall = util.promisify(client.hgetall).bind(client);

let serverList = (process.env.SERVERS).split(' ');
let ipList = (process.env.IPS).split(' ');

async function serverInfo(){
    let messages = [];
    for(let idx=0; idx<serverList.length; idx++){
        let name = serverList[idx];
        let ip = ipList[idx];
        let serverData = await dbhgetall(name);
        let room = serverData['room'];
        let player = serverData['player'];
        await axios.get('http://' + ip + '/status').then(response=>{
            let cpuStat = response.data['cpuLoad'];
            let memStat = response.data['memUsed'];
            console.log(`response from ${ip}/status`, response, cpuStat, memStat);
            messages.push(`
                SERVERNAME : ${name} IP : ${ip}
                방 개수 : ${room} 접속자수 : ${player}
                CPU 사용량 : ${cpuStat}% 
                메모리 사용량 : ${memStat}%
            `)
        })
    }
    return messages;
}

app.post('/status', async (req,res)=>{
    if (req.body.event.text === "서버상태"){
        console.log(req.body.event.text);
        let roomNum = [];
        let playerNum = [];
        let cpuStat = 0;
        let memStat = 0;
        serverInfo().then((messages)=>{
            console.log("message received");
            // res.send({'challenge':req.body.challenge});
            webhook.sendMessage(messages);
        });
    }
})


for(let idx=0; idx<serverList.length; idx++){
    console.log(serverList[idx], ipList[idx]);
    dbhset(serverList[idx], 'room', 0, 'player', 0, 'ip', ipList[idx]);
}
const server = app.listen(process.env.PORT, process.env.IP, () => {
    console.log(`Server listening on port ${server.address().port}`);
    webhook.sendMessage("스따또 이랏샤이마세~");
});

sockets.init(server);
