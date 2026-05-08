// let Name = String(prompt("Please Enter Your Full Name:"));
// let email= String(prompt("Email"));
// let password=String(prompt("Password"));

// if(email == String.com && password==string){
//     alert(`Hii ${Name}! You've successfully login` )
// }else{
//     alert('Invalid Credentials')
// }

let You=(prompt("Please rate of your cloth between 1...10"));
let Date=(prompt("Please rate your dates cloth between 1...10"));

if (You>=5 && You<=10 && Date >=8){
    alert("2")
}else if(You<=2 && Date>=0 && Date<=10){
    alert("0")
}else if(You>=0 && You<=10 && Date<=2){
    alert("0")
}else{
    alert("1")
}