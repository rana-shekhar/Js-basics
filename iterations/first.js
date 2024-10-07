
// It consists of three main components: initialization,
// condition, and increment/decrement. Here's a basic structure of a for loop:


// for (initialization; condition; increment/decrement) {
//     // Code to be executed on each iteration
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if (i==7) {
//         console.log("this is best is best");

//     }
//     console.log(element);

// }

for (let i = 0; i <= 10; i++) {
    console.log(`inner loop value ${i}`);

    for (let j = 0; j <= 10; j++) {
        // console.log(`outer loop value ${j} and inner is ${i}`);
        console.log(`${i} * ${j} = ${i*j}`);
        


    }

}