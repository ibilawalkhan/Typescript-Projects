#!/usr/bin/node env
const inquirer = require('inquirer');

const array: string[] = ["Gym", "Programming", "Netflix"];

const menu = inquirer.prompt([
    {
        type: 'list',
        name: 'menuChoice',
        message: 'Select an option',
        choices: [
            "Add a new task",
            "View all tasks",
            "Update a task",
            "Delete a task",
            "Exit the app",
        ],
    },
]).then((answers: any) => {
    const selectedOption = answers.menuChoice;
    switch (selectedOption) {
        case "Add a new task":
            addTask();
            break;

        case "View all tasks":
            showTasks();
            break;

        case "Update a task":
            update();
            break;

        case "Delete a task":
            Delete();
            break;

        case "Exit the app":
            return;
    }
});

function addTask() {
    inquirer.prompt({
        type: 'input',
        name: 'task',
        message: 'Enter the new task:',
    }).then((newTask: any) => {
        const task = newTask.task;
        array.push(task);
        console.log(`Your task is added ${task}`);
    });
}

function showTasks() {
    if (array.length > 0) {
        for (let i = 0; i < array.length; i++) {
            console.log(array[i]);
        }
    }
}

function update() {
    inquirer.prompt({
        type: 'number',
        name: 'updateInput',
        message: 'Enter the task number you want to update',
    }).then((updateChoiceInput: any) => {
        let updateInput = updateChoiceInput.updateInput - 1;

        inquirer.prompt({
            type: 'input',
            name: 'update',
            message: 'Enter the Updated task'
        }).then((updateChoice: any) => {
            let updated = updateChoice.update;
            array[updateInput] = updated;

            console.log(`Your task "${updated}" is updated`);
        });
    });
}

function Delete() {
    inquirer.prompt({
        type: 'number',
        name: 'deleteInput',
        message: 'Enter the task number you want to delete',
    }).then((deleteChoice: any) => {
        let deleteInput = deleteChoice.deleteInput - 1;

        if (deleteInput >= 0 && deleteInput < array.length) {
            array.splice(deleteInput, 1);
            console.log(`Task at index ${deleteInput + 1}, ${array[deleteInput]} has been deleted.`);
        } else {
            console.log('Invalid task number');
        }
    })
}
