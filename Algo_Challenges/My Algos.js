function indexOf(x,y) {
    for (var i=0; i<x.length; i++){
        if (x[i] == y){
            return i;
        }
    }
    return -1;
}

function nthLast(x,y) {
    for (var i=x.length; i>=0; i--){
        return x[i-y];
    }
}

var a = ["a", "b", "c", "d"]
var b = [];

console.log(nthLast(b, -1))