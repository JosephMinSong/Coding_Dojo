/* You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. 
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. 
The richest customer is the customer that has the maximum wealth. */

/* Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6. */ 

var maximumWealth = function(accounts){
    let wealthArr = [];
    for (var i = 0; i < accounts.length; i++){
        var sum = 0;
        for (var i2 = 0; i2 < accounts[i].length; i2++){
            sum += accounts[i][i2];
            wealthArr.push(sum);
        }
    }

    var max = wealthArr[0];
    for (var i3 = 1; i3 < wealthArr.length; i3++){
        if (wealthArr[i3] > max){
            max = wealthArr[i3];
        }
    }
    return max;
}