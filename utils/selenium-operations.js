const {By} = require('selenium-webdriver');

async function clickButton(xpath, driver) {
  let button = await driver.findElement(By.xpath(xpath));
  await button.click();
}

async function insertValueToInputField(xpath, value, driver) {
  let inputField = await driver.findElement(By.xpath(xpath));
  await inputField.clear();
  await inputField.sendKeys(value);
}

module.exports = {
  clickButton,
  insertValueToInputField
}