#!/usr/bin/node env
import Person from "./Person";
import Student from "./Student";

const input = require('prompt-sync')();

class Program {
    main() {
        try {
            const choice = parseInt(input('Type 1 to talk to others and type 2 if you would rather keep to yourself: '))

            const person = new Person()
            person.AskQuestion(choice)
            console.log(`Your are: ${person.GetPersonality()}`)

            const name = input("What is your name: ")
            const student = new Student()
            student.setName(name)
            console.log(`Your name is: ${student.getName()} and your personality type is: ${student.GetPersonality()}`);
        } catch (error) {
            console.log(error);
        }
    }
}

const program = new Program()
program.main()