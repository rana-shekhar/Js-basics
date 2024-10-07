

// Syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// The switch statement evaluates an expression and matches the value to one of several case labels,
// executing the associated block of code. 
// If no cases match, it falls back to the default case (if provided).


let day = 5;  // You can change this value to test other cases

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
