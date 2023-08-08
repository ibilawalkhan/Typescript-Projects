import inquirer from "inquirer";

interface Operation {
    name: string;
    value: string;
}

const operations: Operation[] = [
    { name: 'Addition (+)', value: 'add' },
    { name: 'Subtraction (-)', value: 'subtract' },
    { name: 'Multiplication (*)', value: 'multiply' },
    { name: 'Division (/)', value: 'divide' },
];

async function performCalculation(operator: string, num1: number, num2: number): Promise<number | undefined> {
    switch (operator) {
        case 'add':
            return num1 + num2;
        case 'subtract' :
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
    const operationChoice = await inquirer.prompt({
        type: 'list',
        name: 'operation',
        message: 'Select an operation',
        choices: operations,
    });

    const firstNumber = await inquirer.prompt({
        type: 'number',
        name: 'num1',
        message: 'Enter the first number',
    });

    const SecondNumber = await inquirer.prompt({
        type: 'number',
        name: 'num2',
        message: 'Enter the second number',
    });

    const result = await performCalculation(operationChoice.operation, firstNumber.num1, SecondNumber.num2);

    if (result !== undefined) {
        console.log(`Result: ${result}`);
    }
}

main();
