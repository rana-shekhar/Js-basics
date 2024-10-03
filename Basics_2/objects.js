//******************literals******************* */


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

// console.log(objUser.greeting());

objUser.greetingTwo = function () {
    return `Hello! JS user ${this.name}`
    
}

// console.log(objUser.greetingTwo());

// *******************singleton*****************

const tinderUser = {}

tinderUser.name = "Shekhar"
tinderUser.email = "shekhar@gmail.com"
tinderUser.age = "23"


// console.log(tinderUser.name);



const dailyUser = {
    name: "Shekhar Rajput",
    fullName: {
userFullName: {
    firstName:"Shekhar",
    lastName:"Rana",
},
    }
}


// console.log(dailyUser.fullName.userFullName.lastName);





const target = {1:"a", 2:"b"}
const source = {3:"c", 4:"d"}

// const obj3 = {target,source}
const obj2 = {...target , ...source}

// console.log(obj2);

// console.log(Object.assign(target ,source));

// console.log(Object.keys(target));
// console.log(Object.values(source));

let arr1 = [
    {
        id: "1",
        email:"S@gmail.com",
    }
]


// console.log(arr1[0].email);
// console.log(arr1[0]["email"]);





const course = {
    coursename: "JS course",
    courseprice: "999",

}

// console.log(course.coursename);

// const {coursename} = course


//rename
const {coursename: name} = course

console.log(name);


// console.log(coursename);



//******************JSON format*************************

{
    "coursename": "JS in hindi",
    "courseduration": "12hrs",
    "courseprice": "free",

}


