// let arr1 =[10, 20, 40];

// let arr2 = arr1.slice(1,1)
// console.log(arr2)

// let number = [1,6,3,10];
// console.log(number.includes(60))

// let getIndex = number.indexOf(100);
// console.log(getIndex)



function removeDuplicate(arr){
    let withoutDuplicate = [];
    for(let i = 0; i<arr.length; i++){
        if(!withoutDuplicate.includes(arr[i])){
            withoutDuplicate.push(arr[i])
        }
    }
    return withoutDuplicate;
}

// console.log(removeDuplicate([1, 1, 2, 3, 4, 5, 4, 6]));


function getMax(arr){
    let maxSalary = arr[0];

    for(let i = 0; i < arr.length; i++){
        if(maxSalary > arr[i]){
            maxSalary = arr[i];
        }
    }
    return maxSalary
}

// console.log(getMax([10,50,100,80,5]));

function getFirstThreeHighPrice(arr){
    let result = arr.sort((a , b) => b - a);

    return result = arr.sort(0, 3);
}

let prices = [60,180,200,100,500,20];

// console.log(getFirstThreeHighPrice(prices));

prices.sort((a , b)=> b - a);

console.log(prices);

let price2 = prices.slice(2,4)

