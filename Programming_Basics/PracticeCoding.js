// function compareNumbers(a,b){
//     return a-b;
// }

// var x = [1,9,15,7,2,13]
// console.log(x.sort(compareNumbers))


// the array to be sorted
const data = ["delta", "alpha", "charlie", "bravo"];

// temporary array holds objects with position and sort-value
const mapped = data.map((v, i) => {
    return { i, value: v};
})

// sorting the mapped array containing the reduced values
mapped.sort((a, b) => {
    if (a.value > b.value) {
    return 1;
    }
    if (a.value < b.value) {
    return -1;
    }
    return 0;
});

const result = mapped.map((v) => data[v.i]);
console.log(result)
console.log(data.sort())