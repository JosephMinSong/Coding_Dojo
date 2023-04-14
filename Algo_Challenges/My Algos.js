/* 
Recreate the built in .slice method

Given an array, a start index, and an end index,
return a NEW array that has only the elements from
the start index (inclusive) to the end index (exclusive)

What should you do if the provided end index is out of bounds?
*/

const arr1 = ["a", "b", "c", "d", "e"];
const startIdx1 = 0;
const endIdx1 = 5;
const expected1 = ["a", "b", "c", "d", "e"];

const arr2 = ["a", "b", "c", "d", "e"];
const startIdx2 = 0;
const endIdx2 = 1;
const expected2 = ["a"];

const arr3 = ["a", "b", "c", "d", "e"];
const startIdx3 = 1;
const endIdx3 = 2;
const expected3 = ["b"];

const arr4 = ["a", "b", "c", "d", "e"];
const startIdx4 = -100;
const endIdx4 = 100;
const expected4 = ["a", "b", "c", "d", "e"];

const arr5 = ["a", "b", "c", "d", "e"];
const startIdx5 = 0;
const endIdx5 = 0;
const expected5 = [];

const arr6 = ["a", "b", "c", "d", "e"];
const startIdx6 = 1;
const endIdx6 = 1;
const expected6 = [];

/**
 * Returns a slice of given arr.
 * @param {Array<any>} items
 * @param {number} startIdx
 * @param {number} endIdx
 * @returns {Array<any>} The slice of the given arr from startIdx inclusive
 *    to endIdx.
 */
function slice(items, startIdx, endIdx) {
    var newArr = [];
    if (startIdx < 0){
        startIdx = 0;
    }
    if (endIdx > items.length){
        endIdx = items.length;
    }
    for (var i=startIdx; i<endIdx ; i++){
        newArr.push(items[i]);
    }
    return newArr
}

// function slice(items, startIdx, endIdx) {
//     var newArr = [];
//     startIdx < 0 ? startIdx = 0 
//     : endIdx > items.length ? endIdx = items.length
//     : for (var i=startIdx; i<endIdx ; i++){
//         newArr.push(items[i]);
//     }
//     return newArr
// }

// Tests
const result1 = slice(arr1, startIdx1, endIdx1);
console.log(result1, "should be", expected1);

const result2 = slice(arr2, startIdx2, endIdx2);
console.log(result2, "should be", expected2);

const result3 = slice(arr3, startIdx3, endIdx3);
console.log(result3, "should be", expected3);

const result4 = slice(arr4, startIdx4, endIdx4);
console.log(result4, "should be", expected4);

const result5 = slice(arr5, startIdx5, endIdx5);
console.log(result5, "should be", expected5);

const result6 = slice(arr6, startIdx6, endIdx6);
console.log(result6, "should be", expected6);

/* 
Array: Concat

.push allowed: arrName.push(newItem)

Replicate JavaScript's concat() which combines two arrays into one NEW array

Input: two arrays
Output: one NEW array with the items of both in the original order
*/

const arrA1 = ["a", "b"];
const arrB1 = [1, 2, 3];
const expected1 = ["a", "b", 1, 2, 3];

const arrA2 = [1, 2, 3];
const arrB2 = ["a", "b"];
const expected2 = [1, 2, 3, "a", "b"];

/**
 * Concatenates the given arrays together into order that they are passed in.
 * @param {Array<any>} items1
 * @param {Array<any>} items2
 * @returns {Array<any>} The new arr that is a concatenation of the given arrays.
 */

// function concat(items1, items2) {
//     var newArr = [];
//     newArr = items1;
//     for (var i=0; i<items2.length; i++){
//         newArr.push(items2[i]);
//     }
//     return newArr;
// }

function concat(items1, items2) {
    for (var i=0; i<items2.length; i++){
        items1.push(items2[i]);
    }
}


// Tests
const result1 = concat(arrA1, arrB1);
console.log(arrA1, "should be", expected1);

const result2 = concat(arrA2, arrB2);
console.log(arrA2, "should be", expected2);