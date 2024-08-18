import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 0;
const pin = 1234;
let iscontinue = true;
console.log("welcome to ATM");
let pin_answer = await inquirer.prompt({
    type: "input",
    name: "pincode",
    message: chalk.green `Please enter your pincode `,
});
if (pin_answer.pincode === "1234") {
    console.log(chalk.green `pin is correct`);
    do {
        let answer = await inquirer.prompt({
            name: "list",
            type: "list",
            message: "selecte any option from the list",
            choices: ["deposite", "withdraw", "fastcash", "checkbalance",]
        });
        //----------------------- deposite --------------------
        if (answer.list === "deposite") {
            let answer = await inquirer.prompt({
                name: "deposite_amount",
                type: "number",
                message: "enter the amount",
            });
            if (answer.deposite_amount > 0) {
                myBalance = answer.deposite_amount + myBalance;
                console.log(chalk.green `${answer.deposite_amount} has been deposited successfully`);
                console.log(chalk.green `your current balance is ${myBalance}`);
            }
        }
        //_------------------------withdraw------------------------
        else if (answer.list === "withdraw") {
            let answer = await inquirer.prompt({
                name: "withdraw_amount",
                type: "number",
                message: "please enter the amount",
            });
            if (answer.withdraw_amount <= myBalance) {
                myBalance = myBalance - answer.withdraw_amount;
                console.log(chalk.green `${answer.withdraw_amount} has been withdrawn successfully`);
                console.log(chalk.green `your current balance is ${myBalance}`);
            }
            else {
                console.log(chalk.red `insufficient balance`);
            }
        }
        //------------------- fast cash --------------------------------
        else if (answer.list === "fastcash") {
            let answer = await inquirer.prompt({
                name: "fastcash",
                type: "list",
                message: "please select a cash amount",
                choices: ["500", "1000", "2000", "5000"],
            });
            if (answer.fastcash <= myBalance) {
                if (answer.fastcash == "500") {
                    myBalance = myBalance - answer.fastcash;
                    console.log(chalk.green `${answer.fastcash} withdraw successfully from your account`);
                    console.log(chalk.green `your current balance is ${myBalance}`);
                }
                else if (answer.fastcash == "1000") {
                    myBalance = myBalance - answer.fastcash;
                    console.log(chalk.green `${answer.fastcash} withdraw successfully from your account`);
                    console.log(chalk.green `your current balance is ${myBalance}`);
                }
                else if (answer.fastcash == "2000") {
                    myBalance = myBalance - answer.fastcash;
                    console.log(chalk.green `${answer.fastcash} withdraw successfully from your account`);
                    console.log(chalk.green `your current balance is ${myBalance}`);
                }
                else if (answer.fastcash == "5000") {
                    myBalance = myBalance - answer.fastcash;
                    console.log(chalk.green `${answer.fastcash} withdraw successfully from your account`);
                    console.log(chalk.green `your current balance is ${myBalance}`);
                }
            }
            else
                (console.log(chalk.green `insufficient balance`));
        }
        //------------------------- check my balance --------------------
        else if (answer.list == "checkbalance") {
            console.log(chalk.green `your balance is ${myBalance}`);
        }
        // ------------------------- while condition --------------------
        let while_answer = await inquirer.prompt({
            name: "condition",
            type: "confirm",
            message: "do you want to continue",
        });
        if (while_answer.condition === false) {
            iscontinue = false;
        }
    } while (iscontinue);
}
else
    (console.log(chalk.red `invailed pincode`));
