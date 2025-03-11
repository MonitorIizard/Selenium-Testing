const { Builder, By, Key, until, Browser } = require('selenium-webdriver')
const { getDriver } = require("../selenium/driver");
const { findAndInteract } = require("../selenium/interact");
const { login } = require("./login");


async function student_info(driver) {
    let student_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[1]/p-checkbox/div/div[2]'));
    await student_button.click();

    let student_weight = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[5]/p-inputnumber/span/input'));
    await student_weight.sendKeys('35');

    let student_height = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[6]/p-inputnumber/span/input'));
    await student_height.sendKeys('120');

    let date_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[7]/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button/span[4]'));
    await driver.wait(until.elementIsVisible(date_button), 2000);
    await date_button.click();

    let date = await driver.findElement(By.xpath('/html/body/div/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-month-view/table/tbody/tr[2]/td[4]'));
    await driver.wait(until.elementIsVisible(date), 2000);
    await date.click();
    
    await driver.sleep(500);
    await driver.findElement(By.xpath('/html/body/div')).click();

    let header = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]'));

    await driver.sleep(5000);
    await student_weight.clear();
    await student_weight.sendKeys('27.17');
    await header.click();

    await driver.sleep(5000);
    await student_weight.clear();
    await student_weight.sendKeys('27.16');
    await header.click();
}

async function student_criteria_test() {
    const driver = await getDriver();

    try {
        await login(driver);
        
        let button1 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[1]/div/p-radiobutton/div'));
        await driver.wait(until.elementIsVisible(button1), 5000);
        await button1.click();

        let next_bt1 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/app-prev-next-button/div/button[2]/span[2]'));
        await next_bt1.click();

        let next_bt2 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/p-card/div/div/div[2]/app-prev-next-button/div/button[2]'));
        await next_bt2.click();
        
        await driver.sleep(1000);

        await student_info(driver);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        //await driver.quit();
    }
}

student_criteria_test();
