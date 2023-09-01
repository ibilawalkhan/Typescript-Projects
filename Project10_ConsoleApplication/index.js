"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = __importDefault(require("./Person"));
const Student_1 = __importDefault(require("./Student"));
const input = require('prompt-sync')();
class Program {
    main() {
        try {
            const choice = parseInt(input('Type 1 to talk to others and type 2 if you would rather keep to yourself: '));
            const person = new Person_1.default();
            person.AskQuestion(choice);
            console.log(`Your are: ${person.GetPersonality()}`);
            const name = input("What is your name: ");
            const student = new Student_1.default();
            student.setName(name);
            console.log(`Your name is: ${student.getName()} and your personality type is: ${student.GetPersonality()}`);
        }
        catch (error) {
            console.log(error);
        }
    }
}
const program = new Program();
program.main();
