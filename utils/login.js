const {By, until} = require('selenium-webdriver');
async function login(user = "admin", password = "12345678", driver) {

  console.log('😭 Starting Login ...');

  try {

    console.group('- Loading Selenium WebDriver ...');

    console.groupEnd();

    console.group('- get title ...');
    let title = await driver.getTitle();
    console.log('- title is ', title);
    console.groupEnd();

    console.group('- initial username and password input ...');
    let usernameInput = await driver.findElement(By.xpath('/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[2]/input'));

    console.log('- set username input');
    await usernameInput.sendKeys(user);

    console.log('- set password input');
    let passwordInput = await driver.findElement(By.xpath("/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[3]/p-password/div/input"));
    await driver.wait(until.elementIsVisible(passwordInput), 2000);
    await passwordInput.sendKeys(password)

    console.log('- click login button');
    let loginButton = await driver.findElement(By.xpath('/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[5]/button'));
    await loginButton.click();

    console.groupEnd();

    console.log('✅  Login test is succeed!')
  } catch (e) {
    console.log(e)
    console.log('❌ Login fail!')
  } finally {
    console.log('😭 End Login ...');
  }
};

module.exports = {
  login
}
