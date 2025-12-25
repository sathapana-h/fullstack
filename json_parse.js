const bookobj = {
    title: "Becoming",
    author: "Michelle Obama",
    isAvailable: false
};


const bookJSON = JSON.stringify(bookOBJ);

console.log(bookJSON);
console.log(typeof bookJSON);

const receivedBookObj = JSON.parse(bookJSON);
console.log(package)
console.log(receivedBookObj.title);
console.log(typeof receivedBookObj);
