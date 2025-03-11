const { findAndInteract } = require("../selenium/interact");

async function login(driver, username="7242042405", password="12345678") {
    // username
    await findAndInteract(
        driver,
        "/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[2]/input",
        "sendKeys",
        username
    );

    // password
    await findAndInteract(
        driver,
        "/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[3]/p-password/div/input",
        "sendKeys",
        password
    );

    // login button
    await findAndInteract(
        driver,
        "/html/body/app-root/app-login/div/div/p-card/div/div[2]/div/div/div[4]/div/form/div[5]/button",
        "click"
    );

    await driver.sleep(1000);
}

module.exports = { login }