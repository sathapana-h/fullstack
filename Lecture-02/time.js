const startTime = Date.now();
function someHeavyTask() {
    for (let i = 0; i < 4e7; i++) {
        Math.sqrt(i);
}
}
const endTime = Date.now();
console.log('Time taken for someHeavyTask: ' + (endTime - startTime) + ' milliseconds');