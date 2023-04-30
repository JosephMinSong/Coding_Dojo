/**
 * Nested Arrays
 */

const arr1 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];
const value1 = 6;
const expected1 = true;

/**
   * Given a two dimensional array, determine if the value is present
   * @param {Array<Array<any>>} arr2d
   * @param {number} value
   * @returns {boolean} true if present, false if not
   */

function isPresent2d(arr2d, value) {
    for (var i=0; i<arr2d.length; i++){
        for (var i2=0; i2<arr2d[0].length; i2++){
            if (arr2d[i][i2] === value){
                return true
            }
        }
    }
    return false
}

console.log(isPresent2d(arr1, value1));



// isPresent2d(arr1, value1);

/************************************************************************** */

const arr2 = [
    [2, 5, 8],
    [3, 6, 1],
    [5, 7, 7],
];
const expected2 = [2, 5, 8, 3, 6, 1, 5, 7, 7];

/**
   * Given a two dimensional array, return a new array that the contains
   * just the elements of the inner arrays
   * @param {Array<Array<any>>} arr2d
   * @returns {Array<any>} the flattened array
   */
function flattenArray(arr2d) {
    var newArr = [];
    for (var arr of arr2d){
        for (var value of arr){
            arr.push(value);
        }
    }
    return newArr;
}

console.log(flattenArray(arr2));