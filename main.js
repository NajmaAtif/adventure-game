#! /usr/bin/env node
// Games Variable
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamageToHero = 25;
// Player Variable
let heroHealth = 100;
let attackDamageToEnemy = 50;
let numHealthPotion = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
// while loop condition
let gameRunning = true;
console.log("Welcome to DeadZone!");
Game: while (gameRunning) {
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth + 1);
    let enemyIndex = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemyIndex];
    console.log(`# ${enemy} has appeared #\n`);
}
export {};
// // classes player & opponent
// class Player{
//     name:string;
//     fuel: number = 100;
//     constructor(name:string){
//         this.name=name;
//     }
// }
// class Opponent {
//     name:string;
//     fuel: number = 100; 
//     constructor(name:string){
//         this.name=name
//     }
// }
// // Player name & opponent select
// let player = await inquirer.prompt({
//     type:"input",
//     name:"name",
//     message: "Please Enter Your Name:"
// })
// let opponent = await inquirer.prompt({
//     type:"list",
//     name:"select",
//     message:"Select Your Opponent:",
//     choices:["Skeleton","Assassin","Zombie"]
// })
// // Gather Data
// let p1 = new Player(player.name)
// let o1 = new Opponent(opponent.select)
// if(opponent.select == "Skeleton"){
//     console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`)
//     let ask = await inquirer.prompt({
//         type:"list",
//         name:"opt",
//     message:"Select Your Opponent:",
//     choices: ["Attack", "Drink Portion", "Run For Your Life.."],
//     });
//     if()
// }
