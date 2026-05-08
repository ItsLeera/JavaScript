// console.log(greet())
// console.log(greet)

let userInfo = document.querySelector("#user_info");
let btn = document.querySelector("#btn_prosper");

let greet = (name, email) => {
    userInfo.innerHTML = `Hello, ${name}, you are welcome, we will contact you shortly through ${email}`;
};

btn.addEventListener("click", () =>{
    let username = document.querySelector("#username").Value;
    let email = document.querySelector("#email").Value;
    greet(username , email);
});
