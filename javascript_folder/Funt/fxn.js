function message(){
    alert("You are stubborn, simple instruction,you cannot obey")
}

function userName(){
    let  uname = prompt("Enter your name")
alert(   uname +" "+ greet()+"!");
}

function greet(){
    return "Welcome ";
}

function addTwoNumbers(a, b){
    return a + b;
}


// console.log(addTwoNumbers(67,12));
// console.log(addTwoNumbers(110,2))


function quadratric(a,b,c){
    let d = ((b*b) - (4 * a*c));
    let x1;
    let x2;


    if(d == 0){
        x1 = -b/2 * a;
        x2 = -b/2*a;

    }else if(d >0){
        x1 = (-b+Math.sqrt(d))/2*a;
        x2 = (-b-Math.sqrt(d))/2*a;
    }else {
        x1 = Math.abs((-b+Math.sqrt(d))/2*a);
        x2 =Math.abs( (-b-Math.sqrt(d))/2*a);
    }

    console.log("X1="+x1 +",X2="+x2)
}

quadratric(1,5,6);