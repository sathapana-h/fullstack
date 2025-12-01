function createlogEntry(Message) {
const now = new Date();
const timestamp = now.toDateString('th-TH');
const eventID = Math.random().toString(36).substring(2, 10).toUpperCase();
const logMessage = Message;
return'[${timestamp}] [${eventID}] - ${logMessage}';
}
const log = createlogEntry("User logged successful.");
console.log(log);