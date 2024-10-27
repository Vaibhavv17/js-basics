// ek value ko multiple condition se check karna hai 

const month = "march"

switch(month){ //month is key
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
         break;
    case "april":
        console.log("april");
         break;
    default: //similar to else
        console.log("default case match");
        
//if no break, then jahape bhi key match hogya uska baad ka sara code execute hojata hai.control flow ko break karta hai 'break'
}

//switch mei comparision operator nahi use karna padta



