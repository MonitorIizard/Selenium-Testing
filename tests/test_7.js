const { findAndInteract } = require("../selenium/interact");
const { getDriver } = require("../selenium/driver");
const { login } = require("./login");

async function testEnterStudentInfo() {
  try {
    const driver = await getDriver();

    await login(driver);

    // คลิกลงทะเบียน
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div/app-funds-list/p-card/div/div/div[3]/div/div[2]/div/label/span",
      "click"
    );

    // ลงทะเบียน
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

    // คลิกถัดไป
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/p-card/div/div/div[2]/app-prev-next-button/div/button[2]",
      "click"
    );

    // waiting for page change
    await driver.sleep(1000);

    // คลิกเลือกนักเรียน
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[1]/p-checkbox",
      "click"
    );

    // กรอกน้ำหนัก
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[5]/p-inputnumber/span/input",
      "sendKeys",
      "20"
    );

    // กรอกส่วนสูง
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[6]/p-inputnumber/span/input",
      "sendKeys",
      "110"
    );

    // เปิดวันที่
    await findAndInteract(
      driver,
      "/html/body/app-root/app-school-layout/app-school-home/div/div/div[2]/app-students-table/p-card/div/div/div[2]/div/div/div/p-table/div/div[2]/table/tbody/tr[1]/td[7]/mat-form-field/div[1]/div/div[3]/mat-datepicker-toggle/button",
      "click"
    );

    // เลือกวันที่
    await findAndInteract(
      driver,
      "/html/body/div/div[2]/div/mat-datepicker-content/div[2]/mat-calendar/div/mat-month-view/table/tbody/tr[2]/td[2]/button",
      "click"
    );

    await driver.sleep(500);

    // ปิดวันที่
    await findAndInteract(driver, "/html/body/div", "click");

  } finally {
  }
}

testEnterStudentInfo();
