// Q, Bluebird lib were used for promises before ES6 promises.

// promises consume mostly, but sometimes create

// fetch('https://something.com').then().catch().finally()

//then mei response catch mei error and finally toh run hota hi hota hai 
//promises object representing completion
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // db calls, cryptography, network calls
    setTimeout(()=>{
        resolve()
        console.log("Async task is completed");
        //resolve()
    }, 1000)

}) //creation of Promises    //for new instance of an object use new keyword

promiseOne.then(() =>{
    // it receives argument automatically from the above work if completed
    console.log("Promise consumed");
    
}) //resolve


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve()        
    },1000)
}).then(() => {
    console.log("Async 2 resolved");
    
}) //ek hi part mei kardiya dono 


const promiseThree = new Promise((resolve,reject) => {
    setTimeout(function(){
        resolve({username : "chai",
        email: "chai@example.com"
        }) //values to pass to then
    }, 1000)
})

promiseThree.then( (user) => {
    console.log(user);
})

const promiseFour = new Promise( (resolve,reject) => {
    setTimeout(() =>{
        let error = true
        if (!error) {
            resolve({username : "Vaibhavv", password: 123})
        }
        else{
            reject("ERROR: Something went wrong")
            }
    },1000)
})

//const username = cant do this for returning need to use then again
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) =>{
    console.log(username)
}).catch((error)=>{
    console.log(error);
    
}).finally(() =>console.log("The promise is either resolved or rejected")
) // dono mei callback fn lagake value laga lenge for resolve or reject, and finally is used for something like default ki yeh humesha hoga hi 

//console.log(username);cant do this need to use multiple callbacks leading to callback hell



const promiseFive = new Promise( (resolve,reject) => {
    setTimeout(() =>{
        let error = true
        if (!error) {
            resolve({username : "Javascript", password: 123})
        }
        else{
            reject("ERROR: JS went wrong")
            }
    },1000)
})

// promise can be used with either then or async await

// async await is similar but it doenst gracefully handle catch 

async function consumePromiseFive(){
    try{
        const response 
     = await
     //doesnt check for errors
     promiseFive
     console.log(response);
    }
    catch(error){
        console.log(error);   
    }
}

consumePromiseFive()


async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data =    await response.json()
    console.log(data);
    }
    catch(error){
        console.log("error");
    }
}

//getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json()
})
.then((data) =>{
    console.log(data);
    
})
.catch((error)=>{
    console.log("error");
    
})


// very very important, all the async awaits promises written above run later and the fetch part written at the last runs first

