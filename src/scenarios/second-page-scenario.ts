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

  static async selectApplyPurpose(wd: WebDriver, purpose: string) {
    const applyForLabel = await Utils.waitUntilVisible(
      wd,
      By.xpath(`//*[@id="xi-div-30"]//label[normalize-space()='${purpose}']`)
    );
    await wd.sleep(400);
    await applyForLabel.click();
  }

  static async selectApplyCategory(wd: WebDriver, category?: string) {
    if (!category) {
      return;
    }
    const economicActivityLabel = await Utils.waitUntilVisible(
      wd,
      // economic activity
      By.xpath(
        `//*[@class="level1-content"]//label[normalize-space()="${category}"]`
      )
    );
    await wd.sleep(400);
    await economicActivityLabel.click();
  }

  static async selectApplyReason(wd: WebDriver, reason: string) {
    const blueCardInput = await Utils.waitUntilVisible(
      wd,
      // EU Blue card
      By.xpath(
        `//*[@class="level2-content"]//label[normalize-space()="${reason}"]`
      )
    );
    await wd.sleep(400);
    await blueCardInput.click();
  }

  static async clickNext(wd: WebDriver) {
    const nextButton = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="applicationForm:managedForm:proceed"]')
    );
    await wd.sleep(400);
    await nextButton.click();
    // wait for page reload
    await wd.wait(until.stalenessOf(nextButton), DEFAULT_TIMEOUT);
  }

  static async waitForLoadingScreen(wd: WebDriver) {
    const loading = await Utils.waitUntilVisible(wd, By.className('loading'));
    await wd.wait(until.elementIsNotVisible(loading), DEFAULT_TIMEOUT);
    await wd.sleep(400);
  }
}
