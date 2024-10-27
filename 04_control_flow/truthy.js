const userEmail = ""
// string hi true value hai man liya
//empty string ko maan liya ki voh false hai, empty array ko true maan liya
if (userEmail){
    console.log("got user email");
}
else{
    console.log("dont have user email");
}

//falsy value

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//iske alawa sab truthy values hai

//some surprising, "0", 'false', " ", [], {}, function(){}(empty function)

const user = [1,2]
if (user.length === 0){
    console.log("array is empty")
}

const emptyObj = {}

if (Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10
val1 = null ?? 10
//agar null ayega ya undefined 
var1 = undefined ?? 15
console.log(var1);
var2 = null ?? 10 ?? 20 //jo bhi value miljaye
console.log(var2);
//database se call karenge ya firebase, then we dont get response directly, we get 2 values, null response or no or undefined response, 


// ternary operator

// condition ? true : false


const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")




