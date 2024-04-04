#! /usr/bin/env node
import inquirer from "inquirer";

// computer will generate a random number
// user input for guessing number
// compare user input with computer generator number & show result

const randomnumber = Math.floor(Math.random() * 6 + 1);

console.log("Welcome to number Guessing Game");

console.log(randomnumber);

//const answers = await inquirer.prompt([
//{
//    name: "userGuessedNumber",
//    type: "number",
//    message: "Please guess a number between 1-6:",
//},
//]);
//
//if (answers.userGuessedNumber === randomnumber)
//{   console.log("Congratulations! you guessed write number.");
//}
//else {console.log ("You guessed wrong number.");
//}

