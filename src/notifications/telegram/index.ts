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

  static __getMyChatId = async (token: string) => {
    const bot = new TelegramBot(token, {polling: true});
    bot.on('message', msg => console.log(`my chatID: ${msg.chat.id}`));
  };
}
