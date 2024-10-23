// one is literal and constructor
//singleton object banta hai constructor se

//object literals
//Object.create, constructor wala ese

const mySym = Symbol("key1")
const JsUser = {
    name: "Vaibhavv",
    "full name":"Vaibhavv Maheshwari", // if spaces then use ""
    // mySym: "mykey1", // ese nahi hota, as it prints mykey1
    [mySym]:"mykey1", //correct syntax for symbols
    age:20,
    location: "Pune",
    email:"mvaibhavv17@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","saturday"]
} //bangaya object and object declaration, which has keys and values, keys ko as strings hi access hota hai, objects need not be hence accessed by index like arrays

console.log(JsUser.email) //to access object
console.log(JsUser["email"]) // ese bhi kar sakte hai, as keys are stored as strings hence "" 
//console.log(JsUser.full name)
console.log(JsUser["full name"]); //hence for keys with space use[]

console.log(JsUser[mySym]);
console.log(typeof JsUser[mySym]);

JsUser.email = "vaibhavv.mitmpl2022@learner.manipal.edu"

//value lock also

//Object.freeze(JsUser)
JsUser.email = "mvaibhavv17@gmail.com"
console.log(JsUser);

//js mei functions ko variables ke tarah treat kar sakte hai

JsUser.greeting = function(){
    console.log("hello js user")
}

console.log(JsUser.greeting()); // need to use() after greeting, else function ka reference atta hai wapis bas

JsUser.greeting2 = function(){
    console.log(`hello js user, ${this.name}`) //as same object reference then "this" keyword, it helps mention the properties
}
console.log(JsUser.greeting2()); //undefined print hota hai end mei, watch further videos for that

