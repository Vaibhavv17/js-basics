// code likha hai usse package mei band kardiya aur uska copy kahi bhi daal sakte hai
//ek hi cheez baar baar karne mei dikkat hogi

function sayMyName ()
{ //scope or defination iske andar
    console.log("v");
    console.log("a");
    console.log("i");
    console.log("b");
    console.log("h");
    console.log("a");
    console.log("v");
}

sayMyName() //if saymyname without () then only reference, just tells kaha rehta hai

// function addTwoNumbers(number1,number2) //parameter
// {
//     console.log(number1 + number2); //this is just printing not returning
// }
function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result; //this will return a value back
    console.log("hi"); //this will never execute as after return
    //an even easier way is return number1 + number2
}
const result = addTwoNumbers(3,5) //argument, this is an issue as no checking
//the result in fn and outside is different due to scope

console.log(result); //why undefined

function loginUserMessage(username = "vaib") // this is default value, which means if user does not pass anythin this will be username, if user passes than it will overwrite this.
{
    if( username === undefined ) //or !username as undefined is similar to false, and ! does ulta
    {
        console.log("please enter an username");
        return //wont execute the aage ke function
        
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("vaibhavv"))

//if nothing is passed to fn then undefined ayega

//shopping kart mei pata nahi kitna add karega user 

function calculateCartPrice(...num1) //if suppose val1, val2, ...num1 are parameters, and input is 200 400 500 2000, then num1 will be 500 2000
{
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); //if suppose many like 200 400 500, hence use a rest operator, and can pass any no of arguments

const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user) 
handleObject({
    username: "shreeya",
    price:399
})

//array also similar

const myNewArray = [200,400,100,600]

function      returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));

