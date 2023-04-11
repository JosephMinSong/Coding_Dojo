var smallerStringA1 = 'abcd'
var smallerStringB1 = 'efg'
var expected = 'efgabcd'

var smallerStringA2 = 'sunnyside up eggs'
var smallerStringB2 = 'biscuits and gravy'
var expected = 'sunnyside up eggsbiscuits and gravy'

/**
 * Combine two given strings together with the smaller string being added
 * in the front. If they are the same length, the first string will be
 * added to the front.
 * @returns {string} The combined strings.
 */
function combineSmallerStringFirst(a,b) {
    // if (a.length <= b.length){
    //     return a+b;
    // }
    // else {
    //     return b+a;
    // }
    return a.length <= b.length ? a+b : b+a;
}

console.log(combineSmallerStringFirst(smallerStringA2,smallerStringB2));

var stringToRepeat1 = 'Birria Tacos'
var numberToRepeat1 = 5
var repeatedExpected = 'Birria TacosBirria TacosBirria TacosBirria TacosBirria Tacos'

var stringToRepeat2 = 'margherita pizza'
var numberToRepeat2 = 2
var repeatedExpected = 'margherita pizzamargherita pizza'

/**
 * Given a string and an integer representing how many times the string should
 * be repeated, create a new string that is the given string repeated that
 * many times.
 * @returns {string} The given string repeated the specified amount of times.
 */
function stringRepeat(str,n) {
    var returnStr = '';
    for (var i = 0; i < n; i++){
        returnStr += str;
    }
    return returnStr;
}

console.log(stringRepeat(stringToRepeat2,numberToRepeat2));

var wordArray = ['shawn', 'jim', 'tyler', 'heidi', 'john', 'alfredo', 'michael']

/**
 * Determines the average length of the words in the given array.
 * @returns {number} The average length of the given words.
 */
function avgWordLength(arr) {
    var total = 0;
    for (var word of arr){
        total += word.length;
    }
    return total / arr.length;
}

console.log(avgWordLength(wordArray));

/**
 * Finds the longest word in the given array of words.
 * @returns {string} The longest word. If there are multiple words with the same
 *    length, this should be the last word in the array with that length.
 */
function findLongestWord(x){
    var longestWord = x[0];
    for (var i=1; i<x.length; i++){
        if (x[i].length >= longestWord.length){
            longestWord = x[i];
        }
    }
    return longestWord;
}

console.log(findLongestWord(wordArray));

var rangeA1 = 10
var rangeB1 = 15
var rangeExpected = 75
/**
 * Calculates the sum of the given range, inclusive. I.e., the sum of the first
 * number through the last number, inclusive.
 * @returns {number} The sum of the given range, inclusive.
 */

function inclusiveRangeSum(a,b) {
    var sum = 0; 
    while (a<=b){
        sum += a;
        a++;
    }
    return sum;
}

console.log(inclusiveRangeSum(rangeA1,rangeB1));