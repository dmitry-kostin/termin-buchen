import {notify} from 'node-notifier';
import * as path from 'path';

export class NotificationCenter {
  static sendNotification(text: string) {
    notify({
      title: 'Termin Buchen',
      message: text,
      sound: 'Funk',
      wait: true,
      contentImage: path.resolve('flag-round-250.png'),
    });
  }
}
