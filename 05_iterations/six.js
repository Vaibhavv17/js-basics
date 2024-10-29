const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item 
// })  

// console.log(values); //undefined, even if i use return 

const myNums = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNums.filter( (num) => {
//    return  num > 4
// }) //callback hi leta hai, condition dena padta hai and voh return hota hai jo satisfy kara jaye, jab {} use karte hai then return keyword use karna hoga  

// console.log(newNums);


const newNums = []

myNums.forEach ( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})

// console.log(newNums);

//agar foreach use karna hi hai return karne ke liye then use a new array 

