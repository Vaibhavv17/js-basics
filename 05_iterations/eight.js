// reduce 

// first time initial value then accumulated value

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0 //initial value
// )
// console.log(myTotal);


const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName : "js course",
        price: 2999
    },
    {
        itemName : "py course",
        price: 999
    },
    {
        itemName : "mobile dev course",
        price: 5999
    },
    {
        itemName : "data science course",
        price: 12999
    }

]

// to add all prices, best is reduce

const priceToPay = shoppingCart.reduce ( (acc, item) =>acc+ item.price, 0)

console.log(priceToPay);
