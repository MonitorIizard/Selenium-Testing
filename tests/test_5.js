const { findAndInteract } = require("../selenium/interact");
const { getDriver } = require("../selenium/driver");
const { login } = require("./login");

async function testClickNextWithoutSelectingStudent() {
  try {
    const driver = await getDriver();

    await login(driver);

    // คลิกปุ่มลงทะเบียน
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[2]/div/label/span",
      "click"
    );
    
    // เลือกโครงการสร้างความเท่าเทียมด้านโภชนาการสำหรับนักเรียนที่มีภาวะทุพโภชนาการ กิจกรรมสนับสนุนนักเรียนบ้านไกลพักนอนในสังกัดโรงเรียนตำรวจตระเวนชายแดน (มื้อเช้าและมื้อเย็น)
    await findAndInteract(
        driver,
        "/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/app-prev-next-button/div/button[2]",
        "click"
    );

    // กดถัดไป
    await findAndInteract(
        driver,
        "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/p-card/div/div/div[2]/app-prev-next-button/div/button[2]",
        "click"
    );

    // waiting for page change
    await driver.sleep(1000);

    // กดถัดไปโดยไม่เลือกนักเรียน
    await findAndInteract(
        driver,
        "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/app-prev-next-button/div/button[2]",
        "click"
    );

  } finally {

  }
}

testClickNextWithoutSelectingStudent();