"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    constructor(initialBalance) {
        this.AccountBalance = 0;
        this.AccountBalance = initialBalance;
    }
    setAccountBalance(balance) {
        this.AccountBalance = balance;
    }
    getAccountBalance() {
        return this.AccountBalance;
    }
    Debit(amount) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.AccountBalance >= amount) {
                this.AccountBalance -= amount;
                statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
            }
            else {
                statement = "Sorry, you have insufficient balance";
            }
        }
        return statement;
    }
    Credit(amount) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            this.AccountBalance += amount;
            statement = "Your account has been credited successfully";
        }
        return statement;
    }
}
exports.default = BankAccount;
