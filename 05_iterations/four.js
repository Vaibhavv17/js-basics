const myObject = {
    js : 'javascript',
    cpp : 'c++',
    rb : 'ruby',
    swift : 'swift by apple'
}

for (const key in myObject) {
//    console.log(key);
//    //gets all keys
//    console.log(myObject[key]);
   //gets all key values

   console.log(`${key} shortcut is for ${myObject[key]}`);  
}

const programming = ['js','ruby','py','java','cpp']

for (const key in programming) {
    console.log(key);
    //index(key) deta hai, value nahi 
    console.log(programming[key]);    
}

