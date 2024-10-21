const name = "vaibhavv"
const repCount = 50

console.log(name + repCount + " Value");

// not recommended

console.log(`hello my name is ${name} and my repocount is ${repCount}`); //better way(string interpolation)

const gameName = new String('vaibhavv-mah')
//using objects, it gives length property and various other functions
console.log(name[0]);
console.log(gameName.__proto__);

console.log(gameName.toUpperCase()) // doesnt change original string (stack and heap concept)

console.log(gameName.charAt(2));

console.log(gameName.indexOf('h'));

const newString = gameName.substring(0, 4)
console.log(newString) //last mei jo value dala voh include nahi hora

const anotherString = gameName.slice(-11, 4) //slice mei negative value bhi de sakte hai,then reverse se start hoga     
console.log(anotherString);

const newStringOne = "    vaibhavv   "
//user unknowingly extra spaces add kardeta hai mail vagera mei
console.log(newStringOne)
console.log(newStringOne.trim()) //removes starting and end spaces

const url = "https://vaibhavv.com/vaibhavv%20mah" //browser spaces nahi samjhta hai 

console.log(url.replace('%20','-'))
console.log(url.includes('vaibhavv'))

//string to array, based on some delimiter

console.log(gameName.split('-'))




