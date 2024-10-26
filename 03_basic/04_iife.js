// immediately invoked function expressions (IIFE)

//function ko turant execute karana hai, global variable problem nahi kare isliye to prevent global scope pollution

(function chai(){
    console.log("DB connected");   
})(); //semicolon nahi dala toh error ata hai
//named iife
// chai() //ho toh gaya immediately

// 1st() function defination
// 2nd() execution call

( (name) => {
    console.log("db connected two ${name}");
    
})('Vaibhavv')
//unnamed iife