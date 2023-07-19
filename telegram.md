### Setup Telegram notifications

It is expected that you already read main [readme](./readme.md) and have a working script.

In order to get notifications to your telegram account you need to create a bot and application will use it to send messages to you.

1. Open Telegram app (either on Desktop or mobile application) and search for the [BotFather](https://t.me/BotFather) account.
2. Press menu -> Create a new bot, then follow instructions to create a new bot.
3. Read the last message from bot father, find and copy your bot token and save it in `.env` file you created before: `TELEGRAM_TOKEN=...`
4. Run `npm run telegram` from terminal in order to be able to get the chat id, nothing happens at this point.
5. Open the bot you just created in telegram, start it, press menu -> Get my chat id or just send any message to it
6. Bot should reply you with `TELEGRAM_CHATID` use it to save in `.env` file: `TELEGRAM_CHATID=...`

After that you will be able to get notifications via bot.


#### Final `.env` example:
```
TELEGRAM_TOKEN=1234567890:ABCdefghIJKlmnOPQrstuVWxyZ
TELEGRAM_CHATID=123456789
MAIN_CITIZENSHIP=Russian Federation
NUMBER_OF_PEOPLE=one person
LIVE_WITH=yes
PARTNER_CITIZENSHIP=Germany
REASON=family
```


