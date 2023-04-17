/* 
Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef'] 
*/

let example1 = 'abc';
let example2 = 'abcdef';


function solution(str){
    var newStr = str.split('')
    var answer = []

    for (let i = 0; i<newStr.length; i+=2){
        if (newStr[i+1]){
            answer.push(newStr[i]+newStr[i+1])
        } else {
            answer.push(newStr[i]+'_')
        }
    }
    return answer
}

console.log(solution(example1));