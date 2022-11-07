export const config = {
  telegramToken: process.env.TELEGRAM_TOKEN || '',
  telegramChatID: parseInt(process.env.TELEGRAM_CHATID || '0', 10),
  mainCitizenship: process.env.MAIN_CITIZENSHIP || '',
  mainCitizenshipId: process.env.MAIN_CITIZENSHIP_ID || '',
  numberOfPeople: process.env.NUMBER_OF_PEOPLE || '',
  liveWith: process.env.LIVE_WITH || '',
  partnerCitizenship: process.env.PARTNER_CITIZENSHIP || '',
  reason: process.env.REASON || '',
};
