
bttnAns.addEventListener("click", () =>{
    let no1 = Number(document.querySelector("#num1").value);
    let no2 = Number(document.querySelector("#num2").value);
    let operator =document.querySelector("#operator").value;
    let result;

    if(operator === "+"){
        result = no1 + no2;
    } 
    else if (operator === "-") {
        result = no1 - no2;
    }
    else if(operator === "*"){
        result = no1 * no2;
    }
    else if(operator === "/"){
        result = no1 / no2;
    }
    else {
        result = no1 % no2;
    }

    let myAns= addTwo(no1,no2);

    document.getElementById("#result").innerHTML= "Result:" + result;
})