const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter marks for subject 1: ", (subject1) => {
    rl.question("Enter marks for subject 2: ", (subject2) => {
        rl.question("Enter marks for subject 3: ", (subject3) => {
            rl.question("Enter marks for subject 4: ", (subject4) => {
                rl.question("Enter marks for subject 5: ", (subject5) => {
                    const total = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3) + parseFloat(subject4) + parseFloat(subject5);
                    const average = (total / 5).toFixed(2);
                    console.log("Your average mark is: " + average);
                    rl.close();
                });
            });
        });
    });
});

// Web version where prompt() is available!

var subject1 = prompt("Enter marks for subject 1: ");
var subject2 = prompt("Enter marks for subject 2: ");
var subject3 = prompt("Enter marks for subject 3: ");
var subject4 = prompt("Enter marks for subject 4: ");
var subject5 = prompt("Enter marks for subject 5: ");

var total = parseFloat(subject1) + parseFloat(subject2) + parseFloat(subject3) + parseFloat(subject4) + parseFloat(subject5);
var average = (total / 5).toFixed(2);
console.log("Your average mark is: " + average);