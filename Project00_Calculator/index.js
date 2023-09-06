"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function performCalculation(operator, num1, num2) {
    return __awaiter(this, void 0, void 0, function* () {
        switch (operator) {
            case 'add':
                return num1 + num2;
            case 'subtract':
                return num1 - num2;
            case 'multiply':
                return num1 * num2;
            case 'divide':
                return num1 / num2;
            default:
                console.log('Invalid operator');
                return undefined;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const questions = [
            {
                type: 'number',
                name: 'num1',
                message: 'Enter the first number:',
            },
            {
                type: 'number',
                name: 'num2',
                message: 'Enter the second number:',
            },
            {
                type: 'list',
                name: 'operator',
                message: 'Select an operation:',
                choices: ['add', 'subtract', 'multiply', 'divide'],
            },
        ];
        const answers = yield inquirer_1.default.prompt(questions);
        const result = yield performCalculation(answers.operator, answers.num1, answers.num2);
        if (result !== undefined) {
            console.log(`Result: ${result}`);
        }
    });
}
main();
