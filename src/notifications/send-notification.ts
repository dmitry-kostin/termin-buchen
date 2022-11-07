import {config} from '../config';
import {Telegram} from './telegram';
import {NotificationCenter} from './notification-center';

export const sendNotification = (message: string) => {
  if (config.telegramToken) {
    Telegram.sendNotification(
      config.telegramToken,
      config.telegramChatID,
      message
    ).catch();
  }
  NotificationCenter.sendNotification(message);
};
