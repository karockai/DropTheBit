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
    let block = [];
    // let response = {};
    for(let idx=0; idx<serverList.length; idx++){
        let name = serverList[idx];
        let ip = ipList[idx];
        let serverData = await dbhgetall(name);
        let room = serverData['room'];
        let player = serverData['player'];
        // console.log("HI");
        await axios.get('http://' + ip + '/status').then(response=>{
            let cpuStat = response.data['cpuLoad'];
            let memStat = response.data['memUsed'];
            // console.log(`response from ${ip}/status`, response, cpuStat, memStat);

            block.push(
                        // {
                        //     "type": "section",
                        //     "text": {
                        //         "type": "mrkdwn",
                        //         "text": 
                                `서버:\t${name}(${ip})
                                 방 개수: \t${room}
                                 접속자 수:\t${player}
                                 CPU 사용량:\t${cpuStat}%
                                 메모리 사용량:\t${memStat}%`
                        //     },
                        //     "accessory": {
                        //         "type": "image",
                        //         "image_url": "https://api.slack.com/img/blocks/bkb_template_images/approvalsNewDevice.png",
                        //         "alt_text": "computer thumbnail"
                        //     }
                        // }
                
                )
        })
    }
    // response['blocks'] = block;
    return block;
}

app.post('/status', async (req,res)=>{
    if (req.body.event.text === "모니터링"){
        // console.log(req.body.event.text);
        let roomNum = [];
        let playerNum = [];
        let cpuStat = 0;
        let memStat = 0;
        serverInfo().then((messages)=>{
            console.log("message received");
            res.send({'challenge':req.body.challenge});
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
