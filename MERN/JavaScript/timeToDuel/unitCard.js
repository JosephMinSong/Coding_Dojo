import { Card } from "./card";

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super (name, cost)
        this.power = power
        this.resilience = resilience
    }

    attack(target){
        if (target instanceof Unit){
            target.resilience -= this.power
        }
    }
}