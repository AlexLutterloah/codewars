///////////////////////
///// ~ PROBLEM ~ /////
///////////////////////
/*

Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.


*/
////////////////////////
///// ~ SOLUTION ~ /////
////////////////////////

function firstNonRepeatingLetter(s) {
    let arr = s.split("");
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr.length; k++) {
            if (arr[i].toLowerCase() === arr[k].toLowerCase()) {
                count++;
            }
        }

        if (count === 1) {
            return arr[i];
        }
        count = 0;
    }
    return "";
}

console.log(firstNonRepeatingLetter(""));
console.log(firstNonRepeatingLetter("sTress"));
console.log(firstNonRepeatingLetter("moonmen"));
