var y = [4,2,1,3,5]

function maxToFront2 (list){
    for (var i=0;i<list.length;i++){
        for (var x=0;x<list.length;x++){
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

console.log(maxToFront2(y))