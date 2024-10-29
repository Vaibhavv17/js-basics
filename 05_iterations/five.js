// array - foreach loop

const coding = ["js", "ruby", "java", "python", "cpp"]

// array ke andar directly properties mei

// coding.forEach( function (item) {
//     console.log(item);  
// })
//yeh item apne aap le aata hai as a parameter
//callback fn have no name

// coding.forEach( (item) => {
//     console.log(item);
    
// })

//name not needed 

// function printMe(item){
//     console.log(item);   
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

//it has more access than item

// [{},{},{}]

const myCoding = [
    {
        languageName: "javascript",
        languaeFileName: "js"
    },
    {
    languageName: "java",
    languaeFileName: "java"
    },
    {
        languageName: "python",
        languaeFileName: "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    console.log(item.languaeFileName);  
})

