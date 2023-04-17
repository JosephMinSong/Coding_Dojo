

// for (var i = 0; i < items.length; i++) {
//     res[i] = items[i];
//     res[items.length + i] = items[i];
// }


const arr1 = ['a', 'b', 'c'];
const expected1 = ['a', 'b', 'c', 'a', 'b', 'c'];

const arr2 = ['a'];
const expected2 = ['a', 'a'];

const arr3 = [];
const expected3 = [];

/**
 * Creates a new array that is a concatenation of the given array with itself.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items
 * @returns {Array<any>} The resulting concatenation of the given arr with
 *    itself.
 */

function concatArrWithSelf(items) {
    var res = [];
    for (var i = 0; i < (items.length*2); i++){
        res.push(items[i%items.length]);
    }
    return res;
}
console.log(concatArrWithSelf(arr1));