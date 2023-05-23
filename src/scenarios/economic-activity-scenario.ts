import {By, WebDriver} from 'selenium-webdriver';
import {Utils} from '../utils';

export class EconomicActivityScenario {
  static async selectApplyCategory(wd: WebDriver) {
    const text = 'Economic activity';
    const economicActivityLabel = await Utils.waitUntilVisible(
      wd,
      // economic activity
      By.xpath(
        `//*[@class="level1-content"]//label[normalize-space()="${text}"]`
      )
    );
    await wd.sleep(400);
    await economicActivityLabel.click();
  }

  static async selectApplyReason(wd: WebDriver) {
    const text = 'EU Blue Card / Blaue Karte EU (sect. 18b para. 2)';
    const blueCardInput = await Utils.waitUntilVisible(
      wd,
      // EU Blue card
      By.xpath(
        `//*[@class="level2-content"]//label[normalize-space()="${text}"]`
      )
    );
    await wd.sleep(400);
    await blueCardInput.click();
  }
}
