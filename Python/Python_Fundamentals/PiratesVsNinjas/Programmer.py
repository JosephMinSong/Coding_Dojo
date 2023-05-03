import random
from Fighter import Fighter

class Programmer(Fighter):
    def __init__(self):
        super().__init__()
        self.name = 'Spencer'
        self.defense += 20
        self.strength += 20
        self.special = 'Auto pass for room 3'
        self.buff = 'Morning algos'
    
    def use_special(self, target):
        print(f"{self.name} used {self.special} Kyle, Joe and Hiral passed python!")
        target.defend(self.strength + 20)
    
    def use_buff(self):
        self.agility += 1
        print(f"{self.name} used {self.buff} and raised his agility")
        print(f"{self.name}'s agility is now {self.agility}")