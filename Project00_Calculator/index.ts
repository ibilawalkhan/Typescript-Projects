#!/usr/bin/node env
import inquirer from 'inquirer';

async function performCalculation(operator: string, num1: number, num2: number): Promise<number | undefined> {
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
}

async function main() {
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

    const answers = await inquirer.prompt(questions);

    const result = await performCalculation(answers.operator, answers.num1, answers.num2);

    if (result !== undefined) {
        console.log(`Result: ${result}`);
    }
}

main();
