
// break
// The break statement terminates the loop entirely.
// When break is executed, the loop stops, 
// and the program continues with the first statement after the loop.


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//       break; // The loop stops when i equals 5
//     }
//     console.log(i); // Output: 0, 1, 2, 3, 4
//   }
//   console.log("Loop terminated");


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 6) {
    console.log("Found 6, exiting the loop.");
    break; // Exit the loop when the number 6 is found
  }
  console.log(numbers[i]); // Output: 1, 2, 3, 4, 5
}

  

 // continue
// The continue statement skips the current iteration of the loop and jumps to the next iteration. 
// It doesn’t terminate the loop but bypasses the remaining code in the current iteration.


// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         console.log("detected");
//       continue; // Skip this iteration when i equals 5
//     }
//     console.log(i); // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9 (5 is skipped)
//   }

for (let i = 2; i <= 10; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break; // Exit the inner loop if not prime
      }
    }
    // if (!isPrime) {
    //   continue; // Skip the rest of the loop if not prime
    // }
    console.log(i); // Output: 2, 3, 5, 7
  }
  

  