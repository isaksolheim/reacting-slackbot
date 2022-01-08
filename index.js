const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  signingSecret: process.env.SIGNING_SECRET,
  token: process.env.TOKEN,
  socketMode: true,
  appToken: process.env.APP_TOKEN,
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

(async () => {
  const port = process.env.PORT || 3000;

  await app.start(port);

  console.log(`⚡️ reacting-app is running on port ${port}`);
})();
