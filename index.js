#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// For Player 
var Player = /** @class */ (function () {
    function Player(name) {
        this.health = 100;
        this.name = name;
    }
    Player.prototype.decreaseHealth = function () {
        var health = this.health - 20;
        this.health = health;
    };
    Player.prototype.increaseHealth = function () {
        this.health = 100;
    };
    return Player;
}());
// For enemy
var Enemy = /** @class */ (function () {
    function Enemy(name) {
        this.health = 100;
        this.name = name;
    }
    Enemy.prototype.decreaseHealth = function () {
        var health = this.health - 20;
        this.health = health;
    };
    return Enemy;
}());
// Player Object
var player = await inquirer_1.default.prompt([
    {
        name: "name",
        type: "input",
        message: "Enter Player Name:"
    }
]);
// Enemy Object
var enemy = await inquirer_1.default.prompt([
    {
        name: "select",
        type: "list",
        message: "Select the Enemy you fight with:",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]);
var player1 = new Player(player.name);
var enemy1 = new Enemy(enemy.select);
console.log("".concat(player.name, " v/s ").concat(enemy.select));
do {
    // For Skeleton
    if (enemy.select == "Skeleton") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log("Drink Portion Your Health is ".concat(player1.health));
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
    // For Alien
    if (enemy.select == "Alien") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log("Drink Portion Your Health is ".concat(player1.health));
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
    // For Zombie
    if (enemy.select == "Zombie") {
        var ask = await inquirer_1.default.prompt([
            {
                name: "Opt",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Drink Portion", "Run.."]
            }
        ]);
        if (ask.Opt == "Attack") {
            var num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (player1.health <= 0) {
                    console.log("You Loose! Better Luck Next Time");
                    process.exit();
                }
            }
            if (num <= 0) {
                enemy1.decreaseHealth();
                console.log("".concat(player1.name, " Health is: ").concat(player1.health));
                console.log("".concat(enemy1.name, " Health is: ").concat(enemy1.health));
                if (enemy1.health <= 0) {
                    console.log("Congratulation! You Win");
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            player1.increaseHealth();
            console.log("Drink Portion Your Health is ".concat(player1.health));
        }
        if (ask.Opt == "Run..") {
            console.log("You Loose! Better Luck Next Time");
            process.exit();
        }
    }
} while (true);
