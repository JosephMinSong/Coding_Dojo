/* You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). 
The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest. */

// var kWeakestRows = function(mat, k){
//     var resultArray = []; //weakest to strongest
//     var matArray = []; //adding all the numbers within the original array
//     var sum = 0;
//     for (var i=0;i<mat.length;i++){
//         for (var i2=0;i2<mat[i].length;i2++){
//             sum += mat[i][i2]
//         }
//         matArray.push(sum)
//         sum = 0;
//     }

//     var count = 0;
//     for (var i3=0;i3<matArray.length;i3++){
//         for (var i4=0;i4<matArray.length;i4++){
//             if (matArray[i3] = count){
//                 resultArray.push(i3)
//             }
//             count ++
//         }
//     }
//     return resultArray
// }

var kWeakestRows = function(mat, k){
    var powerArray = [];
    var powerResultArray = [];
    var result = [];
    var powerArrayLess10 = [];
    var powerArrayGreater10 = [];

    //sorting into arrays by power and index
    for (var i=0;i<mat.length;i++){
        var power = 0;
        for (var i2=0;i2<mat[0].length;i2++){
            if (mat[i][i2]==1){
                power++
            }
        }
        powerArray.push([power, i])
    }
    
    //gathering the final listing in order
    for (var i3=0;i3<powerArray.length;i3++){
        powerResultArray.push(powerArray[i3][1])
    }
    
    //splitting the final list by the k given
    for (var i4=0;i4<k;i4++){
        result.push(powerResultArray[i4])
    }
    return powerArray
}

var x = [[1,0,0,0],[1,1,1,1],[1,0,0,0],[1,0,0,0]]
console.log(kWeakestRows(x, 2))