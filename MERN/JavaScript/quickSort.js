function quickSort(arr, start, end){
    //base cases: if the start and end are equal, we are done sorting
    if (start >= end) return arr

    //logic: our index is where our partition fxn found the index where our pivot was
    let index = partition(arr, start, end)

    //if our starting index is lower than our pivot index, then we have more sorting to do
    //takes care of left side (smaller than our pivot side)
    if (start < index){
        quickSort(arr, start, index-1)
    }

    //if our ending index is greater than our pivot index, then we have more sorting to do
    //takes care of right side (greater than our pivot side)
    if (end > index){
        quickSort(arr, index + 1, end)
    }
}

function partition(arr, start, end){
    //base case: when the start is equal to the end, we only have one element in the array, therefore, nothing to be sorted
    if (start >= end) return

    //set our pivot to the middle of our array, i to the start, and j to the end
    let pivot = arr[Math.floor(arr.length/2)]
    let i = arr[0]
    let j = arr[arr.length-1]

    //logic: while i and j are not equal to each other
    //increase i until we have something greater than our pivot or our pivot
    //decrease j until we have something smaller than our pivot or our pivot
    //then swap the two values
    //keep going until the two are equal, then we have our new pivot for the next iteration
    while (i != j){
        while (arr[i] <= pivot){
            i++
        }
        while (arr[j] >= pivot){
            j--
        }
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return j
}

const myArray = [1,9,3,2,5,6,4,7,8]

quickSort(myArray, 0, myArray.length-1)