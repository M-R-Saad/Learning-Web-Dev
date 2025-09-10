function validContact(contact) {
    if (typeof contact !== 'string' || contact.trim() === '') {
        return "Invalid";
    }
    if (contact.length !== 11) {
        return false;
    }
    if (contact.slice(0, 2) !== '01') {
        return false;
    }
    if (contact.includes(" ")) {
        return false;
    }

    return true;
}

console.log(validContact("01819234567"));
console.log(validContact("0181923 4567"));
console.log(validContact("018192345679"));
console.log(validContact("02145678900"));
console.log(validContact([1, 2, 3]));
console.log(validContact(true));