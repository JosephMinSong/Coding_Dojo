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