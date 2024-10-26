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

//nested scope and basic closures

function one(){
    const username = "Vaibhavv"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website);
// 2 couldnt execute as this gave error
    two()
    
}

one()
// function declare and call ka alag se call stack banta hai ya scope banta hai
// isi ko closure kehte hai andar ka function bahar ka access kar pata hai, child parent ko

if(true){
    const username = "Vaibhavv"
    if(username === "Vaibhavv"){
        const website = " youtube"
        console.log(username + website);
        
    }
    // console.log(website);
    
}
// console.log(username);


// +++++++++++ interesting ++++++++
console.log(addone(5))
function addone(num) {
    return num+1
}

//basic function
addTwo(5) //error as functions are declared and held in variables.
const addTwo = function(num){
    return num+2
}
// addTwo(5)
//expressions, variable can hold a lot of things in JS
// hoisting. execution context banta hai








