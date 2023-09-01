class BankAccount implements IBankAccount {
    private AccountBalance: number = 0;

    constructor(initialBalance: number) {
        this.AccountBalance = initialBalance;
    }

    setAccountBalance(balance: number): void {
        this.AccountBalance = balance;
    }

    getAccountBalance(): number {
        return this.AccountBalance;
    }

    Debit(amount: number): string {
        let statement: string = "Transaction failed!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            if (this.AccountBalance >= amount) {
                this.AccountBalance -= amount;
                statement = `Transaction successful! New account balance is ${this.AccountBalance}`;
            } else {
                statement = "Sorry, you have insufficient balance";
            }
        }
        return statement;
    }

    Credit(amount: number): string {
        let statement: string = "Transaction failed!";
        if (amount > 0) {
            statement = "The amount you entered is wrong!";
            this.AccountBalance += amount;
            statement = "Your account has been credited successfully";
        }
        return statement;
    }
}
