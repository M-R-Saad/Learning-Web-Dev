function  validProposal( person1 , person2 ) {
    if (typeof person1 !== 'object' || typeof person2 !== 'object') {
        return "Invalid";
    }
    if (person1.gender === person2.gender) {
        return false;
    }
    if(Math.abs(person1.age - person2.age) > 7) {
        return false;
    }
    return true;
}

let personA = { 
    name: "Rahul", 
    gender: "male", 
    age: 28 
};
let personB = { 
    name: "Joya", 
    gender: "female", 
    age: 21 
};

console.log(validProposal(personA, personB));


personA = { 
    name: "Milon", 
    gender: "male", 
    age: 20 
};
personB = { 
    name: "Sumi", 
    gender: "female", 
    age: 30 
};

console.log(validProposal(personA, personB));