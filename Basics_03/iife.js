// IMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)

// function one() {
//     console.log("DB CONNECTED");
// }
// chai()


//NAMED IIFE
(function one() {
    console.log("DB CONNECTED");
})(); // IN THIS SPECIAL CASE YOU HAVE TO PUT SEMICOLON

( function TWO () {
    console.log("DB CONNECTED TWO");
})();


//UNNAMED IIFE
( (name) =>  {
    console.log(`DB CONNECTED THREE ${name}`);
})("TO THIS PROJECT")