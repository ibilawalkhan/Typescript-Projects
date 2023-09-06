"use strict";
const promptSync = require("prompt-sync")();
function playGame() {
    let playAgain = true;
    while (playAgain) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        let userChoice = parseInt(promptSync("Guess the number: "));
        if (randomNumber === userChoice) {
            console.log(`Computer guessed number is ${randomNumber}`);
            console.log("Congrats! You win");
        }
        else {
            console.log(`Computer guessed number is ${randomNumber} while yours is ${userChoice}`);
            console.log("You lose");
        }
        const playAgainResponse = promptSync("Do you want to play again? (yes/no): ");
        playAgain = playAgainResponse.toLowerCase() === "yes";
    }
}
playGame();
