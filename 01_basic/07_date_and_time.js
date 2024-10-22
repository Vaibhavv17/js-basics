//represents a single moment based on jan1, 1970, hence date
//calculates in milliseconds
// a new temporal api is being developed as a global object, so it can easily access dates

let myDate = new Date()
console.log(myDate.toLocaleString());

console.log(typeof myDate);//object

let myCreatedDate = new Date(2023, 0, 23) //month starts from 0 in JS
let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
let myCreatedDate2 = new Date("2023-04-17") // or mm-dd-yy format too 
console.log(myCreatedDate2.toString());

//timestamps in date, designing polls or quizzes
//exact value at this time

let myTimeStamp = Date.now()
console.log(myTimeStamp);
//from jan 1,1970 as mentioned

console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000)); //milli to seconds

let newDate = new Date()
console.log(newDate.getMonth()+1);
//similar getday and others


//very useful method

newDate.toLocaleString('default', {
    weekday: "long",
    }) // just to customize

//little complex topic.



