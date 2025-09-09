let num1 = 10;
let num2 = 20;

let result;

if (num1 > num2) {
    result = num1 * 2;
}
else {
    result = num1 + num2;
}

console.log(result);

// This is the ternary operator version of the above code!

result = (num1 > num2) ? (num1 * 2) : (num1 + num2);
console.log(result);