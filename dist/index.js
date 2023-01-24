// Project currency convertor 
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
console.clear();
figlet("** Currency Convertor **", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.red.bgGreen(data));
});
setTimeout(async () => {
    console.log("");
    let conversion = {
        PKR: {
            USD: 0.0044,
            GBP: 0.0037,
            AED: 0.016,
            QR: 0.016,
            SR: 0.017,
            PKR: 1,
        },
        USD: {
            PKR: 226.91,
            GBP: 0.83,
            AED: 3.67,
            QR: 3.64,
            SR: 3.76,
            USD: 1,
        },
        GBP: {
            PKR: 273.32,
            USD: 1.2,
            AED: 4.42,
            QR: 4.39,
            SR: 4.53,
            GBP: 1,
        },
        AED: {
            PKR: 61.78,
            GBP: 0.23,
            USD: 0.27,
            QR: 0.99,
            SR: 1.02,
            AED: 1,
        },
        SR: {
            PKR: 60.36,
            GBP: 0.22,
            AED: 0.98,
            QR: 0.97,
            USD: 0.27,
            SR: 1,
        },
        QR: {
            PKR: 62.32,
            GBP: 0.23,
            AED: 1.01,
            USD: 0.27,
            SR: 1.03,
            QR: 1,
        },
    };
    let answer = await inquirer.prompt([
        {
            message: "Please select your First Currency which is to be convert",
            name: "from",
            type: "list",
            choices: ["PKR", "USD", "GBP", "AED", "SR", "QR"],
            default: 0,
        },
        {
            message: "Enter your Desired amount",
            name: "amount",
            type: "number",
        },
        {
            message: "Please select your desire currency in which you have to convert or Second Currency",
            name: "to",
            type: "list",
            choices: ["PKR", "USD", "GBP", "AED", "SR", "QR"],
            default: 0,
        },
    ]);
    let { from, amount, to } = answer;
    if (from && to && amount) {
        let result = conversion[from][to] * amount;
        console.log(chalk.bgGreen.red.bold(`\n\t ${answer.amount} ${from} = ${result} ${to} \n`));
    }
    else {
        console.log(`Please enter the valid Input`);
    }
}, 2000);
