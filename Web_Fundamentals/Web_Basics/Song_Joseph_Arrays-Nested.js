/* Joe drives a taco truck in the booming town of Squaresburg. 
He uses an array of [x,y] coordinates corresponding to the locations of his customers. 
He also uses an array of [x,y] as coordinates corresponding to the location where he parks his truck. 
Customers walk from their location to his truck, but Joe wants to minimize the total distance from his truck to his customers, 
so he's looking for a better place to park. Feature request: given a customer coordinate array, return an optimal taco truck location. */

var customerCoordinates;
function optimalLocation(customercoordinates){
    var xSum = 0;
    var ySum = 0;
    var xAvg = 0;
    var yAvg = 0;
    var newTruckCoordinates = [];
    for (var i=0;i<customercoordinates.length;i++){
        xSum += (customercoordinates[i][0]);
        ySum += (customercoordinates[i][1]);
    }
    xAvg = xSum/customercoordinates.length;
    yAvg = ySum/customercoordinates.length;
    newTruckCoordinates.push(Math.round(xAvg),Math.round(yAvg));
    return newTruckCoordinates;
}

console.log(optimalLocation(customerCoordinates))