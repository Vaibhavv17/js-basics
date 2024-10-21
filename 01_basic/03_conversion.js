let score = null

console.log(typeof score);
//or
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33 => 33"
//"33abc" => NaN (but type is number only, flaw in JS)
//true => 1; false => 0
//null => 0
//undefined => NaN
let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "" => false
//"abcd" => true

let someNumber = 10

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);


// Operations

let value = 3
let negValue = -value
// console.log(negValue);

// 2**3 is 2 raised to power 3

let str1 = "hello"
let str2 = " vaibhavv"

let str3 = str1 + str2

console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32

console.log(+true); // 1
// but true + not possible


let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter
console.log(gameCounter);


