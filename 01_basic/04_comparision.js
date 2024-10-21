// comparision
// 2>1 =>true
// 2>=1 =>true
//2<1 => false
// 2==1 =>false
// 2!=1 =>true
// obvious these are

console.log("2" > 1); // true
console.log("02" > 1); //true

//not always predictable, hence same datatype

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //value conversion problem

// equality check== and comparisions >,< all these work differently
// comparisions convert null to a number, treating it as 0

// comparision and equality check work differently (remember) as inka special method hain.


// strict check => ===
// it checks the datatype also, it should be same
// "2" == 2 true
// "2" === 2 false







