let myScore = 80;
let friendScore = 85;

if (myScore >= 80) {
    if (friendScore >= 80) {
        console.log("You should go for lunch with your friend ;)");
    }
    else if (friendScore >= 60 && friendScore < 80) {
        console.log("You should say good luck next time :)");
    }
    else if (friendScore >= 40 && friendScore < 60) {
        console.log("You should keep his message unseen :|");
    }
    else {
        console.log("You should just block him -_-");
    }
}
else {
    console.log("Go home, sleep and be sad :(");
}