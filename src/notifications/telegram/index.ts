import * as TelegramBot from 'node-telegram-bot-api';

export class Telegram {
  static sendNotification = async (
    token: string,
    chatId: number,
    text: string
  ) => {
    const bot = new TelegramBot(token, {polling: false});
    await bot.sendMessage(chatId, text);
  };

  static getMyChatId = async (token: string) => {
    const bot = new TelegramBot(token, {polling: true});
    await bot.setMyCommands([{command: '/me', description: 'Get my chat id'}]);
    return new Promise<void>(resolve => {
      bot.on('message', async msg => {
        const chatId = msg.chat.id;
        await bot.sendMessage(
          chatId,
          'Your chat id is below, copy-paste it to the .env file'
        );
        await bot.sendMessage(
          chatId,
          `<code>TELEGRAM_CHATID=${chatId}</code>`,
          {parse_mode: 'HTML'}
        );
        console.log('Your chat id is below, copy-paste it to the .env file');
        console.log(`TELEGRAM_CHATID=${chatId}`);
        await bot.stopPolling();
        resolve();
      });
    });
  };
}
