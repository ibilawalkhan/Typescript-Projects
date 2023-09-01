class Customer {
    firstName: string = "";
    lastName: string = "";
    gender: string = "";
    age: number = 0;
    mobileNumber: string = "";
    bankAccount!: BankAccount;

    customerInfo(): string {
        return `
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}            
            Gender: ${this.gender}
            Mobile: ${this.mobileNumber}
            Account Balance: ${this.bankAccount.getAccountBalance()}
        `;
    }
}
