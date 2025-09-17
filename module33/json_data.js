// JSON Data, Stringified object, Parsing JSON

const person = {
    name: "John Doe",
    age: 30,
    department: "HR"
};

const jsonString = JSON.stringify(person);
console.log(jsonString);

const parsedObject = JSON.parse(jsonString);
console.log(parsedObject);


// Fetching JSON data from an API. Testing...

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

