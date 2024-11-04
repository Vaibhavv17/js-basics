function setUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    setUsername.call(this,username) //call hora hai without .call but then the fn is removed after calling and variable is removed before it reaches outer function. To hold the reference for the outer function we use .call, this is passed for the current execution context

    this.email = email;
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai); //yahape username nahi ara hai.
