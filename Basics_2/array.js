// Array
//The Array object, as with arrays in other programming languages,
 //enables storing a collection of multiple items under a single variable name,
  //and has members for performing common array operations.


const myArr = [0,1,2,3,4,5]
const myHero = ["ironman" , "thor", "scarlettwitch"]


// console.log(myArr[1]);
// const myHero2 = new Array("Spiderman","blackwidow")  //another way to declare an array
// console.log(myHero2[1]);

// Array methods

// myArr.push(6,7)
// console.log(myArr);
// myArr.pop()



// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(7));
// console.log(myArr.indexOf(8));


const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice , splice

console.log("A" , myArr);

const myN1 = myArr.slice(1,3);
 // console.log(myArr.slice(2,4));
 // console.log("B", myArr);
 // console.log(myArr.splice(2,4));
    console.log(myN1);

    console.log("B", myArr);

    const myN2 = myArr.splice(1,3)
    console.log("C", myArr);
    console.log(myN2);
    
    
    




