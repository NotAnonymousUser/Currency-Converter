#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const currencyRates = {
    USD: 1,
    EUR: 0.94,
    GBP: 0.8,
    CHF: 0.91,
    JPY: 153,
    KWD: 0.31,
    SAR: 3.75,
    INR: 83,
    PKR: 277,
};
const userInput = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: chalk.blue("Enter From Currency"),
        choices: ["USD", "EUR", "GBP", "CHF", "JPY", "KWD", "SAR", "INR", "PKR"],
    },
    {
        name: "to",
        type: "list",
        message: chalk.blue("Enter To Currency"),
        choices: ["USD", "EUR", "GBP", "CHF", "JPY", "KWD", "SAR", "INR", "PKR"],
    },
    {
        name: "amount",
        type: "number",
        message: chalk.yellow("Enter The Amount You Want To Convert"),
    },
]);
const fromAmount = currencyRates[userInput.from];
const toAmount = currencyRates[userInput.to];
const amount = userInput.amount;
let baseAmount = amount / fromAmount;
const convertedAmount = baseAmount * toAmount;
console.log(chalk.green(`${amount} ${userInput.from} is equal to ${convertedAmount} ${userInput.to}`));
