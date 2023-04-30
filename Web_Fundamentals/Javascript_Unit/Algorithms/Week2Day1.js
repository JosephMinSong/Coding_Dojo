/* Using what we've learned about the Math library in JavaScript, 
complete the following function that should return a value between 1 through 6 at random. */

function d6() {
    var roll = Math.floor(Math.random() * 7)
    return roll;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);
