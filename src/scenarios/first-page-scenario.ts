import {By, WebDriver} from 'selenium-webdriver';
import {Utils} from '../utils';

export class FirstPageScenario {
  static async visitPageAndChangeLanguage(wd: WebDriver) {
    await wd.executeScript(`
    document.activeElement.setAttribute('data-can-navigate', '1');
    `);
    await wd.get(
      'https://otv.verwalt-berlin.de/ams/TerminBuchen/wizardng?sprachauswahl=en'
    );
    const changeLangBtn = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="xi-txt-11"]/p/a')
    );
    await wd.sleep(400);
    await changeLangBtn.click();
  }

  static async clickConsent(wd: WebDriver) {
    const consentInput = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="xi-cb-1"]')
    );
    await consentInput.click();
  }

  static async clickNext(wd: WebDriver) {
    const nextBtn = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="applicationForm:managedForm:proceed"]')
    );
    await nextBtn.click();
    await wd.sleep(1000);
  }
}
