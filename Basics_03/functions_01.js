function sayMyName() {
    console.log("s");
    console.log("h");
    console.log("e");
    console.log("k");
    console.log("h");
    console.log("a");
    console.log("r");

}

// sayMyName()

function addTwoNumber(number1, number2) {

    // let result = number1 + number2;
    // return result
    return number1 + number2;
}

const result = addTwoNumber(4, 6);

// console.log("Result:", result);

function loginUserMessage(userName = "shekhu") {
    if (!userName) {
        console.log("pls enter username");
        return
    }
    return `${userName} just logged in`
}

// console.log(loginUserMessage());



function cartValue(var1, var2, ...num1){
return (var1,num1,var2);
}

// console.log(cartValue(200,500,400,3000));


const user = {
    name: "shekhar",
    price: 299,
}

function anyobject (handleObj){
// console.log(`username is ${handleObj.name} and price is ${handleObj.price}`);

}

// anyobject(user)
anyobject({
    name:"sam",
    price:399
})


const myNewArray = [200,3000,400,5000]

function anything(getArray){
return getArray[1]
}

// console.log(anything(myNewArray));

console.log(anything([200,400,300]));

