const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// const newNums= myNumbers.map( (num) => num+10 )  //again callback fn similar to filter but sabpe iterate karega not like filter, alag se only true nahi return karta 

//chaining 

const newNums = myNumbers.map( (num => num*10 )) //next vale map par pehle wala ka result jata hai 
.map( (num) => num+1)
.filter( (num) => num>=40)
console.log(newNums);

