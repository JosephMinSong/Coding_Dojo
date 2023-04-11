//#1
function combineSmallerStringFirst(x,y) {
    var firstWordLength = x.length;
    var secondWordLength = y.length;
    if (firstWordLength>=secondWordLength){
        return (x+y);
    }
    if (secondWordLength>firstWordLength){
        return (y+x);
    }
}

//#2
function stringRepeat(x,y) {
    return (x.repeat(y));
}

//#3
function avgWordLength(x) {
    var numberOfWords = x.length;
    var sumfOfWords = 0;
    for (var i=0;i<x.length;i++){
        sumfOfWords += x[i].length;
    }
    return (sumfOfWords/numberOfWords);
}

//#4
function findLongestWord(x){
    var longestWord = x[0];
    for (var i=1; i<x.length; i++){
        if (x[i].length >= longestWord.length){
            longestWord = x[i];
        }
    }
    return longestWord;
}

//#5
function inclusiveRangeSum(x,y){
    var sum = 0;
    for (var i=x; i<=y; i++){
        sum += i;
    }
    return sum;
}