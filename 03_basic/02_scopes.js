//var c = 300
//global scope
let a = 300
if(true)
{
    let a = 10
    const b = 20
    console.log("INNER: ",a);
    
    // var c = 30
} //block scope
//curly braces are scope
console.log(a);
// console.log(b);
// console.log(c); //yeh 30 bahar aana bhi nahi chahiye par aata hai in var.

// node mei global scope and browser mei global scope alag hai 

// curly braces are not for scope in case of object declaration

