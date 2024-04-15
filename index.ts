import inquirer from "inquirer";

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
    message: "Enter From Currency",
    choices: ["USD", "EUR", "GBP", "CHF", "JPY", "KWD", "SAR", "INR", "PKR"],
  },
]);
