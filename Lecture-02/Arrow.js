//const a = 5
//const b = 10
//
//const add = function(a, b){
//    return a + b ;
//};
//console.log("the sum of ${a} and ${b} is ${add(a, b)}")

//const xadd = (a =b) => a + b
//console.log("the sum of ${a} and ${b} is ${xadd(a, b)}")

//const subtract = (a, b) => {
//   const result = a - b ;
//};
//console.log("the disserence of ${a} and ${b} is ${add(b, a)}")



//const fullName = " Sathapana Huatwiset";
//const cleanedName = fullName.trim().split(' ');
//console.log(`Cleaned Name: ${cleanedName}`);
//const finalParts = cleanedName[0]; 
//console.log(`Hello, ${finalParts}`);


function censorWord(sentence, wordToCensor) {
  const regex = new RegExp(wordToCensor, 'gi');
  const censoredText = sentence.replace(regex, '***');
  return censoredText;
}

const originalPost = "JavaScript is fun, but sometimes JavaScript is tricky.";
const cleanPost = censorWord(originalPost, "javascript");
console.log(cleanPost);


