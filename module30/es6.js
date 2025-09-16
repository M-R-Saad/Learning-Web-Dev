// Do not use var, instead use let or const
let name = "John Doe";
const age = 30;

// Use template literals for string interpolation
let greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Use arrow functions for concise function expressions
const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);

// Different variation of arrow function
const square = x => x * x;
console.log(`The square of 4 is ${square(4)}.`);

// Arrow function with no parameters
const getCurrentYear = () => new Date().getFullYear();
console.log(`The current year is ${getCurrentYear()}.`);

// Arrow function with multiple statements
const factorial = n => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
};
console.log(`The factorial of 5 is ${factorial(5)}.`);

// Spread operator to copy arrays
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log('Copied Array:', copiedArray);

// Object/Array destructuring
const person = { 
    firstName: "Jane", 
    lastName: "Doe" 
};
const { firstName, lastName } = person;
console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

const numbers = [10, 20, 30];
const [first, second, third] = numbers;
console.log(`First: ${first}, Second: ${second}, Third: ${third}`);

// Function with default parameters
const multiply = (a, b = 2) => a * b;
console.log(`5 multiplied by default 2 is ${multiply(5)}.`);
console.log(`5 multiplied by 3 is ${multiply(5, 3)}.`);

// Object methods: keys, values, entries, seal, freeze, delete
const obj = { 
    a: 1, 
    b: 2, 
    c: 3 
};
console.log('Object Keys:', Object.keys(obj));
console.log('Object Values:', Object.values(obj));
console.log('Object Entries:', Object.entries(obj));
Object.seal(obj);
console.log('Is object sealed?', Object.isSealed(obj));
Object.freeze(obj);
console.log('Is object frozen?', Object.isFrozen(obj));
delete obj.a;
console.log('Object after delete attempt:', obj);