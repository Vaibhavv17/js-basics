const user = {
    username : "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        //console.log("Got user details from database");
    }
}  //basic unit

//console.log(user.getUserDetails());


// current context - this 


// const user2 = {
//     username : "hitesh",
//     loginCount : 8,
//     signedIn : true,
//     getUserDetails : function(){
//         console.log("Got user details from database");
//     }
// } 

// same structure user banana hai toh bhi pura banana padega wapis, hence need constructor function

// new constructor function hai
// ek hi object literal se multiple instances bana sako, new context bana sako

function User (username, loginCount, isLoggedIN){
    this.username = username //to tell ki yeh mera variable hai and the other one is the one u are passing
    this.loginCount= loginCount
    this.isLoggedIN = isLoggedIN

}


const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

