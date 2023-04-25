var x = [4,2,1,3,5]

function minToFront (list){
    for (var i=list.length-1;i>=0;i--){
        for (var x=list.length-1;x>0;x--){
            if (list[x]<list[i]){
                var nextElement = list[x];
                var currentElement = list[i];
                list[i] = nextElement;
                list[x] = currentElement;
            }
        }
    }
    return list
}

console.log(minToFront(x))

for (var i5=powerArray.length-1;i5>=0;i5--){
        for (var i6=powerArray.length-1;i6>0;i6--){
            if (powerArray[i6][0]<powerArray[i5][0]){
                var nextElement = powerArray[i6];
                var currentElement = powerArray[i5];
                powerArray[i5] = nextElement;
                powerArray[i6] = currentElement;
            }
        }
    }
