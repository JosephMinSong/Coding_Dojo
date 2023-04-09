// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    var new_arr = []
    for(var i=0; i<arr.length; i++) {
        if(arr[i] >= 0) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

export function main() {
    var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
    console.log(result);
}