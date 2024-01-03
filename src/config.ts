import {CHECK_INTERVAL} from './const';

export type ApplyCategory = 'apply' | 'extend' | 'transfer' | 'apply_permanent';
export type ApplyReason = 'economic' | 'family' | 'educational' | 'empty';
export type ApplyPurpose =
  | '18p2'
  | '21p5'
  | 'sect28'
  | '28p2'
  | '19c2'
  | 'family_blue_card_29_32'
  | 'transfer_blue_card_eu'
  | 'transfer_permanent_settlement_permit'
  | 'transfer_eu_long_term_residence_permit'
  | 'transfer_residence_card'
  | 'transfer_permanent_residence_card'
  | 'transfer_residence_document_gb'
  | 'transfer_residence_permit'
  | 'edu_16f_1'
  | 'edu_16a'
  | 'edu_16b_1'
  | 'edu_16b'
  | 'edu_16d_1'
  | 'edu_16d_3'
  | 'edu_16a_vocational'
  | 'edu_19c_1'
  | 'edu_16f';

interface Config {
  telegramToken: string;
  telegramChatID: number;
  mainCitizenship: string;
  numberOfPeople: string;
  liveWith: string;
  partnerCitizenship: string;
  category: ApplyCategory;
  reason: ApplyReason;
  purpose: ApplyPurpose;
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
        process.env.REASON !== 'empty'
      ) {
        throw new Error('REASON config value is unknown');
      }
      return process.env.REASON;
    })(),
    purpose: (() => {
      if (
        process.env.PURPOSE !== '18p2' &&
        process.env.PURPOSE !== '21p5' &&
        process.env.PURPOSE !== 'sect28' &&
        process.env.PURPOSE !== '28p2' &&
        process.env.PURPOSE !== '19c2' &&
        process.env.PURPOSE !== 'family_blue_card_29_32' &&
        process.env.PURPOSE !== 'transfer_blue_card_eu' &&
        process.env.PURPOSE !== 'transfer_permanent_settlement_permit' &&
        process.env.PURPOSE !== 'transfer_eu_long_term_residence_permit' &&
        process.env.PURPOSE !== 'transfer_residence_card' &&
        process.env.PURPOSE !== 'transfer_permanent_residence_card' &&
        process.env.PURPOSE !== 'transfer_residence_document_gb' &&
        process.env.PURPOSE !== 'transfer_residence_permit' &&
        process.env.PURPOSE !== 'edu_16f_1' &&
        process.env.PURPOSE !== 'edu_16a' &&
        process.env.PURPOSE !== 'edu_16b_1' &&
        process.env.PURPOSE !== 'edu_16b' &&
        process.env.PURPOSE !== 'edu_16d_1' &&
        process.env.PURPOSE !== 'edu_16d_3' &&
        process.env.PURPOSE !== 'edu_16a_vocational' &&
        process.env.PURPOSE !== 'edu_19c_1' &&
        process.env.PURPOSE !== 'edu_16f'
      ) {
        throw new Error('PURPOSE config value is unknown');
      }
      return process.env.PURPOSE;
    })(),
    checkInterval: parseInt(
      process.env.CHECK_INTERVAL || CHECK_INTERVAL.toString(),
      10
    ),
  };
})();
