export const config = {
  telegramToken: process.env.TELEGRAM_TOKEN || '',
  telegramChatID: parseInt(process.env.TELEGRAM_CHATID || '0', 10),
  mainCitizenship: process.env.MAIN_CITIZENSHIP || 'Russian Federation',
  numberOfPeople: process.env.NUMBER_OF_PEOPLE || 'two people',
  liveWith: process.env.LIVE_WITH || 'yes',
  partnerCitizenship: process.env.PARTNER_CITIZENSHIP || 'Russian Federation',
  purpose: process.env.PURPOSE || 'apply',
  category: process.env.CATEGORY || undefined,
  reason:
    process.env.REASON || 'EU Blue Card / Blaue Karte EU (sect. 18b para. 2)',
};
