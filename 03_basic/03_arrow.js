const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function(){
      console.log(`${this.username},welcome to website`);
      //to refer to current context, use this keyword 
    //   console.log(this);
       
    }

}

user.welcomeMessage()
user.username = "vaibhavv"
user.welcomeMessage()

// console.log(this) //current context is empty, as global has no context in node.
//but browser mei window dekhaye deta hai
// jo engine js ko execute karta tha voh browser mei hi paya jata tha, ab usko nikala aur alag alag node, deno, bun
// browser mei jo engine karta hai voh window deta hai global object, node mei empty object..

//arrow function

// function chai(){
//     let user = "vaibhavv"
//     console.log(this.user) //doesnt work inside function, but only inside objects
//     // console.log(this); //gives a lot of details.
    
// }
// chai()

// const chai = function(){
//     let user = "vaibhavv"
//     console.log(this.user)
// }
// chai()

const chai = () => {
    let user = "vaibhavv"
    console.log(this) //here you get empty paranthesis same as global object
}
chai()

// const addTwo =(num1,num2) => {
//     return num1+num2
// } //basic arrow function
// const addTwo =(num1,num2) => num1+num2
//implicit return, when only returning and have one line of code
// const addTwo =(num1,num2) => (num1+num2) //() mei bhi   return nahi use karna, iska use hai object mei
const addTwo =(num1,num2) => ({username : "Vaibhavv"}) //hence here useful
console.log(addTwo(3,4));

const obj = {
    name: "Vaibhav",
    greet: () => {
        console.log(this.name); // `this` does not refer to `obj`; it may log `undefined` or the global `this`
    }
};
obj.greet();







