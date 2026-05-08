let bttnAns = document.querySelector("#btn_calculate");

function calculate(no1, no2, operator){
    let result;

    if(operator === "+") {
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
    return result
}
bttnAns.addEventListener("click", () =>{
    let no1 = Number(document.querySelector("#num1").value);
    let no2 = Number(document.querySelector("#num2").value);
    let operator = document.querySelector("#operator").value;
    let display = document.querySelector("#result");


    let myAns= calculate(no1, no2, operator );

    display.innerHTML = `${no1} ${operator} ${no2} = ${myAns}`;
});