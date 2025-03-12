const { Builder, Browser } = require("selenium-webdriver");


async function getDriver(url="https://demos.wutthiphon.space/dev/schoollunch/") {
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get(url);

    return driver;
}

module.exports = { getDriver };