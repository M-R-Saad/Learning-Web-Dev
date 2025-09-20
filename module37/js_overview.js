// 1. var, let, const
var name = "John";
let age = 25;
const PI = 3.14;

// 2. if else
if (age > 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// 3. array and different array methods
let fruits = ["apple", "banana", "orange"];
fruits.push("mango");
fruits.pop();
fruits.length;

// 4. for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// 5. function (parameter, arguments)
function greet(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}
greet("Alice", "Hi");

// 6. object, access obj value
let person = {
    name: "Bob",
    age: 30,
    city: "NYC"
};
console.log(person.name);
console.log(person["age"]);

// 7. template string
let message = `My name is ${person.name} and I am ${person.age} years old`;

// 8. arrow function
const add = (a, b) => a + b;
const square = x => x * x;

// 9. spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5];
let newPerson = {...person, country: "USA"};

// 10. array methods - map, forEach, filter, find, reduce
let numbers = [1, 2, 3, 4, 5];
numbers.map(x => x * 2);
numbers.forEach(x => console.log(x));
numbers.filter(x => x > 3);
numbers.find(x => x === 3);
numbers.reduce((sum, x) => sum + x, 0);

// 11. array & object destructuring
let [first, second] = fruits;
let {name: userName, age: userAge} = person;

// 12. obj keys, values, array add/remove using dot, dot vs bracket notation
Object.keys(person);
Object.values(person);
person.email = "bob@email.com";
delete person.city;
person["phone"] = "123-456-7890";

// 13. JSON, fetch
let jsonString = JSON.stringify(person);
let parsedObj = JSON.parse(jsonString);
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data));

// 14. truthy falsy values, ternary, shortcut and / or
let result = age > 18 ? "Adult" : "Minor";
let userName2 = name || "Guest";
let isValid = name && age;

// 15. localstorage with JSON
localStorage.setItem('user', JSON.stringify(person));
let storedUser = JSON.parse(localStorage.getItem('user'));
