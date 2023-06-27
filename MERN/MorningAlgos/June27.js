/* 
    Given two strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    # character means a backspace character.

    i.e., after processing the backspaces, are the two strings equal?

    Bonus: solve in O(n) time
*/

const S1 = "ab#c";
const T1 = "ad#c";
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##";
const T2 = "c#d#";
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
const T3 = "#a#c";
const expected3 = true;
// Explanation: Both S and T become "c"


const S4 = "a#c";
const T4 = "b";
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/**
 * Determines if the given strings are equal after the backspace characters
 * "#" are processed.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} S
 * @param {string} T
 * @returns {boolean} Whether the given strings are equal after backspaces
 *    have been processed.
 */

function backspaceStringCompare(S, T) {
    let sResult = ""
    let tResult = ""
    let sRunner = S.length-1
    let tRunner = T.length-1
    let sSkips = 0
    let tSkips = 0 

    while (sRunner >= 0 && tRunner >= 0){

        if(S[sRunner] !== '#' && sSkips == 0){
            sResult = S[sRunner] + sResult
        } else if (S[sRunner] !== '#' && sSkips !== 0) {
            sSkips --
        } else {
            sSkips ++
        }

        if(T[tRunner] !== '#' && tSkips == 0){
            tResult = T[tRunner] + tResult
        } else if (T[tRunner] !== '#' && tSkips !== 0) {
            tSkips --
        } else {
            tSkips ++
        }

        sRunner --
        tRunner --
    }

    return sResult == tResult
}

/*****************************************************************************/

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))

// Danny's solution
function backspaceStringCompare(S, T) {
    const sResult = backspace(S);
    const tResult = backspace(T);

    return sResult === tResult;
}

function backspace(str) {
    let result = "";

    let skipCount = 0;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] === "#") {
            skipCount++;
        } else if (skipCount === 0) {
            result = str[i] + result;
        } else {
            skipCount--;
        }
    }

    return result;
}