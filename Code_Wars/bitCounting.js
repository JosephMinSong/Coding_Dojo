/* Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case */

var n = 1234;
console.log(n.toString(2));


var countBits = function(n) {
    let bit = n.toString(2);
    let count = 0;
    for (var num of bit){
        if (num === '1'){
            count++
        }
    }
    return count;
}

console.log(countBits(n));