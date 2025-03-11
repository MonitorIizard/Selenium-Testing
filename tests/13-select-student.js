const {Builder, Browser, By} = require('selenium-webdriver');

const {
  login 
} = require('../utils/login');

const { clickButton, insertValueToInputField } = require('../utils/selenium-operations');

require('dotenv').config();

// initial 
const targetWebsite = process.env.WEBSITE_TARGET;
const username = '1067380587';
const password = '12345678'

async function selectStudent() {
  console.log('😭 Starting Select Student ...');

  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get(targetWebsite);

  await login(username, password, driver);
  
  await driver.sleep(2000);

  // select fund
  let ThinFundRadioXpath = '/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[1]/div/label/span';
  await clickButton(ThinFundRadioXpath, driver);

  // next on step 1
  let xPathOfNextButton = '/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/app-prev-next-button/div/button[2]';
  await clickButton(xPathOfNextButton, driver);

  await driver.sleep(2000);

  // next on step 2
  xPathOfNextButton = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/p-card/div/div/div[2]/app-prev-next-button/div/button[2]';
  await clickButton(xPathOfNextButton, driver);

  await driver.sleep(2000);

  // select student
  let xPathOfStudent = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[2]/label';
  await clickButton(xPathOfStudent, driver);
  
  // click on calendar
  let xPathOfCalendar = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[7]/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button/span[4]';
  await clickButton(xPathOfCalendar, driver);

  let xPathOfDate = '/html/body/div/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-month-view/table/tbody/tr[2]/td[7]/button/span[1]';
  await clickButton(xPathOfDate, driver);

  let weight = 1;
  let height = 116.3;
  // click on height input
  let xPathOfHeightInput = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[6]/p-inputnumber/span/input';
  await insertValueToInputField(xPathOfHeightInput, height, driver);

  // click on weight input
  let xPathOfWeightInput = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[5]/p-inputnumber/span/input';
  await insertValueToInputField(xPathOfWeightInput, weight, driver);

  await driver.findElement(By.xpath("//html")).click();

  await driver.sleep(2000);

  let xPathOfResult = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[8]/p';
  let result = await driver.findElement(By.xpath(xPathOfResult)).getText();

  if ( result != 'ผอมเเละเตี้ย' ) {
    console.log('❌  Select Student test is failed! ')
    console.log('- result should be = ผอมเเละเตี้ย but got ', result)
  } else {
    console.log('✅  result == ผอมเเละเตี้ย')
  }

  await driver.sleep(2000);

  console.log('test2')

  height = 116.4;
  weight = 1;

  // click on height input
  xPathOfHeightInput = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[6]/p-inputnumber/span/input';
  await insertValueToInputField(xPathOfHeightInput, height, driver);

  
  // click on weight input
  xPathOfWeightInput = '/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[5]/p-inputnumber/span/input';
  await insertValueToInputField(xPathOfWeightInput, weight, driver);
  
  await driver.findElement(By.xpath("//html")).click();

  result = await driver.findElement(By.xpath(xPathOfResult)).getText();

  if ( result != 'ปกติ' ) {
    console.log('❌  Select Student test is failed! ')
    console.log('- result should be = ปกติ but got ', result)
  } else {
    console.log('✅  result == ปกติ')
  }


  // first student age = 9ึ7 months
  //111.66	Thin 116.32	118.74	Mid: 126.20	134.19	136.92	142.61
  // 111.66 - 116.32 Is Thin


}

selectStudent();