//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    var userInputArray = String(x).split('').map(Number);
    var lastElementIndex = userInputArray.length-1;
    for (var i=0;i<(userInputArray.length/2);i++){
        if (userInputArray[i] != userInputArray[lastElementIndex-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome(100001))