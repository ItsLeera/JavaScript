let balance = 1000;
let continueTransaction = true;

while (continueTransaction) {
    // Show menu using prompt
    let choice = prompt(
        "Choose an option:\n\n" +
        "1. Deposit\n" +
        "2. Withdraw\n" +
        "3. Check Balance\n" +
        "4. Exit\n\n" +
        "Enter number 1 - 4:",
    );

    switch (choice) {

        case "1": // Deposit
            let depositAmount = parseFloat(prompt("Enter amount to deposit:"));

            if (isNaN(depositAmount) || depositAmount <= 0) {
                alert(" Invalid amount! Please enter a positive number.");
            } else {
                balance += depositAmount;
                alert("Deposit successful!\nNew Balance: " + balance);
            }
            break;

        case "2": // Withdraw
            let withdrawAmount = parseFloat(prompt("Enter amount to withdraw:"));

            if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
                alert(" Invalid amount! Please enter a positive number.");
            }
            else if (withdrawAmount > balance) {
                alert(" Insufficient funds!\nYour current balance is " + balance);
            }
            else {
                balance -= withdrawAmount;
                alert(" Withdrawal successful!\nNew Balance: " + balance);
            }
            break;

        case "3": // Check Balance
            alert(" Your current balance is: " + balance);
            break;

        case "4": // Exit
            alert(" Thank you for using ATM.\nGoodbye!");
            continueTransaction = false;   // Stop the loop
            break;

        default:
            alert(" Invalid option! Please enter 1, 2, 3 or 4.");
    }

    // After each transaction (except Exit), ask if they want to continue
    if (choice !== "4" && continueTransaction) {
        let answer = prompt("Do you want to perform another transaction? (yes/no)");
        if (answer === "yes") {
            // continue loop
        } else {
            alert("Thank you for using ATM.");
            continueTransaction = false;
        }  
       // If they type "yes" or anything else, the while loop continues 
        // let answer = prompt("Do you want to perform another transaction?\n\nType 'yes' or 'no'").toLowerCase();

        // if (answer === "no") {
        //     alert(" Thank you for using ATM.\nGoodbye!");
        //     continueTransaction = false;
        // }
    }
}