class Ninja {
    constructor (name) {
        this.name = name
        this.health = 90
        this.speed = 3
        this.strength = 3
    }

    sayName(){
        console.log(`Hello! My name is ${this.name}.`)
    }

    showStats(){
        console.log(`My health is ${this.health}, speed is ${this.speed}, and strength is ${this.strength}`)
    }

    drinkSake(){
        this.health += 10
        console.log(`${this.name}'s health increased by 10; health is now ${this.health}`)
    }
}