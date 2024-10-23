//object singleton with constructors

const tinderUser = new Object();
console.log(tinderUser);
//same as const tinderUser ={}, only that this is singleton

tinderUser.id = "123abc"

tinderUser.name = "Sammy"

tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "vaibhavv",
            lastname: "maheshwari"
        }
    }
}
console.log(regularUser.fullname?.userfullname.firstname); //if fullname doesnt exist then use ? to check, optional chaining(future topics)

const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"a",
    4:"b"
}

//const obj3 = { obj1, obj2 }
// console.log(obj3); object inside object, object merge nahi hore hai
// const obj3 = Object.assign(obj1, obj2) //returns object, better way is {},obj1,obj2, as first value is target
// console.log(obj3);

//however isko bhi kam use karenge 

const obj3 = {...obj1, ...obj2}
console.log(obj3); //spread similar as in arrays

//database se jab value ayega tab, as array of objects

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {

    },
    {

    },
]

//users[1].email ese access kar sakte hai 

console.log(tinderUser);

console.log(Object.keys(tinderUser)); //datatype arrays, can be used to loop through and others in database
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); //every key value is made an array, array ke andar array
//if values doesnt exist then crash hone ke chance hai 
console.log(tinderUser.hasOwnProperty('name'));
//hence use this to check