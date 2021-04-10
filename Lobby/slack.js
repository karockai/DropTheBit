
import dotenv from 'dotenv';
import slack from '@slack/webhook';
dotenv.config();
const webhook = new slack.IncomingWebhook(process.env.SLACK);

// Send the notification
webhook.sendMessage = async function(msg){
  if(process.env.PRODUCTION){
    await webhook.send({
      text: `${msg}`,
    });
  }
};

export default webhook;
