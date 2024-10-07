let one = "";

if (one) {
    console.log("Truthy");
} else {
    console.log("Falsy");  // This will be printed
}


let two = "";

if (two) {
    console.log("Truthy");
} else {
    console.log("Falsy");  // This will be printed
}


// Falsy Values:
// A falsy value is a value that evaluates to false when used in a boolean context. In JavaScript, there are exactly six falsy values:

// false – The boolean false.
// 0 – The number zero.
// "" – An empty string.
// null – The absence of any value.
// undefined – A variable that has been declared but not assigned a value.
// NaN – Not a number.

if (!false) {
    console.log("Falsy");  // This will be printed
}
if (!0) {
    console.log("Falsy");  // This will be printed
}
if (!"") {
    console.log("Falsy");  // This will be printed
}
if (!null) {
    console.log("Falsy");  // This will be printed
}
if (!undefined) {
    console.log("Falsy");  // This will be printed
}
if (!NaN) {
    console.log("Falsy");  // This will be printed
}


// Truthy Values:
// A truthy value is any value that is not falsy, meaning it will evaluate to true in a boolean context. This includes:

// Non-empty strings: "hello", "0", etc.
// Non-zero numbers: 42, -42, 3.14, etc.
// Arrays: [] (even empty arrays).
// Objects: {} (even empty objects).

if ("Hello") {
    console.log("Truthy");  // This will be printed
}
if (42) {
    console.log("Truthy");  // This will be printed
}
if ([]) {
    console.log("Truthy");  // This will be printed
}
if ({}) {
    console.log("Truthy");  // This will be printed
}
if (new Date()) {
    console.log("Truthy");  // This will be printed
}





