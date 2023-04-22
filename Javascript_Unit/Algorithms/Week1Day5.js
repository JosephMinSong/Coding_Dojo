/* Write a function reverse( arr ) to reverse an array, if we were given...

["a", "b", "c", "d", "e"];
we expect to get back...

["e", "d", "c", "b", "a"]; */

var arr = ["a", "b", "c", "d", "e"];
let reversedArr = [];
let i = arr.length-1;

while (i >= 0){
    reversedArr.push(arr[i]);
    i--;
}

console.log(reversedArr);