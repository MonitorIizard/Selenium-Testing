const { Builder, By, Key, until, Browser } = require('selenium-webdriver')
const { getDriver } = require("../selenium/driver");
const { findAndInteract } = require("../selenium/interact");
const { login } = require("./login");


async function student_info(driver) {
    let student_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[1]/p-checkbox/div/div[2]'));
    await student_button.click();

    let student_weight = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[5]/p-inputnumber/span/input'));
    await student_weight.sendKeys('30');

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
    
    await driver.sleep(5000);

    let next_bt3 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/app-prev-next-button/div/button[2]/span[1]'));
    await driver.wait(until.elementIsVisible(next_bt3), 2000);
    await next_bt3.click();
}

async function event_enrollment(driver) {
    let event_checkbox = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-activity/p-card/div/div/div[2]/div/div[3]/div/div/div[1]/div/p-checkbox/div/div[2]'));
    await driver.wait(until.elementIsVisible(event_checkbox), 2000);
    await event_checkbox.click();

    let add_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-activity/p-card/div/div/div[2]/div/p-accordion/div/p-accordiontab/div/div[2]/div/div/div/p-table/div/div/table/tfoot/tr/td/div/button'));
    await add_button.click();

    let dropdown = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-activity/p-card/div/div/div[2]/div/p-accordion/div/p-accordiontab/div/div[2]/div/div/div/p-table/div/div/table/tbody/tr/td[2]/div/p-dropdown'));
    await dropdown.click();

    let selected_event = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/ul/p-dropdownitem[1]'));
    await selected_event.click();

    let event_number = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-activity/p-card/div/div/div[2]/div/p-accordion/div/p-accordiontab/div/div[2]/div/div/div/p-table/div/div/table/tbody/tr/td[3]/p-inputnumber/span/input'));
    await event_number.sendKeys(100, Key.RETURN);

    await driver.sleep(5000);

    let next_bt4 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-activity/p-card/div/div/div[2]/app-prev-next-button/div/button[2]'));
    await next_bt4.click();
}

async function accomplice(driver) {
    let proponent_prefix_dropdown = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[1]/fieldset/div/div/div/div[1]/p-dropdown/div/div[2]'));
    await proponent_prefix_dropdown.click();

    await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/ul/p-dropdownitem[1]/li')).click();

    let proponent_fname = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[1]/fieldset/div/div/div/div[2]/input'));
    await proponent_fname.sendKeys('John');

    let proponent_lname = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[1]/fieldset/div/div/div/div[3]/input'));
    await proponent_lname.sendKeys('Cena');

    await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[1]/fieldset/div/div/div/div[5]/p-checkbox')).click();

    let signature1 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[1]/fieldset/div/div/div/div[6]/div/div[2]/input'));
    await signature1.sendKeys('/Users/owl/Documents/projects/s:w testing/tests/b.png');

    await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[2]/fieldset/div/div/div/div[1]/p-dropdown/div/div[2]')).click();
    
    let administrator_prefix = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/ul/p-dropdownitem[1]/li'));
    await administrator_prefix.click();
    
    let administrator_fname = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[2]/fieldset/div/div/div/div[2]/input'));
    await administrator_fname.sendKeys('John');

    let administrator_lname = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[2]/fieldset/div/div/div/div[3]/input'));
    await administrator_lname.sendKeys('Wick');

    await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[2]/fieldset/div/div/div/div[5]/p-checkbox')).click();

    let signature2 = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/div/p-fieldset[2]/fieldset/div/div/div/div[6]/div/div[2]/input'));
    await signature2.sendKeys('/Users/owl/Documents/projects/s:w testing/tests/a.png');

    await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-sign-up/p-card/div/div/div[2]/app-prev-next-button/div/button[2]')).click();

    await driver.sleep(5000);

    let register_button = await driver.findElement(By.xpath('/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-prev-next-button/div/button[2]'));
    await driver.wait(until.elementIsVisible(register_button), 2000);
    await register_button.click();
    
    await driver.sleep(1000);

    let ok_button = await driver.findElement(By.xpath('/html/body/div[2]/div/div[6]/button[1]'));
    await driver.wait(until.elementIsVisible(ok_button), 2000);
    await ok_button.click();
}

async function register_test() {
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

        await event_enrollment(driver);

        await accomplice(driver);
    }
    catch (error) {
        console.log(error);
    }
    finally {
        //await driver.quit();
    }
}


register_test();
