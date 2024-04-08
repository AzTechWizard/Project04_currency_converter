import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
const answer = await inquirer.prompt([
    {
        message: "Enter from currency",
        name: "from",
        type:"list",
        choices:['USD','EUR','GBP','INR','PKR']
    },
    {
        message: "Enter to currency",
        name: "to",
        type:"list",
        choices:['USD','EUR','GBP','INR','PKR']
    },
    {
        message: "Enter your amount",
        name: "amount",
        type: "number"
    }
]);
console.log(answer);
if (answer.from == "USD" && answer.to == "EUR") {
    let total = (answer.amount * currency.EUR)/currency.USD;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "USD" && answer.to == "GBP"){
    let total = answer.amount * currency.GBP;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "USD" && answer.to == "INR"){
    let total = answer.amount * currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "USD" && answer.to == "PKR"){
    let total = answer.amount * currency.PKR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}


if (answer.from == "EUR" && answer.to == "USD") {
    let total = (answer.amount * currency.USD)/currency.EUR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "EUR" && answer.to == "GBP"){
    let total = (answer.amount * currency.GBP)/currency.EUR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "EUR" && answer.to == "INR"){
    let total = (answer.amount * currency.INR)/currency.EUR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "EUR" && answer.to == "PKR"){
    let total = (answer.amount * currency.PKR)/currency.EUR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}


if (answer.from == "GBP" && answer.to == "EUR") {
    let total = (answer.amount * currency.EUR)/currency.GBP;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "GBP" && answer.to == "USD"){
    let total = (answer.amount * currency.USD)/currency.GBP;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "GBP" && answer.to == "INR"){
    let total = (answer.amount * currency.INR)/currency.GBP;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "GBP" && answer.to == "PKR"){
    let total = (answer.amount * currency.PKR)/currency.GBP;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}


if (answer.from == "INR" && answer.to == "EUR") {
    let total = (answer.amount * currency.EUR)/currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "INR" && answer.to == "GBP"){
    let total = (answer.amount * currency.GBP)/currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "INR" && answer.to == "USD"){
    let total = (answer.amount * currency.USD)/currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "INR" && answer.to == "PKR"){
    let total = (answer.amount * currency.PKR)/currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}


if (answer.from == "PKR" && answer.to == "EUR") {
    let total = (answer.amount * currency.EUR)/currency.PKR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "PKR" && answer.to == "GBP"){
    let total = (answer.amount * currency.GBP)/currency.PKR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "PKR" && answer.to == "INR"){
    let total = (answer.amount * currency.INR)/currency.PKR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
else if(answer.from == "PKR" && answer.to == "USD"){
    let total = (answer.amount * currency.USD)/currency.INR;
    console.log(`The coversion from ${answer.amount} ${answer.from} to ${answer.to} is ${total}`);
}
