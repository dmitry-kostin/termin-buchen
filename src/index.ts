import {findSlot} from './scenarios/find-slot';
import {error, WebDriver} from 'selenium-webdriver';
import {createDriver} from './driver';
import {Telegram} from './notifications/telegram';
import {config} from './config';
import {sendNotification} from './notifications/send-notification';
import WebDriverError = error.WebDriverError;

async function runner(
  wd: WebDriver,
  onSuccess: () => void,
  onFail: () => void
) {
  let found = false;
  let i = 1;
  while (!found) {
    console.log(`[runner]: started iteration ${i}`);
    try {
      found = await findSlot(wd);
    } catch (e) {
      if (e instanceof WebDriverError) {
        console.error(`[runner]: error: ${e}`);
      } else {
        onFail();
        await wd.close();
        throw e;
      }
    }
    console.log(`[runner]: iteration ${i} result: ${found}\n`);
    if (found) {
      onSuccess();
      return;
    }
    await wd.sleep(config.checkInterval);
    await wd.manage().deleteAllCookies();
    i++;
  }
}

const startAutomation = async () => {
  const driver = await createDriver();
  sendNotification(
    'Did you know? Termin is the first word expat learns when moving to Germany.'
  );
  await runner(
    driver,
    () => {
      sendNotification(
        'Wow, you need to check this! Maybe we got ourselves a termin!'
      );
    },
    () => {
      sendNotification('Caught an exception, help me please..');
    }
  );
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getMyChatId = async () => {
  await Telegram.__getMyChatId(config.telegramToken);
};

function main() {
  startAutomation().catch();
  // getMyChatId().catch();
}

main();
