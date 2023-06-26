/* 

Given a string
return whether or not it's possible to make a palindrome out of the string's
characters.

What is it about a string that makes it possible for it to become a
palindrome?
*/

const str1 = "";
const expected1 = false;

const str2 = "a";
const expected2 = true;

const str3 = "ddaa";
const expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
const expected4 = true;
// Explanation: "dad"

const str5 = "aaadd"; // aaadd aad a
const expected5 = true;
// Explanation: "daaad"

const str6 = "abc";
const expected6 = false;

const str7 = "aaab";
const expected7 = false;

/**
 * Determines whether or not it is possible for the string's characters to be
 * rearranged into a palindrome.
 * - Space: O(?).
 * - Time: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given str can be rearranged into a palindrome.
 */
function canStringBecomePalindrome(str) {

    if (str.length < 1) return false

    let letterHash = {}
    let oddCount = 0 

    for (let letter of str){
        if (letterHash.hasOwnProperty(letter)){
            delete letterHash[letter]
        } else (
            letterHash[letter] = 1
        )
    }

    for (let value of Object.values(letterHash)){
        if (value % 2 == 1){
            oddCount++
            if (oddCount > 1){
                return false
            }
        }
    }

    // Kyle's Method

    // let count = 0 

    // for (let key in letterHash){
    //     count ++
    //     if (count > 1){
    //         return false
    //     }
    // } 

    return true
}

console.log(canStringBecomePalindrome(str1))
console.log(canStringBecomePalindrome(str2))
console.log(canStringBecomePalindrome(str3))
console.log(canStringBecomePalindrome(str4))
console.log(canStringBecomePalindrome(str5))
console.log(canStringBecomePalindrome(str6))
console.log(canStringBecomePalindrome(str7))


/*****************************************************************************/

function canStringBecomePalindrome2(str){
    let start = 0
    let end = str.length - 1
    let letterHash = {}

    while (start < end){

    }
}