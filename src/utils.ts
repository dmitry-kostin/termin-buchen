import {Locator, until, WebDriver, WebElement} from 'selenium-webdriver';
import {DEFAULT_TIMEOUT} from './const';

export class Utils {
  static waitUntilVisible = async (
    driver: WebDriver,
    locator: Locator,
    timeout: number = DEFAULT_TIMEOUT,
  ): Promise<WebElement> => {
    let elem = await driver.wait(
      until.elementLocated(locator),
      timeout
    );
    elem = await driver.wait(until.elementIsVisible(elem), timeout);
    return elem;
  };

}
