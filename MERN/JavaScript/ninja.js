class Ninja {
    constructor (name) {
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`Hello! My name is ${this.name}.`)
        return this
    }

    showStats(){
        console.log(`My health is ${this.health}, speed is ${this.speed}, and strength is ${this.strength}`)
        return this
    }

    drinkSake(){
        this.health += 10
        console.log(`${this.name}'s health increased by 10; health is now ${this.health}`)
        return this
    }
}

class Sensei extends Ninja {
    constructor (name) {
        super (name)
        this.health = 200
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }

    speakWisdom() {
        super.drinkSake()
        console.log("A wise message")
        return this
    }
}