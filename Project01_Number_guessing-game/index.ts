const promptSync = require("prompt-sync")();

async function game() {
    let randomNumber: number = Math.floor(Math.random() * 10) + 1;

    let userChoice = promptSync("Enter your number: ");

    if (randomNumber === userChoice.num) {
        console.log(`Computer guessed number is ${randomNumber}`);
        console.log("Congrats! You win");
    } else {
        console.log(`Computer guessed number is ${randomNumber} while your's is ${userChoice}`)
        console.log("You lose");
    }
}

game();



