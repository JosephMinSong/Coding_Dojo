// #1
var arr1 = [8, 6, 7, 5, 3, 0, 9];
// #2
var arr2 = [4, 7, 13, 13, 19, 37, -2];
// #3
var arr3 = [6, 2, 12, 14, -24, 5, 0];

function traverse(arr){
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i]);
    }
}

function traverse_sum(arr){
    var sum = 0
    for (var i = 0; i<arr.length; i++){
        sum = arr[i]+i;
        console.log(sum);
    }
}

function traverse_greaterThan5(arr){
    var x = 5
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>x){
            console.log(arr[i])
        }
        else {
            arr[i] == "No Dice"
        }
    }
}