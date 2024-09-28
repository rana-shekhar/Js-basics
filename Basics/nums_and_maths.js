const score = 100;
console.log(score);

const newScore = new Number(100);

console.log(newScore);
console.log(newScore.toString());

console.log(newScore.toFixed(2));

const num = 123.843462;
console.log(num.toPrecision(4));


const hundred = 10000000;
console.log(hundred.toLocaleString());

console.log(hundred.toLocaleString('en-IN'));


// ************************maths************************

// console.log(Math);
// console.log(Math.abs(-7));
// console.log(Math.abs(7));
// console.log(Math.round(7.));

// console.log(Math.ceil(7.2));
// console.log(Math.floor(7.9));
// console.log(Math.min(7 ,5,8,2));
// console.log(Math.max(7 ,5,8,2));

console.log(Math.random() * 10);
console.log((Math.random() * 10) + 1);


const num1 = 10;
const num2 = 20;

console.log(Math.ceil(Math.random() * ( num2 - num1 + 1)) + num1)
