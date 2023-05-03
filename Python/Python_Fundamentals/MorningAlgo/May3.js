/* 
    Acronyms
    Create a function that, given a string, returns the string’s acronym 
    (first letter of each word capitalized). 
    Consider using .split first if you need to, then try to do it without
    ( see https://www.w3schools.com/jsref/jsref_split.asp )
*/

const str1 = "object oriented programming";
const expectedA = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expectedB = "APIE";

const str3 = "software development life cycle";
const expectedC = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expectedD = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */

function acronymize(str) {
    let newStr = '';
    let seenLetter = false;
    for (var i = 0; i < str.length; i++){
        if (seenLetter === false  && str[i] != " "){
            newStr += str[i].toUpperCase()
            seenLetter = true
        } else if (str[i] === " "){
            seenLetter = false
        }
    }
    return newStr
}



console.log(acronymize(str1)); // Expected: "OOP"
console.log(acronymize(str2)); // Expected: "APIE"
console.log(acronymize(str3)); // Expected: "SDLC"
console.log(acronymize(str4)); // Expected: "GIT"