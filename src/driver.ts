import {Builder, WebDriver} from 'selenium-webdriver';
import * as chrome from 'selenium-webdriver/chrome';
import {UserPromptHandler} from 'selenium-webdriver/lib/capabilities';

export const createDriver = async (): Promise<WebDriver> => {
  const options = new chrome.Options();
  options.addArguments(
    // '--headless',
    '--no-sandbox',
    '--disable-blink-features=AutomationControlled',
    '--disable-dev-shm-usage'
  );
  options.setAlertBehavior(UserPromptHandler.ACCEPT);
  return new Builder().forBrowser('chrome').setChromeOptions(options).build();
};
