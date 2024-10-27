// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5){
        //console.log("5 is best number");
        
    }
    //console.log(element);
} //end hone se just pehle i++ perform hota hai

// console.log(element);obviously error due to scope
//can use i again as above ka scope is over
for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value : ${i}`);
    for (let j = 1; j <= 10; j++)//here we cant take i as still in scope 
    {
        //console.log(`Inner loop value: ${j} and inner loop ${i}`); 
        //console.log(i + '*' + j + '=' + i*j)    
    }
}

let myArray = ["flash", "batman", "superman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);  
}
//if out of bounds then undefined deta hai


// break, continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        break;
    }
    console.log(`Value of i is ${i}`);  
}
for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("detected 5");
        continue;
    }
    console.log(`Value of i is ${i}`);  
}

// break is to break the control flow
// continue is like ek baar maaf kardo 

