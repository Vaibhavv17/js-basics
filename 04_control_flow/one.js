// kabhi kabhi pura code nahi run hona chahiye usko control flow karte hai, login toh koi code run ho, logout toh koi aur
const isUserLoggedIn = true
const temperature = 41


// if ( temperature < 50 ){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greater than 50");
// }
// console.log("executed");
// = => assignment
// == => if equal or not
// === => equal and also checks the type(strict checking)
// !== => not equal and does check the type
// <, >, <=, >=, ==, !=, ===

// const score = 200
// if (score > 100) {
//    let power = "fly" //hence var not used 
//    console.log(`User power: ${power}`) 
// }
// console.log(`User power: ${power}`) //not defined as not within scope

// const balance = 1000

// // if (balance > 500)console.log("test"),//only one line karna(implicit scope) but , lagake kar sakte hai but unreadable code
// // console.log("test2");

// if (balance < 500){
//     console.log("less than 500");
// }
// else if (balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200"); 
// }

//online shopping 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
   console.log("allow to buy courses");
   // && checks both condition to be true
}

if (loggedInFromGoogle ||loggedInFromEmail){
    console.log("user logged in");
    // or, mei any can be true
}

// && and || are logical operators