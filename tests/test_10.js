const { Builder, By, Key, until, Browser } = require('selenium-webdriver')
const { getDriver } = require("../selenium/driver");
const { findAndInteract } = require("../selenium/interact");
const { login } = require("./login");

async function event_criteria_test() {
    const driver = await getDriver();

    try {
        await login(driver, '1010720010', '12345678');
        
        await driver.sleep(1000);

        let button1 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[3]/div[1]/p-radiobutton/div'));
        await driver.wait(until.elementIsVisible(button1), 2000);
        await button1.click();

        let next_bt1 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/app-prev-next-button/div/button[2]'));
        await next_bt1.click();

    }
    catch (error) {
        console.log(error);
    }
    finally {
        //await driver.quit();
    }
}

event_criteria_test();
