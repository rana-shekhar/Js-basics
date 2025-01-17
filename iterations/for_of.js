
let numbers = [1, 5, 4, 6, 7, 8, 9]
for (const num of numbers) {
    console.log(num);


}
console.log(`length: ${numbers.length}`);


// const greeting = "Hello World"
// for (const greet of greeting) {
//  console.log(`each char is ${greet.trim()}`)
    
// }

const greeting = "Hello World";
for (const greet of greeting) {
  if (greet.trim()) {
    console.log(`each char is ${greet}`);
  }
}
