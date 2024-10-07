const user = {
    userName: "Shekhar",
    price: 999,

    welcomeMessage: function () {

        console.log(`${this.userName}, Welcome to this website`);
console.log(this);

    }

    
}

// user.welcomeMessage()
// user.userName = "sheku"
// user.welcomeMessage()


// console.log(this);



// function chai (){
//     let username = "Shekhar"
//     console.log(this.userName);
    
// }
// chai()

// const chai = function(){
//     let username = "Shekhar"
//     console.log(this.userName);
    
// }
// chai()

const chai = () => {
    let username = "Shekhar"
    console.log(this.userName);
    
}
// chai()


// const code = (num1, num2) => {
//     return num1 + num2
// }
// console.log(code(3,5));


// const code = (num1, num2) =>  num1 + num2

// const code = (num1, num2) =>  (num1 + num2)

const code = (num1, num2) =>  ({userName:"kuldeep"})
   

console.log(code(3,9));