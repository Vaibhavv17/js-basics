// for of loop, array specific loop

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

// maps

const map = new Map()
// map key value pair, and remembers order, and no duplicate values

map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map); //printing in order and unique 

for (const [key, value] of map) {
    console.log(key);
    // map in the form of arrays 
    console.log(value);   
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}


// for (const [key,value] of myObject) // but it gives error saying it is not iterable 
// {
//     console.log(key); 
//     console.log(value);
// }

//for in cant be used on mapss