
let btnAns = document.querySelector('#btn_add');

function addTwo(a,b){
    return a + b;
}
btnAns.addEventListener("click", () =>{
    let no1 = Number(document.querySelector("#Number").value);
    let no2 = Number(document.querySelector("#Number2").value);
    let display = document.querySelector(".result");

    let myAns = addTwo(no1, no2);

    display.innerHTML = `${no1} + ${no2} = ${myAns}`; 

})