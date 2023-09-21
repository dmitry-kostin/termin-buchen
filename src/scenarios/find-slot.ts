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
  await SecondPageScenario.selectApplyReason(wd, config.reason);
  await SecondPageScenario.selectApplyPurpose(wd, config.purpose);
  await SecondPageScenario.waitForLoadingScreen(wd);
  await SecondPageScenario.clickNext(wd);

  try {
    // const dateSelector = '//*[@id="xi-fs-2"]';
    const box = await Utils.waitUntilVisible(
      wd,
      By.xpath('//*[@id="messagesBox"]/ul/li')
    );
    const text = await box.getText();
    console.log(`[findSlot]: ${text}`);
  } catch (e) {
    console.error(`[findSlot]: error ${e}`);
    return true;
  }
  return false;
};
