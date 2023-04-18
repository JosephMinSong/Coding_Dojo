/* You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r */

var mergeAlternately = function(word1, word2) {
    var newString = '';
    var longerWord = word1 > word2 ? word1.length : word2.length;
    for (var i = 0; i < longerWord; i++){
        
    }
}
