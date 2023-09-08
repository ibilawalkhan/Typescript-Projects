"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Customer_1 = __importDefault(require("./Customer"));
const BankAccount_1 = __importDefault(require("./BankAccount"));
// Create a BankAccount instance with an initial balance of 1000
const bankAccount = new BankAccount_1.default(1000);
// Create a Customer instance and set its properties
const customer = new Customer_1.default();
customer.firstName = 'John';
customer.lastName = 'Doe';
customer.gender = 'Male';
customer.age = 30;
customer.mobileNumber = '123-456-7890';
// Assign the BankAccount instance to the customer
customer.bankAccount = bankAccount;
// Call the customerInfo() method to get customer information
const customerInfo = customer.customerInfo();
console.log(customerInfo);
// Perform Debit and Credit operations on the bank account
const debitResult = bankAccount.Debit(500);
const creditResult = bankAccount.Credit(200);
console.log(debitResult);
console.log(creditResult);
