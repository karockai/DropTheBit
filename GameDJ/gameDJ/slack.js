#!/usr/bin/env node

import slack from '@slack/webhook';
const url = 'https://hooks.slack.com/services/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';

const webhook = new slack.IncomingWebhook(url);
// Send the notification
(async () => {
  await webhook.send({
    text: '서버가 다운됐어요',
  });
})();