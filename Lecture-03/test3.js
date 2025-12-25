// ตัวอย่างที่ 1
const guests = ['Alice', 'Bob', 'Charlie', 'David'];
while (guests.length > 0) {
    const guest = guests.shift();
    console.log(`${guest}!`);
    break;

}


// ตัวอย่างที่ 2
const message = 'Hello, World!';
for (const char of message) {
    console.log(char);
}