// Nested Object, accessing properties of nested objects

let user = {
    name: "John",
    age: 30,
    123: "numericKey",
    "sec-key": "specialKey",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    },
    father: {
        name: "Doe",
        age: 58
    }
};

console.log(user.address.city);
console.log(user.address.country);
console.log(user[123]); // Can't use dot notation here.
console.log(user["sec-key"]); // Also can't use dot notation here.

console.log(user.father.name);
console.log(user.mother?.name); // Optional chaining, avoids error if mother doesn't exist.


// Map, ForEach, Filter, Find, Reduce Methods

let numbers = [1, 2, 3, 4, 5];

let squared = numbers.map(num => num * num); // Map returns a new array.
console.log(squared); // [1, 4, 9, 16, 25]

numbers.forEach(num => console.log(num * 2)); // ForEach does not return a new array, just iterates.

let even = numbers.filter(num => num % 2 === 0); // Filter returns a new array with values that fulfill the condition.
console.log(even); // [2, 4]

let found = numbers.find(num => num > 3); // Find returns the first element that matches the condition.
console.log(found); // 4

let sum = numbers.reduce((acc, num) => acc + num, 0); // Reduce returns a single value by accumulating.
console.log(sum); // 15


// Class in ES6, Encapsulation, Constructor, Inheritance, this keyword, super keyword

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let person1 = new Person("Alice", 25);
person1.greet(); 

class Employee extends Person {
    constructor(name, age, position) {
        super(name, age); // Use super to call the parent class constructor.
        this.position = position;
    }
    work() {
        console.log(`${this.name} is working as a ${this.position}.`);
    }
}

let employee1 = new Employee("Bob", 30, "Developer");
employee1.greet(); // Can access parent class method through prototype chain.
employee1.work();

class Manager extends Employee {
    #department; // Private field, not accessible outside the class.
    get department() {
        return this.#department;
    }
    constructor(name, age, position, department) {
        super(name, age, position);
        this.#department = department;
    }
    manage() {
        console.log(`${this.name} is managing the ${this.#department} department.`);
    }
}

let manager1 = new Manager("Charlie", 40, "Manager", "Sales");
manager1.greet();
manager1.work();
manager1.manage();
console.log(manager1.department); // Can access private field using getter method.
// console.log(manager1.#department); // This will throw an error, as department variable is private.
