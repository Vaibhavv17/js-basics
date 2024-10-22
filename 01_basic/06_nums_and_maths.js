const score = 400 //automatically defined

const balance = new Number(100)
console.log(balance);
console.log(score);

console.log(balance.toString().length); //by converting to string i can use string method and properties

console.log(balance.toFixed(2)); //2 decimal points

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // returns a string, and rounds off upto 3 digits here, 23.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); //in commas, according to us for india write 'en-IN' 

Number.MAX_VALUE 

// --------math --------

//math lib comes default with js

console.log(Math); //object which has many properties and functions

console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
//many others like sqrt,pow(**),min,max,

console.log(Math.min(2,1,1,5));

//used with random fn mostly

console.log(Math.random()); //always between 0 and 1
//in dice game only between 1 to 6
console.log(Math.random()*10);
console.log(Math.floor(Math.random()*10)+1); //as 0.0xx bhi ho sakta hai, to make min 1 add 1

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)); //floor for integer, rest is formulae, max-min+1 is range, +min is used to shift the result to start from min


















