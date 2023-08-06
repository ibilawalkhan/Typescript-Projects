const promptSync = require("prompt-sync")();

console.log("Welcome to ATM");

// Hardcoded values
const Id: number = 12345;
const pass: number = 54321;
let balance: number = 10000;

// Take userId and password as input
const userIdInput: string = promptSync("Enter your UserID: ");
const passwordInput: string = promptSync("Enter your Password: ");
const userId: number = parseInt(userIdInput);
const password: number = parseInt(passwordInput);

// Check if the inputs are correct or not
if (userId === Id && password === pass) {
    console.log("Login Successfully!");
    Atm(); // call atm functionalities
} else {
    console.log("Wrong userId or Password! Try again");
}

function Atm() {
    console.log(`Select an action: 
    Press 1 for Account Balance
    Press 2 for Withdraw
    Press 3 for Deposit
    Press 4 for Transfering funds : `);

    const choiceInput: string = promptSync();

    const choice: number = parseInt(choiceInput);

    switch (choice) {
        case 1:
            console.log(`Your current balance is ${balance}`);
            break;
        case 2:
            const withdrawAmountInput: string = promptSync('How much amount do you want to withdraw: ');
            const withdrawAmount: number = parseInt(withdrawAmountInput);

            if (withdrawAmount <= balance) {
                balance = balance - withdrawAmount;
                console.log(`Withdraw Successfull! 
                            Remaining balance is ${balance}`);
            } else {
                console.log(`Withdraw failed! ${withdrawAmount} exceed you current balance`);
            }
            break;
        case 3:
            const depositInput: string = promptSync(`Enter the amount you want to deposit: `);
            const deposit: number = parseInt(depositInput);
            balance = balance + deposit;
            console.log(`Your amount has been deposit!
            Your new balance is ${balance}`);
            break;
        case 4:
            const transferInput: string = promptSync("Enter the amount you want to transfer: ");
            const transfer: number = parseInt(transferInput);

            if (transfer <= balance) {
                balance = balance - transfer;
                console.log(`Transfered successful!
                New balance is ${balance}`);
            }
            break;
    }
}