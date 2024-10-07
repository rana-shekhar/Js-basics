//control flow refers to the order in which individual statements, 
//instructions, or function calls are executed in a program. 
//By default, JavaScript code is executed from top to bottom,
// in a linear fashion.
// However, control flow statements allow you to alter this order based on certain conditions or logic. 


let score = 85;
if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("C grade");
}

// if: Executes a block of code if a specific condition is true.
// else: Executes a block of code if the if condition is false.
// else if: Adds additional conditions to an if statement.


let age = 17;
let canVote = age >= 18 ? "Yes, can vote" : "No, cannot vote";
console.log(canVote);  // Output: Yes, can vote


let isAdult = true;
let hasID = false;


// && (AND): Both sides must be true for the whole expression to be true.
// || (OR): At least one side must be true for the whole expression to be true.
// ! (NOT): Negates the truthiness of a condition.


// Using AND
if (isAdult && hasID) {
    console.log("You can enter");
} else {
    console.log("You cannot enter");
}

// Using OR
let hasTicket = true;
if (isAdult || hasTicket) {
    console.log("You can enter");
}

// Using NOT
if (!hasID) {
    console.log("You must bring your ID");
}
