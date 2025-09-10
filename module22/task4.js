let sentence = "I am learning Programming to become a Programmer";

function longestWord(sentence) {
    let words = sentence.split(" ");
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

console.log(longestWord(sentence));