import {By, until, WebDriver} from 'selenium-webdriver';
import {Select} from 'selenium-webdriver/lib/select';
import {ApplyCategory, ApplyPurpose, ApplyReason} from '../config';
import {DEFAULT_TIMEOUT} from '../const';
import {Utils} from '../utils';

export class SecondPageScenario {
  static async setCitizenship(wd: WebDriver, to: string) {
    const citizenshipSelector = new Select(
      await Utils.waitUntilVisible(wd, By.xpath('//*[@id="xi-sel-400"]'))
    );
    await wd.sleep(400);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const i of Array(5)) {
      const opts = await citizenshipSelector.getOptions();
      if (opts.length === 184) {
        break;
      }
      await wd.sleep(200);
    }
    await citizenshipSelector.selectByVisibleText(to);
  }

  static async setNumberOfPeople(wd: WebDriver, to: string) {
    const numberOfPeople = new Select(
      await Utils.waitUntilVisible(wd, By.xpath('//*[@id="xi-sel-422"]'))
    );
    await wd.sleep(400);
    await numberOfPeople.selectByVisibleText(to);
  }

  static async setLiveWith(wd: WebDriver, to: string) {
    const liveWith = new Select(
      await Utils.waitUntilVisible(wd, By.xpath('//*[@id="xi-sel-427"]'))
    );
    await wd.sleep(400);
    await liveWith.selectByVisibleText(to);
  }

  static async setPartnerCitizenship(
    wd: WebDriver,
    liveWith: string,
    to: string
  ) {
    if (liveWith === 'no') {
      return;
    }
    const citizenshipPartner = new Select(
      await Utils.waitUntilVisible(wd, By.xpath('//*[@id="xi-sel-428"]'))
    );
    await wd.sleep(400);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for await (const i of Array(5)) {
      const opts = await citizenshipPartner.getOptions();
      if (opts.length === 184) {
        break;
      }
      await wd.sleep(200);
    }
    await citizenshipPartner.selectByVisibleText(to);
  }

  static async selectApplyCategory(wd: WebDriver, category: ApplyCategory) {
    let text = '';
    if (category === 'extend') {
      text = 'Extend a residence title';
    } else if (category === 'apply') {
      text = 'Apply for a residence title';
    } else if (category === 'transfer') {
      text = 'Transfer of a Residence title to a new passport';
    } else if (category === 'apply_permanent') {
      text = 'Apply for a permanent settlement permit';
    }
    if (!text) {
      throw new Error('Apply category is not valid');
    }
    const label = await Utils.waitUntilVisible(
      wd,
      By.xpath(`//*[@id="xi-div-30"]//label[normalize-space()='${text}']`)
    );
    await wd.sleep(400);
    await label.click();
  }

  static async selectApplyReason(wd: WebDriver, reason: ApplyReason) {
    const reasonToText: {[key: string]: string} = {
      economic: 'Economic activity',
      family: 'Family reasons',
      educational: 'Educational purposes',
      humanitarian: 'Humanitarian grounds',
    };
    if (reason === 'empty') {
      return;
    }
    const text = reasonToText[reason];
    if (!text) {
      throw new Error('Apply reason is not valid');
    }
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

  static async selectApplyPurpose(
    wd: WebDriver,
    purpose: keyof typeof ApplyPurpose
  ) {
    const text = ApplyPurpose[purpose];
    if (!text) {
      throw new Error('Apply purpose is not valid');
    }
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

  static async clickNext(wd: WebDriver) {
    const nextButtonPath = '//*[@id="applicationForm:managedForm:proceed"]';
    const button = await Utils.waitUntilVisible(wd, By.xpath(nextButtonPath));
    await wd.sleep(400);
    await button.click();
  }

  static async waitForLoadingScreen(wd: WebDriver) {
    const loading = await Utils.waitUntilVisible(wd, By.className('loading'));
    await wd.wait(until.elementIsNotVisible(loading), DEFAULT_TIMEOUT);
    await wd.sleep(400);
    await wd.wait(until.elementIsNotVisible(loading), DEFAULT_TIMEOUT);
    await wd.sleep(400);
  }
}
