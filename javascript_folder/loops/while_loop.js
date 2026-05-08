// let i=0;

// while(i<=10){
//     console.log(i+ "This will work");
//     i++
// }

// find sum of all odd numbers btw 1 to 100

// let i=1;
// let sum=0;

// while(i<=100){
//     if(i%2 == 1){
//         sum+= i;
//     }
//     i++
// }

// console.log("Sum" + sum)



// let times = Number(prompt("Enter the highest number"));
// let number = 0;
// let sum = 0;

// while(number <=times){
//     number = Number(prompt("Please a number that is not greater than "+times));
//         if(number <= times){
//             sum += number;
//         }
// }

// alert("sum="+ sum);

let input;

while((input = prompt("Type exit to stop")) !== "exit") {
    console.log("You typed" + input);
}



        let answer = prompt("Do you want to perform another transaction?\n\nType 'yes' or 'no'").toLowerCase();

        if (answer === "no") {
            alert("👋 Thank you for using ATM.\nGoodbye!");
            continueTransaction = false;
        }
