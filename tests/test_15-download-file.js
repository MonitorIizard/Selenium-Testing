const {Builder, Browser, By} = require('selenium-webdriver');

const {
  login 
} = require('../utils/login');

const { clickButton } = require('../utils/selenium-operations');

require('dotenv').config();

// initial 
const targetWebsite = process.env.WEBSITE_TARGET;

async function downloadFile() {
  console.log('😭 Starting download file ...');

  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get(targetWebsite);

  console.group('Login as user')
    const usernameAdmin = '1010720037';
    const passwordAdmin = '12345678'
    await login(usernameAdmin, passwordAdmin, driver);
  console.log('✅ Login as user')
  console.groupEnd();
  
  await driver.sleep(2000);

  // select menu
  let xPathOfMenu = '/html/body/app-root/app-school-layout/app-school-header/div/div/div/div/div[5]/p-menu/div/ul/li[3]/a';
  await clickButton(xPathOfMenu, driver);

  await driver.sleep(2000);

  let xPathOfYearSelect = '/html/body/app-root/app-school-layout/app-school-register-history/div/div/div[1]/p-fieldset/fieldset/div/div/div/div/p-dropdown/div/span';
  await clickButton(xPathOfYearSelect, driver);

  await driver.sleep(1000);
  let xPathOfYear2567 = '/html/body/app-root/app-school-layout/app-school-register-history/div/div/div[1]/p-fieldset/fieldset/div/div/div/div/p-dropdown/div/p-overlay/div/div/div/div/ul/p-dropdownitem[2]/li';
  await clickButton(xPathOfYear2567, driver);

  await driver.sleep(1000);
  let printButton = '/html/body/app-root/app-school-layout/app-school-register-history/div/div/div[2]/p-table/div/div/table/tbody/tr/td[4]/button[2]';
  await clickButton(printButton, driver); 
  
  console.log('✅ Download success`')
}

downloadFile();