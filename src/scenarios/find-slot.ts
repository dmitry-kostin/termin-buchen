import {By, WebDriver} from 'selenium-webdriver';
import {config} from '../config';
import {Utils} from '../utils';
import {FirstPageScenario} from './first-page-scenario';
import {SecondPageScenario} from './second-page-scenario';
import {SMALL_TIMEOUT} from "../const";

/**
 * Returns true if slot found
 * @param wd webdriver
 */
export const findSlot = async (wd: WebDriver): Promise<boolean> => {
  await FirstPageScenario.visitPageAndChangeLanguage(wd);
  await FirstPageScenario.clickConsent(wd);
  await FirstPageScenario.clickNext(wd);

  await SecondPageScenario.setCitizenship(wd, config.mainCitizenship);
  await SecondPageScenario.setNumberOfPeople(wd, config.numberOfPeople);
  await SecondPageScenario.setLiveWith(wd, config.liveWith);
  await SecondPageScenario.setPartnerCitizenship(
    wd,
    config.liveWith,
    config.partnerCitizenship
  );
  await SecondPageScenario.selectApplyCategory(wd, config.category);
  if (config.category !== 'transfer') {
    await SecondPageScenario.selectApplyReason(wd, config.reason);
  }
  await SecondPageScenario.selectApplyPurpose(wd, config.purpose);
  await SecondPageScenario.waitForLoadingScreen(wd);
  await SecondPageScenario.clickNext(wd);

  try {
    await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[contains(text(),\'Appointment selection\')]')
    );
    console.log(`[findSlot]: found calendar`);
    return !await existsErrorBox(wd)
  } catch (e) {
    console.error(`[findSlot]: appointment not found ${e}`);
    return false;
  }
};

async function existsErrorBox(wd: WebDriver) {
  try {
    // const dateSelector = '//*[@id="xi-fs-2"]';
    const box = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="messagesBox"]/ul/li'),
      SMALL_TIMEOUT
    );
    const text = await box.getText();
    console.error(`[findSlot]: messagesBox found. reason: ${text}`);
    return true
  } catch (e) {
    console.info(`[findSlot]: error finding messagesBox: ${e}`);
    return false
  }
}
