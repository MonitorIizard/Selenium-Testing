const {Builder, Browser, By} = require('selenium-webdriver');

const {
  login 
} = require('../utils/login');

const { clickButton, insertValueToInputField } = require('../utils/selenium-operations');

require('dotenv').config();

// initial 
const targetWebsite = process.env.WEBSITE_TARGET;
const username = 'Wrong Username!!!';
const password = 'wrong Password!!!'

async function selectStudent() {
  console.log('😭 Starting Select Student ...');

  driver = await new Builder().forBrowser(Browser.CHROME).build();
  await driver.get(targetWebsite);

  await login(username, password, driver);
  
  await driver.sleep(2000);

  let button = '/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[2]/form/div[1]/p-messages/div/div/div/span[2]';
  await clickButton(button, driver);

  await driver.sleep(1000);
}

selectStudent();