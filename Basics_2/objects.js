const mySym = Symbol("key1")

const objUser = {
    name: "Shekhar",
    "full name": "Shekhar Rajput",
    [mySym]: "mykey1",
    age: 25,
    location: "panipat",
    isLoggedIn: false,
    email: "shekhar@google.com"

}
// console.log(objUser.name);
// console.log(objUser["name"]);
// console.log(objUser["full name"]);
// console.log(objUser.mySym);
// console.log(objUser[mySym]);

// console.log(typeof objUser[mySym]);


// objUser.email = "Shekharana@gmail.com"

// Object.freeze(objUser)
objUser.email = "shekhar@chatgpt.com",
// console.log(objUser);


objUser.greeting = function () {
    return "Hello! JS users"
    
}

console.log(objUser.greeting());

objUser.greetingTwo = function () {
    return `Hello! JS user ${this.name}`
    
}

console.log(objUser.greetingTwo());
