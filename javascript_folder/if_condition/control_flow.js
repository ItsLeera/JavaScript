// let age = 18;

// if(age>= 18){
//     console.log("You are eligible to use this app.")
// }

// nested if

// let state= "Delta";
// let driver_license = true;

// console.log(driver_license)

// if(state === "Delta"){
//     if(driver_license===false){
//         console.log("Congratulations, you are permitted to drive..")
//     }
// }


// if(state==="Delta" && driver_license){
//     console.log("Congratulations, you are permitted to drive..")
// } else{
//     console.error("incorrect details")
// }

// let email= String(prompt("Enter email"));
// let passsword=Number(prompt("Enter your Password"));


// if(email=== "abc@gmail.com" && passsword===123456){
//     alert("Congratulations, you've succesfully login..")
// }else{
//     alert("Invalid Credentials")
// }

// let Score=Number(prompt("Enter your score:"));

// if(Score >=70 && Score<= 100){
//     alert("A")
// }  else if(
//     Score >=60 && Score <= 69 ){
//         alert("B")
//     }
//     else if(
//         Score >=50 && Score <=59){
//             alert("C")
//         }
//     else if(
//         Score >=40 && Score <= 49 ){
//             alert("D")
//         }
//     else(
//             alert("F")
//         )

let Name=(prompt("Enter your name"));

let friend=(prompt("How many Friend do you have?"));

if(friend==1){
    alert(`Hii ${Name}! thanks for answering our quiz, so you have 1 friend.`)
}else if(friend==2){
    alert(`Hii ${Name}! thanks for answering our quiz, so you have 2 friends`)
}
else if(friend==3){
    alert(`Hii ${Name}! thanks for answering our quiz, so you have 3 friends`)
}
else if(friend >= 4){
    alert(`Hii ${Name}! thanks for answering our quiz, so you have many friends`)
}
else{
alert(`Hii ${Name}! Thanks for Participating`)
}

// ternary operator
// let age=16

// let result= age>= 18? "You are eligible to vote": "You're not eligible";


// let weekend=Boolean(prompt("Please, Is it Weekend? (true/false)"));

// let Sum=Number(prompt("Enter number of Cigar taken at the party"));

// if(weekend==false && Sum <=39 && Sum>= 61){
//     alert("False")
// } else if( weekend==false && Sum>=40 && Sum <=60){
//     alert("Party is Successful")
// } else if(weekend== true && Sum>=61){
//     alert("Party is successful")
// } else{
//     alert("False")
// }