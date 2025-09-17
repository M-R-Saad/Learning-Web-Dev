// Primitive & Non-Primitive Data Types

let num = 42;
let str = "Hello, World!";
let bool = true;
let undef;
let nul = null;
let sym = Symbol("unique");

let obj = { name: "Alice", age: 30 };
let arr = [1, 2, 3];
let func = function() { 
    return "I am a function";
};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof undef);
console.log(typeof nul); // typeof null returns "object", this is a bug in js.
console.log(typeof sym);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func);


// Null vs Undefined

let a;
console.log(a); 

let b = null;
console.log(b); 


// Truthy & Falsy Values

let falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(value => {
    if (value) {
        console.log(value);
    } else {
        console.log(value + " is falsy");
    }
});

let truthyValues = [true, 1, -1, -0, "non-empty string", {}, []];
truthyValues.forEach(value => {
    if (value) {
        console.log(value);
    }
});


// Double Equals (==) vs Triple Equals (===) and Implicit conversion

console.log(5 == "5"); // true
console.log(5 === "5"); // false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(null == undefined); // true
console.log(null === undefined); // false

console.log("5" + 5); // "55"
console.log("5" - 5); // 0
console.log("5" * 2); // 10
console.log("5" / 2); // 2.5    
console.log("5" - "2"); // 3
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"
console.log(true + 1); // 2
console.log(false + 1); // 1
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // 0
console.log({} + {}); // "[object Object][object Object]"   
console.log([1,2] + [3,4]); // "1,23,4"
console.log([1,2] - [3,4]); // NaN
console.log([1,2] * [3,4]); // NaN
console.log([1,2] / [3,4]); // NaN
console.log([] + 1); // "1"
console.log([1] + 1); // "11"
console.log([1,2] + 1); // "1,21"
console.log([] - 1); // -1
console.log([1] - 1); // 0
console.log([1,2] - 1); // NaN
console.log([] * 1); // 0
console.log([1] * 1); // 1
console.log([1,2] * 1); // NaN
console.log([] / 1); // 0
console.log([1] / 1); // 1
console.log([1,2] / 1); // NaN


// Block Scope vs Global Scope & Hoisting

{
    let blockScoped = "I am block scoped";
    const alsoBlockScoped = "I am also block scoped";
    var functionScoped = "I am function scoped";
    console.log(blockScoped);
    console.log(alsoBlockScoped);
    console.log(functionScoped);
}

console.log(functionScoped); // Can access here due to var hoisting
// console.log(blockScoped); // This will result in an error
// console.log(alsoBlockScoped); // This will also result in an error

// Hoisting Example
console.log(hoistedVar); // undefined
// console.log(hoistedLet); // This will result in an error
// console.log(hoistedConst); // This will also result in an error

var hoistedVar = "I am hoisted";
let hoistedLet = "I am also hoisted";
const hoistedConst = "I am a constant hoisted";
console.log(hoistedVar);
console.log(hoistedLet);
console.log(hoistedConst);
// Only var declarations are hoisted, let and const are not hoisted.


// Closures

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log("Outer Variable: " + outerVariable);
        console.log("Inner Variable: " + innerVariable);
    };
}

const closure = outerFunction("I am outer");
closure("I am inner");

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

const anotherCounter = makeCounter();
console.log(anotherCounter());
console.log(anotherCounter());  

console.log(counter()); // Continues from previous count
console.log(anotherCounter()); // Continues from its own count


// Callback Functions

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 25 };
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log("Data fetched:", data);
});


// Function pass by value vs reference

function modifyPrimitive(prim) {
    prim += 10;
    console.log("Inside modifyPrimitive:", prim);
}

let myNum = 20;
modifyPrimitive(myNum);
console.log("Outside modifyPrimitive:", myNum); // myNum remains unchanged

function modifyObject(obj) {
    obj.name = "Bob";
    console.log("Inside modifyObject:", obj);
}

let myObj = { name: "Alice" };
modifyObject(myObj);
console.log("Outside modifyObject:", myObj); // myObj is modified


