"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor() {
        this.firstName = "";
        this.lastName = "";
        this.gender = "";
        this.age = 0;
        this.mobileNumber = "";
    }
    customerInfo() {
        return `
            Name: ${this.firstName} ${this.lastName}
            Age: ${this.age}            
            Gender: ${this.gender}
            Mobile: ${this.mobileNumber}
            Account Balance: ${this.bankAccount.getAccountBalance()}
        `;
    }
}
exports.default = Customer;
