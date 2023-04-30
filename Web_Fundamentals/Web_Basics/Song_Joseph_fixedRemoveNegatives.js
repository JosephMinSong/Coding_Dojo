// Debug the following code that removes negative values from an array
function removeNegatives(arr) {
    for (var i=arr.length; i>=0; i--){
        if(arr[i] < 0) {
            var negativeElement = arr[i];
            var lastElement = arr[arr.length-1];
            arr[arr.length-1] = negativeElement;
            arr[i] = lastElement;
            arr.pop();
        }
    }
    return arr;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);