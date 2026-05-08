const fruits = ["mango","apple","pearl","lemon"];

const[first, ...rest] = fruits;

// console.log(first +""+ last)
// console.log(last);
console.log(first);
console.log(rest);

const[,,myFavourite] = fruits;
console.log(myFavourite);

const num =[
    a =5,
    b = 10,
]

let [num1,num2] = num;

console.log(`a:${num2} , b:${num1}`);