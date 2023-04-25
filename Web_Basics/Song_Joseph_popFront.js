//Given an array, remove and return the value at the beginning of the array. 
//Do this without using any built-in array methods except pop().
function popFront2 (list){
    var x = list[0];
    for (var i=0;i<list.length;i++){
        list[i] = list[i+1];
    }
    // list.pop()
    console.log(x);
    return list
}

var x = [5,93,22,4]
console.log(popFront2(x))

let temp = '';
for (var i=1; i<items.length;i++){
    temp = items[i];
    items[i]=items[i-1];
    items[i-1]=temp;
}