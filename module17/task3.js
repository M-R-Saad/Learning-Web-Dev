const readline = require('readline');
const rl  = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter the number: ", (number) => {
    const remainder = number % 5;
    console.log(remainder);
    rl.close();
})

// Web version where prompt() is available!

var number = prompt("Enter the number: ");
var remainder = number % 5;
console.log(remainder);