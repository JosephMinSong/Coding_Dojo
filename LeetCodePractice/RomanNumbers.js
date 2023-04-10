//Given a roman numeral, convert it to an integer.

function romanNumerals (romanString){
    var num = 0;
    var answer = 0;
    var prev = 1;
    for (var i=romanString.length-1;i>=0;i--){
        switch(romanString[i]){
            case 'I': num = 1; break;
            case 'V': num = 5; break; 
            case 'X': num = 10; break; 
            case 'L': num = 50; break; 
            case 'C': num = 100; break; 
            case 'D': num = 500; break; 
            case 'M': num = 1000; break;
        }
        if (num<prev){
            answer -= num;
        }
        else {
            answer += num;
        }
        prev = num;
    }
    return answer
}

var x = 'VI';
console.log(romanNumerals(x))
