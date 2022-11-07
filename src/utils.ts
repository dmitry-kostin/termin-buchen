import {Locator, until, WebDriver, WebElement} from 'selenium-webdriver';
import {DEFAULT_TIMEOUT} from './const';

export class Utils {
  static waitUntilVisible = async (
    driver: WebDriver,
    locator: Locator
  ): Promise<WebElement> => {
    let elem = await driver.wait(
      until.elementLocated(locator),
      DEFAULT_TIMEOUT
    );
    elem = await driver.wait(until.elementIsVisible(elem), DEFAULT_TIMEOUT);
    return elem;
  };
}
