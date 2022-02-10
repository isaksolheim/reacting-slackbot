const { App, AwsLambdaReceiver } = require('@slack/bolt');
require('dotenv').config();

const awsLambdaReceiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: awsLambdaReceiver,
});

app.message(async ({ message, context }) => {
  if (message.user === process.env.USER_ID) {
    try {
      const result = await app.client.reactions.add({
        token: context.botToken,
        name: 'heavy_plus_sign',
        channel: message.channel,
        timestamp: message.ts,
      });
    } catch (error) {
      console.error(error);
    }
  }
});

module.exports.handler = async (event, context, callback) => {
  const handler = await awsLambdaReceiver.start();
  return handler(event, context, callback);
};
