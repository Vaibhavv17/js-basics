const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel_heros.push(dc);

console.log(marvel_heros); //array ke andar array agya, as array can take any type of data while pushing, so it takes entire array as a data and pushes it
console.log(marvel_heros[3][1]); //3rd element array hai usse 1st access karna hai

const allHeros = marvel_heros.concat(dc)  //concats 2 array and returns new array

console.log(allHeros);

//spread, kaanch ka glass usko drop karo spread hojayega

const all_new_heros = [...marvel_heros, ...dc]
//2 kaanch ka class drop kiya, better as more than 2 bhi chaltay


console.log(all_new_heros);

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity) //depth as 1 array ke andar 1 array,so 2 here

console.log(real_another_array);


//data kabhi kabhi alag format me aata hai

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh")) //will convert to array in whatever way possible

console.log(Array.from({name: "hitesh"})); //will give empty array as u need to tell to form array on what basis, it cant recognize now. exp- only keys ka array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //of returns new array from set of elements





