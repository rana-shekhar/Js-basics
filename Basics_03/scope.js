

//Variables declared outside of any function or block are in the global scope.
// These variables are accessible from anywhere in your code.
//In browsers, global variables are attached to the window object.

var globalVar = "I'm global!";

function checkScope() {
    console.log(globalVar); // Accessible
}

checkScope();

//Variables declared within a function using var, let, or const are local to that function.
//They are not accessible outside the function they were defined in.


function localScope() {
    var localVar = "I'm local!";
    console.log(localVar); // Accessible
}

localScope();
// console.log(localVar); // Error: localVar is not defined

// Variables declared with let or const within a block ({}) are limited to that block.
// Block-scoped variables are not accessible outside the block they were defined in.
// var does not respect block scope and will still be function-scoped.

if (true) {
    let blockVar = "I'm block-scoped!";
    console.log(blockVar); // Accessible
  }
  
//   console.log(blockVar); // Error: blockVar is not defined
  
// with var
  if (true) {
    var blockVar = "I'm block-scoped!";
    console.log(blockVar); // Accessible
  }
  
  console.log(blockVar);



  //JavaScript uses lexical scoping, meaning that the scope is determined by where variables and blocks are written in the code.
//Inner functions have access to variables defined in their outer function (closure).
  function outerFunction() {
    let outerVar = "I'm from outer!";
  
    function innerFunction() {
      console.log(outerVar); // Accessible due to lexical scoping
    }
  
    innerFunction();
  }
  
  outerFunction(); // Output: I'm from outer!

  
  function outerFunction() {
    let outerVar = "I'm from outer!";
  
    function innerFunction() {
      console.log(outerVar); // Accessible due to lexical scoping
    }
  
    innerFunction();
  }
  
  outerFunction(); // Output: I'm from outer!
  