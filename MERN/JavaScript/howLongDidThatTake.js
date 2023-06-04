// Try rewriting the isPrime() function

function isPrime(num){
    //we are checking if num is prime in this fxn

    let limit = Math.sqrt(num)
    for (let i = 2; i <= limit; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}

function allPrimes(count){
    //count is how many primes we want
    let start = 2
    let primeCount = 0

    while (primeCount < count){
        if (isPrime(start)){
            primeCount ++
        }
        start++
    }

    return `The ${count}th prime number is ${start-1}`
}

console.log(allPrimes(10000))

// Fibonacci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}

rFib(40);


// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
iFib(40);

// The iterative function is much faster because we are not recursively adding more numbers for our function to remember. Instead, we are adding more to an already existing array


//Reversing a string
/*
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");
*/

// We could write a function that created a new string that started at the end of our given string and iterate through the string, adding each element at the index

function reverseString(str){
    newStr = ""
    for (let i = str.length-1; i <= 0; i--){
        newStr += str[i]
    }
    return newStr
}

