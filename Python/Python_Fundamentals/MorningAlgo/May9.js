/* 
Given a string,
return a new string with the duplicate characters excluded
Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba" // ab

function stringDedupe(str){
    let resultStr = '';
    let resultHash = {}
    for (var i = 0; i < str.length; i++){
        if (!resultHash.hasOwnProperty(str[i])){
            resultHash[str[i]] = 1
        }
        else {
            resultHash[str[i]]++
        }
    }
    for (var j = 1; j < str.length; j++){
        if (resultHash[str[j-1]] === j){
            resultStr += str[j-1]
        }
    }
    return resultStr
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));