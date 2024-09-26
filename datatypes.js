// ******************Primitive dattypes************************

let score = 100;
let anotherScore = 100.9;
// console.log(typeof score );

const isLoggedIn = false;

const outsideTemp = null;
let userName;


const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id ===anotherId );


const bigNumber = 20359323355n;
console.log(typeof bigNumber);

// ******************non-primitive**********************8

// array  , function , object

const heros = [
    "shaktiman", "nagraaj", "doga"
]

let myObj = {
    name: "shekhar",
    age: 24,
}

const myFunction = function(){
console.log("Shkehar Rana");

}

console.log(typeof outsideTemp);//obj
console.log(typeof myFunction); //object function
console.log(typeof myObj); //obj

