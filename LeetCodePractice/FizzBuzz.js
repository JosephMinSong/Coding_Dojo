/* Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true. */

var fizzBuzz = function(n) {
    //make an array with numbers up to n
    var answer = [];
    for (var i=1;i<=n;i++){
        answer.push(i)
    }
    
    for (var i2=0;i2<answer.length;i2++){
        if (answer[i2]%3 === 0 && answer[i2]%5 === 0){
            answer[i2] = "FizzBuzz"
        }
        if (answer[i2]%3 === 0){
            answer[i2] = "Fizz"
        }
        if (answer[i2]%5 === 0){
            answer[i2] = "Buzz"
        }
        else {
            answer[i2] = String(answer[i2])
        }
    }
    return answer
}