const thrityAndAbove = (numbers)=>{
  return numbers.filter((number)=>number >=30).filter((number)=> number > 50 );
}

// console.log(thrityAndAbove([12,45,12,60,2,4,10]))

let username = "          delight";
let usernameTrim = username.trimLeft();
console.log(usernameTrim.length);

const checkName = "Ri ce";

let nameWithouSpace = checkName.replace(" ","");

// console.log(nameWithouSpace.toLowerCase())

let outcome  = nameWithouSpace.includes("d");
// console.log(outcome);


//count any vowels and consonant in any given string

function countVowelAndConsonant(str){
let vowelCount = 0;
let consonantCount = 0;
let vowel = "aeiouAEIOU";

for(let i=0; i<str.length; i++){
    let charater =  str.charAt(i);

    if(vowel.includes(charater)){
        vowelCount++;
    }else{
        consonantCount++;
    }
}

return {vowel: vowelCount, consonant: consonantCount};
}

// console.log(countVowelAndConsonant("Deligh"))

// access

// console.log(username.charAt(1));

// let moddifiedUsername = username.split(" ");
// console.log(moddifiedUsername)
// let modfied2 = moddifiedUsername.join(" ");
// console.log(modfied2)


// function validUsername(){
//     let userName  = document.querySelector("#username").value;
//     let error =  document.querySelector(".errorText");

//     if(userName.length < 5){
//       error.textContent = "Username cannot be less than 5 character length";
//     }else{
//         error.textContent = "";
//     }
// }

// let btn_send =  document.querySelector("#btnSubmit");

// btn_send.addEventListener('click',()=>{
// validUsername();
// })

function countUpperAndLower(str){
    let uCount = 0;
    let lCount = 0;

    let UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i<str.length; i++){
        let chara = str.charAt(i);

        if(UPPER.includes(chara)){
            uCount++;
        }else{
            lCount++;
        }
    }

    return {Uppercase: uCount, lCount: lCount};
}
// console.log(countUpperAndLower("MiKE"))

function swapCase(str=""){
    let result ="";
    for(let i=0; i<str.length; i++){
        let chara = str.charAt(i);
        if(chara ==chara.toUpperCase()){
           result+=chara.toLowerCase();
        }else{
            result+=chara.toUpperCase();
        }
    }

    return result;
}

// console.log(swapCase("EbuBE"))

// String-1 -- helloName
// Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

// Examples

// helloName('Bob') → Hello Bob!
// helloName('Alice') → Hello Alice!
// helloName('X') → Hello X!

function helloName(name){
    return "Hello "+name +"!";
}

// Given two strings, a and b, return the result of putting them together in
//  the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

// Examples

// makeAbba('Hi', 'Bye') → HiByeByeHi
// makeAbba('Yo', 'Alice') → YoAliceAliceYo
// makeAbba('What', 'Up') → WhatUpUpWhat

function  makeAbba(a,b){
    return a+""+b+""+b+""+a
}