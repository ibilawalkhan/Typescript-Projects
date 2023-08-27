const myInput = require('prompt-sync')()

class Game {
    main() {

        // Game variables
        let enemies: string[] = ["Skeleton", "Zombie", "Warrior", "Assassin"]
        let maxEnemyHealth: number = 75
        let enemyAttackDamage: number = 25

        // Health variables
        let health: number = 100
        let attackDamage: number = 50
        let numHealthPotions: number = 3
        let healthPotionHealAmount: number = 30
        let healthPotionDropChance: number = 50
        let running: boolean = true

        let input: string

        console.log("Welcome to the Dungeon")

        GAME:
        while (running) {
            console.log("--------------------------------------------------")

            let enemyHealth: number = Math.floor(Math.random() * maxEnemyHealth);
            let enemy: string = enemies[Math.floor(Math.random() * enemies.length)]
            console.log(`\t# ${enemy} has separated! #\n`)

            while (enemyHealth > 0) {
                console.log(`\tYour HP: ` + health)
                console.log(`\t${enemy}'s HP: ${enemyHealth}`)
                console.log(`\t\nWhat would you like to do?`)
                console.log(`\t1. Attack`)
                console.log(`\t2. Drink health potion`)
                console.log(`\t3. Run`)

                input = myInput()

                if (input == "1") {
                    let damageDealt: number = Math.floor(Math.random() * attackDamage)
                    let damageTaken: number = Math.floor(Math.random() * enemyAttackDamage)

                    enemyHealth -= damageDealt
                    health -= damageTaken

                    console.log(`\t> You strike the ${enemy} for ${damageDealt} damage`)
                    console.log(`\t> You recieve ${damageTaken} in retaliation`)
                } else if (input == "2") {
                    if (numHealthPotions > 0) {
                        health += healthPotionHealAmount
                        numHealthPotions--
                        console.log(`\t> You drink a health potion, healing yourself for ${healthPotionHealAmount}`)
                        console.log(`\n\t You now have ${health} HP`)
                        console.log(`\n\t You have ${numHealthPotions} health potions left.\n`)
                    } else {
                        console.log(`\t You have no health potions left! Defeat enemies for a chance to get one!`)
                    }
                } else if (input == "3") {
                    console.log(`\tYou run away from the ${enemy}!`)
                    continue GAME
                } else {
                    console.log('\tInvalid command')
                }
            }

            if (health <= 0) {
                console.log(`You limp out of the dungeon, weak from battle`)
                break
            }

            console.log(`-------------------------------------------------------------------------------------------`)
            console.log(` # ${enemy} was defeated! #`)
            console.log(` # You have ${health} HP left. #`)
            if (Math.floor(Math.random() * 100) < healthPotionDropChance) {
                numHealthPotions++
                console.log(` # The ${enemy} dropped a health potion! #`)
                console.log(` # You now have ${numHealthPotions} health potion(s). #`)
            }
            console.log(`--------------------------------------------------------------------------------------------`)
            console.log(`What would you like to do now?`)
            console.log(`1. Continue fighting`)
            console.log(`2. Exit dungeon`)

            input = myInput()

            while (input !== "1" && input !== "2") {
                console.log("Invalid Command!")
                input = myInput()
            }

            if (input == "1") {
                console.log(`You continue on your adventure!`)
            } else if (input == "2") {
                console.log(`You exit the dungeon, successful from your adventure`)
                break
            }
        }
        console.log("\t######################################")
        console.log("\t\tTHANKS FOR PLAYING")
        console.log("\t######################################")
    }
}

let call = new Game()
call.main()