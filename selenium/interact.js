const { By, until } = require("selenium-webdriver");

async function findAndInteract(driver, xpath, action, value = null) {
    try {
        const element = await driver.wait(until.elementLocated(By.xpath(xpath)), 5000);
        await driver.wait(until.elementIsVisible(element), 5000);
        if (action === "click") {
            await element.click();
        } else if (action === "sendKeys" && value !== null) {
            await element.sendKeys(value);
        }
        return element;
    } catch (error) {
        console.error(`Error in findAndInteract for XPath: ${xpath}`, error);
    }
    finally {
        await driver.sleep(100);
    }
}

module.exports = { findAndInteract };