import {CHECK_INTERVAL} from '../const';
import {ApplyPurpose} from './apply-purpose';

export type ApplyCategory = 'apply' | 'extend' | 'transfer' | 'apply_permanent';
export type ApplyReason =
  | 'economic'
  | 'family'
  | 'educational'
  | 'humanitarian'
  | 'empty';

interface Config {
  telegramToken: string;
  telegramChatID: number;
  mainCitizenship: string;
  numberOfPeople: string;
  liveWith: string;
  partnerCitizenship: string;
  category: ApplyCategory;
  reason: ApplyReason;
  purpose: keyof typeof ApplyPurpose;
  checkInterval: number;
}

export const config: Config = (() => {
  return {
    telegramToken: process.env.TELEGRAM_TOKEN || '',
    telegramChatID: parseInt(process.env.TELEGRAM_CHATID || '0', 10),
    mainCitizenship: process.env.MAIN_CITIZENSHIP || 'Russian Federation',
    numberOfPeople: process.env.NUMBER_OF_PEOPLE || 'two people',
    liveWith: process.env.LIVE_WITH || 'yes',
    partnerCitizenship: process.env.PARTNER_CITIZENSHIP || 'Russian Federation',
    category: (() => {
      if (
        process.env.CATEGORY !== 'apply' &&
        process.env.CATEGORY !== 'extend' &&
        process.env.CATEGORY !== 'transfer' &&
        process.env.CATEGORY !== 'apply_permanent'
      ) {
        throw new Error('CATEGORY config value is unknown');
      }
      return process.env.CATEGORY;
    })(),
    reason: (() => {
      if (
        process.env.REASON !== 'economic' &&
        process.env.REASON !== 'family' &&
        process.env.REASON !== 'educational' &&
        process.env.REASON !== 'humanitarian' &&
        process.env.REASON !== 'empty'
      ) {
        throw new Error('REASON config value is unknown');
      }
      return process.env.REASON;
    })(),
    purpose: (() => {
      if (!Object.keys(ApplyPurpose).includes(process.env.PURPOSE || '')) {
        throw new Error('PURPOSE config value is unknown');
      }
      return process.env.PURPOSE as keyof typeof ApplyPurpose;
    })(),
    checkInterval: parseInt(
      process.env.CHECK_INTERVAL || CHECK_INTERVAL.toString(),
      10
    ),
  };
})();
