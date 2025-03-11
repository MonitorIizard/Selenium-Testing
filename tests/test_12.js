const { Builder, By, Key, until, Browser } = require('selenium-webdriver')
const { getDriver } = require("../selenium/driver");
const { findAndInteract } = require("../selenium/interact");
const { login } = require("./login");

async function cancel_event(driver) {

    let cancel_history = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-header/div/div/div/div/div[5]/p-menu/div/ul/li[3]'));
    await cancel_history.click();

    await driver.sleep(500);

    let cancel_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-register-history/div/div/div[2]/p-table/div/div/table/tbody/tr/td[4]/button[2]'));
    await driver.wait(until.elementIsVisible(cancel_button), 2000);
    await cancel_button.click();

    await driver.sleep(3000);
    
    await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-register-history/div/div/div[2]/p-table/div/div/table/tbody/tr/td[4]/p-dialog[2]/div/div/div[3]/button')).click();

}

async function cancel_event_test() {
    const driver = await getDriver();

    try {
        await login(driver);
        
        await driver.sleep(1000);

        await cancel_event(driver);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        //await driver.quit();
    }
}

cancel_event_test();
