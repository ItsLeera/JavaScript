function missingNumber(arr=[]){
    let numbers = "123456789";
//    let missinNum=arr[0];

let result = [];

    for(let i=0; i<arr.length; i++){

    
    }
    
    return result;
}

console.log(missingNumber([1,2,4,5,6,7,8,9]))


function missingNumb2(arr){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }

    let total = 0;

    for(let i=1; i<=9; i++){
        total+=i;
    }

    return total - sum;
}
// console.log(missingNumb2([1,3,2,4,5,6,8,9]))
function missingAlphabet(arr){
let alpha = "abcdefghi"
for(let i=0; i < arr.length; i++){
    if(!arr.includes(alpha[i])){
        return alpha[i]
    }
}
}
let alpha = ['a','b','d','e','f','g','h','i']
console.log(missingAlphabet(alpha))
