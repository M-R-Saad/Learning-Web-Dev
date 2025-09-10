function randomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1)) + from;
}

console.log(randomNumber(10, 20));