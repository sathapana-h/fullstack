function criticalCode() {
    throw "throw an exception";
}

function logError(theException) {   
    console.log(theException);
}

console.log("\n******Try..Catch******\n");
try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

console.log("\n******Throwing in Try..Catch******\n");
try {
    throw "An exception that is thorwn every time";
} catch (ex) {
    console.log("Caught an error");
    logError(ex);
}

console.log("\n******Finally Block******\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("Code that always run");
}

function hello () {
    console.log("\n******Throwing Exceptions******\n");
}