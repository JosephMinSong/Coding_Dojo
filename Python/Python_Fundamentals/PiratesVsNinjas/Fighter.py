
import random

class Fighter:

    def __init__(self):
        self.health = 80
        self.defense = 5
        self.strength = 10
        self.agility = 1

    def attack(self, target):
        print(f"{self.name} attacked {target.name}")
        target.defend(self.strength)

    def defend(self, amount):
        chance = random.randint(0, 20 - self.agility)
        if chance < 2:
            print(f"{self.name} dodged the attack")
        else:
            damage = amount - self.defense 
            if damage < 0:
                damage = 0
            self.health -= damage
            print(f"{self.name} got attacked for {damage} points. Health left is {self.health}")
