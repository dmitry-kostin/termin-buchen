import {By, WebDriver} from 'selenium-webdriver';
import {Utils} from '../utils';

export class FamilyScenario {
  static async selectApplyCategory(wd: WebDriver) {
    const text = 'Family reasons';
    const label = await Utils.waitUntilVisible(
      wd,
      // economic activity
      By.xpath(
        `//*[@class="level1-content"]//label[normalize-space()="${text}"]`
      )
    );
    await wd.sleep(400);
    await label.click();
  }

  static async selectApplyReason(wd: WebDriver) {
    const text =
      'Residence permit for spouses, parents and children of German citizens (sect. 28)';
    const input = await Utils.waitUntilVisible(
      wd,
      // EU Blue card
      By.xpath(
        `//*[@class="level2-content"]//label[normalize-space()="${text}"]`
      )
    );
    await wd.sleep(400);
    await input.click();
  }
}
