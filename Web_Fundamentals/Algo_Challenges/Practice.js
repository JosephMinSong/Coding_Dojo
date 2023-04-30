

// // for (var i = 0; i < items.length; i++) {
// //     res[i] = items[i];
// //     res[items.length + i] = items[i];
// // }


// const arr1 = ['a', 'b', 'c'];
// const expected1 = ['a', 'b', 'c', 'a', 'b', 'c'];

// const arr2 = ['a'];
// const expected2 = ['a', 'a'];

// const arr3 = [];
// const expected3 = [];

// /**
//  * Creates a new array that is a concatenation of the given array with itself.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<any>} items
//  * @returns {Array<any>} The resulting concatenation of the given arr with
//  *    itself.
//  */

// function concatArrWithSelf(items) {
//     var res = [];
//     for (var i = 0; i < (items.length*2); i++){
//         res.push(items[i%items.length]);
//     }
//     return res;
// }
// console.log(concatArrWithSelf(arr1));


const arr1 = [1, 2, 3];
const newItem1 = 0;
const expected1 = 4;
// after function is called, arr1 should be:
const arr1Expected = [0, 1, 2, 3];

const arr2 = [];
const newItem2 = 'a';
const expected2 = 1;
// after function is called, arr2 should be:
const arr2Expected = ['a'];

/**
 * Shifts all items to the right by one to make space to add the given new item
 * to the front of the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<any>} items An array of any kind of items.
 * @param {any} newItem To add to front.
 * @returns {number} The new length of items.
 */
function unshift(items, newItem) {
    for (var i=items.length; i>=0; i--){
        items[i] = items[i-1];
    }
    items[0] = newItem;
    return items;
}

console.log(unshift(arr1, newItem1));








/* 
for (let j = 0; j < nums.length; j++) {
    let temp = nums[j];
    nums[j] = prev;
    prev = temp;
}
*/


//ROTATE IN PLACE SOLUTION
/*
function rotate(nums, k) {
    k = k % nums.length;
    const numsToRotate = nums.splice(nums.length-k, k);
    nums.splice(0, 0, ...numsToRotate);
    return nums;
}
*/