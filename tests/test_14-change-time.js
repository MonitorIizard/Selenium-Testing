const {Builder, Browser, By} = require('selenium-webdriver');

const {
  login 
} = require('../utils/login');

const { clickButton } = require('../utils/selenium-operations');

require('dotenv').config();

// initial 
const targetWebsite = process.env.WEBSITE_TARGET;


async function changeTime() {
  console.log('😭 Starting Change Time ...');

  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get(targetWebsite);

  console.group('Login as Admin')
    const usernameAdmin = 'admin';
    const passwordAdmin = '12345678'
    await login(usernameAdmin, passwordAdmin, driver);
  console.log('✅ Login as Admin')
  console.groupEnd();
  
  await driver.sleep(2000);

  // select menu
  let xPathOfMenu = '/html/body/app-root/app-admin-layout/app-admin-header/div/div/div/div/div[5]/p-menu/div/ul/li[10]/a';
  await clickButton(xPathOfMenu, driver);

  await driver.sleep(3000);

  let xPathOfButton = '/html/body/app-root/app-admin-layout/app-conditions/div/div/div[2]/p-card/div/div/div[3]/div/div[2]/p-table/div/div/table/tbody/tr[1]/td[6]/div/button[1]';
  await clickButton(xPathOfButton, driver);

  await driver.sleep(1000);

  let xPathOfTimeEnd = '/html/body/app-root/app-admin-layout/app-conditions/p-dialog[2]/div/div/div[2]/div/div[5]/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button/span[4]';
  await clickButton(xPathOfTimeEnd, driver);

  let xPathOfDate = '/html/body/div/div[2]/div/ngx-mat-datetime-content/ngx-mat-calendar/div/ngx-mat-month-view/table/tbody/tr[3]/td[1]/div[1]';
  await clickButton(xPathOfDate, driver);

  let xPathOfConfirmButton = '/html/body/div/div[2]/div/ngx-mat-datetime-content/div[2]/button';
  await clickButton(xPathOfConfirmButton, driver);

  let xPathOfSaveButton = '/html/body/app-root/app-admin-layout/app-conditions/p-dialog[2]/div/div/div[3]/div/p-button[2]/button';
  await clickButton(xPathOfSaveButton, driver);

  await driver.sleep(1000);

  //Logout
  let xPathLogout = '/html/body/app-root/app-admin-layout/app-admin-header/div/div/div/div/div[5]/p-menu/div/ul/li[20]/a'; 
  await clickButton(xPathLogout, driver);

  console.group('Login as User')
  const username = '1067380587';
  const password = '12345678'
  await login(username, password, driver);
  console.log('✅ Login as User')
  console.groupEnd();

  await driver.sleep(2000);

  let xPathOfSpan = '/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[1]/div[2]/p-message/div/span';
  let span = await driver.findElement(By.xpath(xPathOfSpan)).getText();

  if ( span == 'ไม่อยู่ในช่วงเวลาที่สามารถลงโครงการได้' ) {
    console.log();
    console.log();
    console.log('✅ Test Change Time Passed, result is ', span);
  } else {
    console.log('❌ Test Change Time Failed');
  }
}

changeTime();