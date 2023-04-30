//#1: Prints odds 1-20

for (var i=0; i<=20; i++){
    if (i%2 === 1){
        console.log(i);
    }
}

//#2: Decreasing multiples of 3

for (var i=100; i>=3; i--){
    if (i%3 === 0){
        console.log(i);
    }
}

//#3: Print the sequence

const sequence = [4, 2.5, 1, -0.5, -2, -3.5]
for (var value of sequence){
    console.log(value);
}

//#4: Sigma

let x = 0;
let sum = 0;
while (x<=100){
    sum += x;
    x++;
}
console.log(sum);

//#5: Factorial

let product = 1;
for (var i=1; i<=12; i++){
    product *= i;
}
console.log(product);