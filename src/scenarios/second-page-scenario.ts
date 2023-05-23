import {By, until, WebDriver} from 'selenium-webdriver';
import {Select} from 'selenium-webdriver/lib/select';
import {DEFAULT_TIMEOUT} from '../const';
import {Utils} from '../utils';

export class SecondPageScenario {
  static async setCitizenship(wd: WebDriver, to: string) {
    const citizenshipSelector = new Select(
      await Utils.waitUntilVisible(wd, By.xpath('//*[@id="xi-sel-400"]'))
    );
    await wd.sleep(400);
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
    await citizenshipPartner.selectByVisibleText(to);
  }

  static async selectApplyPurpose(wd: WebDriver, reason: string) {
    let text = 'Apply for a residence title';
    if (reason === 'extend') {
      text = 'Extend a residence title';
    }
    const applyForLabel = await Utils.waitUntilVisible(
      wd,
      By.xpath(`//*[@id="xi-div-30"]//label[normalize-space()='${text}']`)
    );
    await wd.sleep(400);
    await applyForLabel.click();
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
