// สร้างฟังก์ชัน Temp ID
function generateTempId() {
  // Math.random() ให้สูสำหรับตัวเลข 0 ถึง 1
  // .toString(36) แปลงเป็นเลฐาน 36 (0-9, a-z)
  // .substring(2, 8) ตัดตัวอักษร 2 ตัว และเอา 6 ตัวอักษร
  const randomPart = Math.random().toString(36).substring(2, 8);
  
  // .toUpperCase() เปลี่ยนเป็นตัวพิมพ์ใหญ่
  return randomPart.toUpperCase();
}

const orderId = generateTempId();
console.log(` ID ออเดอร์ชั่วคราว: ${orderId}`);
// Output (ตัวอย่าง): ID ออเดอร์ชั่วคราว: 4B2A1Z
