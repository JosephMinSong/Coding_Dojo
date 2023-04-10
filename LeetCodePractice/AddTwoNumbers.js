/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order. */

var addTwoNumbers = function(l1, l2) {
    var l1Array = [];
    var l2Array = [];
    var newIntegerl1;
    var newIntegerl2;
    var sum = 0;

    //adds the numbers in reverse order into a new array and makes them an integer
    for (var i1=l1.length-1; i1>=0; i1--){ 
        l1Array.push(l1[i1]); 
        newIntegerl1 = parseInt(l1Array.join(''));
    }
    for (var i2=l2.length-1; i2>=0; i2--){
        l2Array.push(l2[i2]);
        newIntegerl2 = parseInt(l2Array.join(''));
    }

    sum = newIntegerl1+newIntegerl2;
    var sumString = String(sum).split('').map(Number); //making the sum integer of the two numbers into an array

    //reversing the sum array order
    var i4 = sumString.length-1;
    for (var i3=0; i3<(sumString.length-1)/2;i3++){ 
        var currentElement = sumString[i3];
        var lastElement = sumString[i4];
        sumString[i3] = lastElement;
        sumString[i4] = currentElement;
        i4--;
    }
    return sumString
}

console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))