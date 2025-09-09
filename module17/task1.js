const readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Enter your balance: ', (balance) => {
	rl.question('Enter the price of fruits: ', (fruits_price) => {
		const remaining = Number(balance) - Number(fruits_price);
		console.log('You have ' + remaining + 'tk remaining.');
		rl.close();
	});
});

// Web version where prompt() is available!

var balance = prompt("Enter your balance: ");
var fruits_price = prompt("Enter the price of fruits: ");

var remaining = Number(balance) - Number(fruits_price);
console.log("You have " + remaining + "tk remaining.");
