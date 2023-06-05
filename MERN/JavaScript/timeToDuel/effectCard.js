const Card = require("./card.js")
const Unit = require("./unitCard.js")

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    play(target){
        if (target instanceof Unit){
            target[this.stat] += this.magnitude
        } else {
            throw new Error("Target must be a unit")
        }
    }
}

module.exports = Effect