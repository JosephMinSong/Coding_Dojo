function howMuchLeftOverCake(numberOfPieces, numberofPeople){
    var remainder_pieces = numberOfPieces%numberofPeople
    return remainder_pieces
}

if (remainder_pieces == 0){
    console.log("No leftovers for you!");
} else if (remainder_pieces <= 2){
    console.log("You have some leftovers");
}else if (remainder_pieces >= 3) and (remainder_pieces <=5){
    console.log("You have leftovers to share");
} else {
    console.log("Hold another party!");
}
