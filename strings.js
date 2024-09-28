let name = "Shekhar"

let repoCount = 10

console.log(`Hello, my name is ${name} and my count is ${repoCount}`);

const newName = new String('Shekhu');
console.log(newName);

// console.log(newName[0]);
// console.log(newName.__proto__);

// console.log(newName.toUpperCase());
// console.log(newName.bold());

console.log(newName.charAt(3));
console.log(newName.indexOf('k'));

const newString = newName.substring(0,3);
console.log(newString);

const newStringOne = "    sagar";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shekhar.com/shekhar%20rajput";
console.log(url);

console.log(url.replace('%20' , '_'));
console.log(url.includes('shekhar'));
console.log(url.includes('rana'));

const palindrom = "The quick brown fox jumps over the lazy dog";

// console.log(palindrom.split('')); // Splits into individual characters including spaces
// console.log(palindrom.trim().split('')); // Trims whitespace first, then splits into individual characters

console.log(palindrom.replace(/\s+/g,'').split('').join());


