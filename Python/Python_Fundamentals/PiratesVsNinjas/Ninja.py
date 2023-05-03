import random
from Fighter import Fighter

class Ninja(Fighter):
    def __init__(self):
        super().__init__()
        self.name = "Ninja"
        self.buff ="Clone"
        self.special = "Shuriken"
        self.agility += 2
    
    def use_special(self, target):
        chance = random.randint(0, 10)
        if chance < 2:
            chance = 0
            print(f"{self.name} threw {chance} Shuriken ")
            target.defend(self.strength * chance)
        elif chance <= 8:
            chance = 1
            print(f"{self.name} threw {chance} Shuriken ")
            target.defend(self.strength * chance)
        else:
            chance = 1
            print(f"{self.name} threw {chance} Shuriken ")
            target.defend(self.strength * chance)
            print(f"{self.name} threw {chance} Shuriken ")
            target.defend(self.strength * chance)

    def use_buff(self):
        print("Kage Bunshin no Jutsu")
        self.agility =+ 1
        print(f"{self.name} created a clone. Agility went up!")
        return self