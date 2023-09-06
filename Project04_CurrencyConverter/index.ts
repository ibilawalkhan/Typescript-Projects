#!/usr/bin/node env
const inquirer = require('inquirer');

function convertCurrency() {
    inquirer.prompt({
        type: 'input',
        name: 'dollarsInput',
        message: 'Enter the amount in dollars (or type "exit" to quit):'
    }).then((dollars: any) => {
        const dollarInput = dollars.dollarsInput.trim().toLowerCase();

        if (dollarInput === 'exit') {
            console.log('Goodbye!');
            return;
        }

        const dollar = parseFloat(dollarInput);

        if (isNaN(dollar)) {
            console.log('Invalid input. Please enter a valid number or "exit" to quit.');
            convertCurrency(); // Restart the loop
            return;
        }

        inquirer.prompt({
            type: 'list',
            name: 'conversionChoice',
            message: 'In which currency do you want to convert it',
            choices: ['Pkr', 'Euros', 'AU']
        }).then((conversion: any) => {
            const choice = conversion.conversionChoice;

            let converted;
            switch (choice) {
                case 'Pkr':
                    converted = dollar * 307;
                    console.log(`Converted amount: ${converted} Pkr`);
                    break;

                case 'Euros':
                    converted = dollar * 0.85;
                    console.log(`Converted amount: ${converted} Euros`);
                    break;

                case 'AU':
                    converted = dollar * 1.33;
                    console.log(`Converted amount: ${converted} Australian Dollars`);
                    break;

                default:
                    console.log('Invalid currency choice');
            }

            // Restart the loop
            convertCurrency();
        });
    });
}

// Start the currency conversion loop
convertCurrency();
