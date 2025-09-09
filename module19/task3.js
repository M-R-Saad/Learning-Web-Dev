let sum1 = 0;

for(let i = 81; i <= 131; i++) {
    if(i % 2 != 0) {
        sum1 += i;
    }
}

console.log("Sum of odd numbers between 81 and 131 is: " + sum1);

let sum2 = 0;

for(let i = 206; i <= 311; i++) {
    if(i % 2 == 0) {
        sum2 += i;
    }
}

console.log("Sum of even numbers between 206 and 311 is: " + sum2);
