const fruits = ["mango" , "apple" , "orange" , "lemon"];

// length

let num_of_item = fruits.length;
// console.log(num_of_item)

// acess arrow
let first_item = fruits[0];
let last_items = fruits[fruits.length-1];

// console.log(first_item)
// console.log(last_items);

// first item
// fruits.push("pineapple");

// console.log(fruits)

// remove last
// fruits.pop();

// add to the begin of array
// fruits.unshift("cucumber")

// remove first
// fruits.shift()

// add to middle or remove
// add to index 1 and delete 0(nothing)
fruits.splice(1,0,"grape")

// remove index2 and delete 1 
fruits.splice(2,1)

// to update
    fruits[3] = "kiwi";

// console.log(fruits)

// for(let i=0; i<fruits.length; i++);{
    // console.log(i + ":" +);
// }

// while loop
// let i=0; 
// while(i<fruits.length){
//     console.log(fruits[i]);
//     i++
// }

// for(let fruit of fruits){
//     console.log(fruit)
// }

// const TARGET_NUMBER = 30; and then replace 50 with TARGET_NUMBER(to acess the number anytime)
function sumAbove_fifty(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] >= 50){
            sum += numbers[i];
        }
    }
    return sum;
}

console.log(sumAbove_fifty([6,12,50,30,10,100]));


function refinary_reading(temperature){

}