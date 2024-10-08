// The condition is evaluated before each iteration.
// If the condition is true, the code inside the loop is executed.
// Once the condition is false, the loop stops

// while (condition) {
//     // code to execute
//   }

  
//   let i = 0;

// while (i < 5) {
//   console.log(i); // Output: 0, 1, 2, 3, 4
//   i++;
// }



// let num = 0;

// while (num < 5) {
//   num++;
  
//   if (num === 3) {
//     continue; // Skip the rest of the loop when num equals 3
//   }
  
//   console.log(num); // Output: 1, 2, 4, 5 (3 is skipped)
// }



// let sum = 0;
// let number = 1;

// while (number <= 5) {
//   sum += number; // Add the current number to sum
//   number++;
// }

// console.log(`Sum: ${sum}`); // Output: Sum: 15


// let i = 5;

// do {
//   console.log(i); // Output: 5
//   i++;
// } while (i < 5);

let count = 0;

do {
  console.log(`Count is: ${count}`);
  count++;
} while (count < 3);



let number;

do {
  number = prompt("Enter a number greater than 10:");
} while (number <= 10);

console.log(`You entered ${number}, which is greater than 10.`);

// The loop asks the user for input using the prompt function and checks if the entered number is greater than 10.

// The do-while loop continues to prompt the user until they provide a valid number (> 10)