const { findAndInteract } = require("../selenium/interact");
const { getDriver } = require("../selenium/driver");
const { login } = require("./login");

async function testSelectProject() {
  try {
    const driver = await getDriver();
    await login(driver);

    // คลิกลงทะเบียน
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[2]/div/label/span",
      "click"
    );
  } finally {
  }
}

testSelectProject();
