//*******************Stack , Heap***********************

// Stack(Primitive) , Heap(Non-Primitive

// Stack: It is a data structure used to store static data. 
// Static data refers to data whose size is known by the engine during compile time.
//  In JavaScript, static data includes primitive values like strings, numbers, boolean, null, and undefined.
//  References that point to objects and functions are also included. 
// A fixed amount of memory is allocated for static data. 
// This process is known as static memory allocation.
// Heap: It is used to store objects and functions in JavaScript.
//  The engine doesn’t allocate a fixed amount of memory.
//  Instead, it allocates more space as required.


let myName = "Shekhar"

let anotherName = myName;
anotherName = "Shekhu"
console.log(anotherName);
console.log(myName);


const userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
}

const userTwo = userOne;
userTwo.email = "shekharrana@gmail.com";

console.log(userOne);
console.log(userTwo);

