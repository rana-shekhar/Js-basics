//Dates

let myDates = new Date();
// console.log(myDates.getHours());
// console.log(myDates.getMinutes());
// console.log(myDates.getMonth() + 1);   //months starts from zero.

console.log(myDates.toLocaleString('default',{
    day: "numeric",
    weekday: "long"
}));


// console.log(myDates);
// console.log(myDates.toString());
// console.log(myDates.toDateString());
// console.log(myDates.toLocaleString());

// let myNewDate = new Date(2023, 0 , 21)
let NewDate  = new Date(2024,0,4,5,45)
// console.log(NewDate.toDateString());
// console.log(NewDate.toLocaleString());

// let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myDates.getTime());
// console.log(Date.now());
// console.log(Date.now()/1000);
// console.log(Math.floor(Date.now()/1000));








