/* You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). 
The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:

The number of soldiers in row i is less than the number of soldiers in row j.
Both rows have the same number of soldiers and i < j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest. */

var kWeakestRows = function(mat, k){
    var powerArray = [];
    var result = [];

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
    
    //sorting the arrays by their first element, which is power level
    var sorter = function(a,b){
        return a[0]-b[0]
    }

    powerArray.sort(sorter)
    
    //splitting the final index list by the k given
    for (var i4=0;i4<k;i4++){
        result.push(powerArray[i4][1])
    }
    return result
}
