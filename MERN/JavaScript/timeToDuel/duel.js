const Unit = require("./unitCard.js")
const Effect = require("./effectCard.js")

let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

let hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", 'resilience', 3)
let unhandledPromiseRejection =new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", 'resilience', -2)
let pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", 'power', 2)

hardAlgorithm.play(redBeltNinja)
console.log(redBeltNinja, blackBeltNinja, "1")

unhandledPromiseRejection.play(redBeltNinja)
console.log(redBeltNinja, blackBeltNinja, "2")

pairProgramming.play(redBeltNinja)
console.log(redBeltNinja, blackBeltNinja, "3")

redBeltNinja.attack(blackBeltNinja)
console.log(redBeltNinja, blackBeltNinja, "4")
