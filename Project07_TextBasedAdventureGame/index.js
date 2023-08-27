var myInput = require('prompt-sync')();
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.main = function () {
        // Game variables
        var enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
        var maxEnemyHealth = 75;
        var enemyAttackDamage = 25;
        // Health variables
        var health = 100;
        var attackDamage = 50;
        var numHealthPotions = 3;
        var healthPotionHealAmount = 30;
        var healthPotionDropChance = 50;
        var running = true;
        var input;
        console.log("Welcome to the Dungeon");
        GAME: while (running) {
            console.log("--------------------------------------------------");
            var enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
            var enemy = enemies[Math.floor(Math.random() * enemies.length)];
            console.log("\t# ".concat(enemy, " has separated! #\n"));
            while (enemyHealth > 0) {
                console.log("\tYour HP: " + health);
                console.log("\t".concat(enemy, "'s HP: ").concat(enemyHealth));
                console.log("\t\nWhat would you like to do?");
                console.log("\t1. Attack");
                console.log("\t2. Drink health potion");
                console.log("\t3. Run");
                input = myInput();
                if (input == "1") {
                    var damageDealt = Math.floor(Math.random() * attackDamage);
                    var damageTaken = Math.floor(Math.random() * enemyAttackDamage);
                    enemyHealth -= damageDealt;
                    health -= damageTaken;
                    console.log("\t> You strike the ".concat(enemy, " for ").concat(damageDealt, " damage"));
                    console.log("\t> You recieve ".concat(damageTaken, " in retaliation"));
                }
                else if (input == "2") {
                    if (numHealthPotions > 0) {
                        health += healthPotionHealAmount;
                        numHealthPotions--;
                        console.log("\t> You drink a health potion, healing yourself for ".concat(healthPotionHealAmount));
                        console.log("\n\t You now have ".concat(health, " HP"));
                        console.log("\n\t You have ".concat(numHealthPotions, " health potions left.\n"));
                    }
                    else {
                        console.log("\t You have no health potions left! Defeat enemies for a chance to get one!");
                    }
                }
                else if (input == "3") {
                    console.log("\tYou run away from the ".concat(enemy, "!"));
                    continue GAME;
                }
                else {
                    console.log('\tInvalid command');
                }
            }
            if (health <= 0) {
                console.log("You limp out of the dungeon, weak from battle");
                break;
            }
            console.log("-------------------------------------------------------------------------------------------");
            console.log(" # ".concat(enemy, " was defeated! #"));
            console.log(" # You have ".concat(health, " HP left. #"));
            if (Math.floor(Math.random() * 100) < healthPotionDropChance) {
                numHealthPotions++;
                console.log(" # The ".concat(enemy, " dropped a health potion! #"));
                console.log(" # You now have ".concat(numHealthPotions, " health potion(s). #"));
            }
            console.log("--------------------------------------------------------------------------------------------");
            console.log("What would you like to do now?");
            console.log("1. Continue fighting");
            console.log("2. Exit dungeon");
            input = myInput();
            while (input !== "1" && input !== "2") {
                console.log("Invalid Command!");
                input = myInput();
            }
            if (input == "1") {
                console.log("You continue on your adventure!");
            }
            else if (input == "2") {
                console.log("You exit the dungeon, successful from your adventure");
                break;
            }
        }
        console.log("\t###########################");
        console.log("\t\tTHANKS FOR PLAYING");
        console.log("\t###########################");
    };
    return Game;
}());
var call = new Game();
call.main();
