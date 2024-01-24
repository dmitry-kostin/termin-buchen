import {By, WebDriver} from 'selenium-webdriver';
import {config} from '../config';
import {Utils} from '../utils';
import {FirstPageScenario} from './first-page-scenario';
import {SecondPageScenario} from './second-page-scenario';

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
    console.log(`[findSlot]: appointment found`);
    return true;
  } catch (e) {
    console.error(`[findSlot]: appointment not found ${e}`);
    return false;
  }
};
