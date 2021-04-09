
import dotenv from 'dotenv';
import slack from '@slack/webhook';
dotenv.config({path:"../.env"});
const webhook = new slack.IncomingWebhook(process.env.SLACK);

// Send the notification
webhook.sendMessage = async function(msg){
  await webhook.send({
    text: `서버 : ${process.env.SERVERNAME} \n ${msg}`,
  });
};

export default webhook;
