//arrays
// data structures jaana zaroori hai pehle- data ko rakh kese rahe hai

const check = [0, 1, 2, 3, 4, 5, true, "hitesh"] // in js, we can have elements of any type 
//collection of multiple items in a single variable
// in js arrays are resizable too

console.log(check[0]);

//arrays create shallow copies, same reference, (deep copy, not same reference)

const myHeros = ["shaktiman", "naagraj"]

const myArr = new Array(1,2,3,4)

//array methods
myArr.push(6)
myArr.push(7) //adds
myArr.pop() //removes last value
myArr.unshift(9) //start mei, but sare elements shift karne padte hai not optimised.
myArr.shift() //shuru se delete

console.log(myArr);

//some functions in array are used as questions

console.log(myArr.includes(9)); //boolean
console.log(myArr.indexOf(3)); //if doesnt exist -1

const newArr = myArr.join() //adds all elements of array into string

console.log(myArr);
console.log(newArr);
//this will be same
//but type is string

//slice splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr)

const myn2 = myArr.splice(1,3) //1 and 3 both included, array also changes in this case, only having elements which are not included
console.log("C", myArr)
console.log(myn2);








