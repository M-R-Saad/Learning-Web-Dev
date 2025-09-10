const statement = 'I am a hard working person';

let splitStatement = statement.split(" ");

let reverseStatement = '';

for (let words of splitStatement) {
    reverseStatement = words + " " + reverseStatement;
}

console.log(reverseStatement);