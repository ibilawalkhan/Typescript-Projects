var inquirer = require('inquirer');
inquirer.prompt({
    type: 'input',
    name: 'dollarsInput',
    message: 'Enter the amount in dollars'
}).then(function (dollars) {
    var dollar = parseFloat(dollars.dollarsInput);
    inquirer.prompt({
        type: 'list',
        name: 'conversionChoice',
        message: 'In which currency do you want to convert it',
        choices: ['Pkr', 'Euros', 'AU']
    }).then(function (conversion) {
        var choice = conversion.conversionChoice;
        var converted;
        switch (choice) {
            case 'Pkr':
                converted = dollar * 285;
                console.log("Converted amount: ".concat(converted, " Pkr"));
                break;
            case 'Euros':
                converted = dollar * 0.85;
                console.log("Converted amount: ".concat(converted, " Euros"));
                break;
            case 'AU':
                converted = dollar * 1.33;
                console.log("Converted amount: ".concat(converted, " Australian Dollars"));
                break;
            default:
                console.log('Invalid currency choice');
        }
    });
});
