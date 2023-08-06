var promptSync = require("prompt-sync")();
console.log("Welcome to ATM");
// Hardcoded values
var Id = 12345;
var pass = 54321;
var balance = 10000;
// Take userId and password as input
var userIdInput = promptSync("Enter your UserID: ");
var passwordInput = promptSync("Enter your Password: ");
var userId = parseInt(userIdInput);
var password = parseInt(passwordInput);
// Check if the inputs are correct or not
if (userId === Id && password === pass) {
    console.log("Login Successfully!");
    Atm();
}
else {
    console.log("Wrong userId or Password! Try again");
}
function Atm() {
    console.log("Select an action: \n    Press 1 for Account Balance\n    Press 2 for Withdraw\n    Press 3 for Deposit\n    Press 4 for Transfering funds : ");
    var choiceInput = promptSync();
    var choice = parseInt(choiceInput);
    switch (choice) {
        case 1:
            console.log("Your current balance is ".concat(balance));
            break;
        case 2:
            var withdrawAmountInput = promptSync('How much amount do you want to withdraw: ');
            var withdrawAmount = parseInt(withdrawAmountInput);
            if (withdrawAmount <= balance) {
                balance = balance - withdrawAmount;
                console.log("Withdraw Successfull! \n                            Remaining balance is ".concat(balance));
            }
            else {
                console.log("Withdraw failed! ".concat(withdrawAmount, " exceed you current balance"));
            }
            break;
        case 3:
            var depositInput = promptSync("Enter the amount you want to deposit: ");
            var deposit = parseInt(depositInput);
            balance = balance + deposit;
            console.log("Your amount has been deposit!\n            Your new balance is ".concat(balance));
            break;
        case 4:
            var transferInput = promptSync("Enter the amount you want to transfer: ");
            var transfer = parseInt(transferInput);
            if (transfer <= balance) {
                balance = balance - transfer;
                console.log("Transfered successful!\n                New balance is ".concat(balance));
            }
            break;
    }
}
