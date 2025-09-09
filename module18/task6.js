let age = 25;
let isStudent = false;
let ticketPrice = 800;

if (isStudent) {
    ticketPrice = ticketPrice - (ticketPrice * 0.5);
    console.log("Your ticket price is: " + ticketPrice + "tk. (50% discount for students)");
}
else {
    if (age < 10) {
        ticketPrice = 0;
        console.log("Your ticket price is: " + ticketPrice + "tk. (Free for children under 10)");
    }
    else if (age >= 10 && age < 60) {
        console.log("Your ticket price is: " + ticketPrice + "tk. (No discount for regular citizens!)");
    }
    else {
        ticketPrice = ticketPrice - (ticketPrice * 0.15);
        console.log("Your ticket price is: " + ticketPrice + "tk. (15% discount for senior citizens)");
    }
}

console.log("Enjoy your journey!");
