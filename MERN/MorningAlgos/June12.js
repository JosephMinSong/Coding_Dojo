/* 
Given a square matrix (2d array) of integers
Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
];
const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
];
const expected2 = 0;


/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
   * Calculates the absolute diagonal difference of a square matrix.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
   *    a square matrix (rows and columns).
   * @returns {number} Represents the absolute difference between the top left to
   *    bottom right diagonal and the top right to bottom left diagonal.
   */


function diagonalDifference(sqrMatrix) {
    let sum1 = 0
    let sum2 = 0

    // one pointer going from top left to bottom right
    // another pointer going from top right to bottom left

    // we can do both at the same time with two pointers
    let x = 0
    let y = sqrMatrix.length - 1

    for (let i = 0; i < sqrMatrix.length; i++){
        sum1 += sqrMatrix[i][x]
        sum2 += sqrMatrix[i][y]
        x ++
        y --
    }

    return Math.abs(sum1 - sum2)
}

console.log(diagonalDifference(squareMatrix1))
console.log(diagonalDifference(squareMatrix2))


/*
Given two arrays of ints

return the symmetric differences, (aka disjunctive union)
- these are the elements which are in either of the sets and not their intersection (the union without the intersection)
    think of a venn diagram filled in except the overlapping middle part is not filled in (the intersection is excluded)
- i.e., if an element is in at least one of the arrays, but not in any other, it should be included (dupes included 1 time only)

Venn Diagram Visualization:
    - https://miro.medium.com/max/3194/1*N3Z94nCNu8IHsFenIAELJw.jpeg
*/

const setA1 = [1, 2];
const setB1 = [2, 1];
const expected1 = [];
// Explanation: 1 and 2 are in both arrays so are excluded

const setA2 = [1, 2, 3];
const setB2 = [4, 5, 6];
const expected2 = [1, 2, 3, 4, 5, 6];
// Explanation: neither array has shared values, so all are included

const setA3 = [4, 1, 2, 3, 4];
const setB3 = [1, 2, 3, 5, 5];
const expected3 = [4, 5];
/* 
Explanation: 1, 2, and 3 are shared so are excluded
    4 and 5 are included because they exist only in 1 array, but have duplicates, so only one copy of each is kept
*/

const setA4 = [];
const setB4 = [];
const expected4 = [];

const setA5 = [];
const setB5 = [1, 2, 3];
const expected5 = [1, 2, 3];


// Produces the symmetric differences, aka disjunctive union of two sets.

function symmetricDifferences(numbersA, numbersB) {
    let setA = new Set(numbersA)
    let setB = new Set(numbersB)
    let seenHash = {}
    let resultArray = []

    for (let setAKey of setA){
        if (!seenHash.hasOwnProperty(setAKey)){
            seenHash[setAKey] = 1
        } else {
            continue
        }
    }

    for (let setBKey of setB){
        if (seenHash.hasOwnProperty(setBKey)){
            seenHash[setBKey] = 0
        } else {
            seenHash[setBKey] = 1
        }
    }

    for (let key in seenHash){
        if (seenHash[key]){
            resultArray.push(parseInt(key))
        }
    }
    return resultArray
}

/*****************************************************************************/

console.log(symmetricDifferences(setA1, setB1))
console.log(symmetricDifferences(setA2, setB2))
console.log(symmetricDifferences(setA3, setB3))
console.log(symmetricDifferences(setA4, setB4))
console.log(symmetricDifferences(setA5, setB5))

