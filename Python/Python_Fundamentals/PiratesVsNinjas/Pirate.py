import random
from Fighter import Fighter

class Pirate(Fighter):

    special_cd = 1


    def __init__(self):
        super().__init__()
        self.name = 'Pirate'
        self.defense += 2
        self.strength += 2
        self.special = 'Parlay!'
        self.buff = 'Cure Scurvy'
    
    def use_special(self, target):
        print(f"{self.name} used {self.special} and shot at {target.name}!")
        crit_chance = random.randint(1, 5)
        target.defend(self.strength + crit_chance)
        # Pirate.special_cd -= 1
    
    def use_buff(self):
        print(f"{self.name} used {self.buff} and ate a bunch of oranges!")
        self.health += 5
        print(f"{self.name}'s health is now {self.health}")

    # @classmethod
    # def check_cd(cls, move):
    #     if move > 0:
    #         return True
    #     else:
    #         print("The move is still on cooldown! Pick another move")
    #         return False