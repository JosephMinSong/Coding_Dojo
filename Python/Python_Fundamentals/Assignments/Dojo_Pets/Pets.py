class Pet():
    # implement __init__( name , type , tricks ):
    def __init__(self, name, type, tricks, health, energy):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.health = health
        self.energy = energy
    # implement the following methods:
    # sleep() - increases the pets energy by 25
    def sleep(self):
        self.health += 25
        print("ZZZ")
        print(f"{self.name}'s health level is : {self.health}")
        return self
    # eat() - increases the pet's energy by 5 & health by 10
    def eat(self):
        self.energy += 5
        self.health += 10
        print("Yum! I just ate")
        print(f"{self.name}'s energy level is : {self.energy} and health level is: {self.health}")
        return self
    # play() - increases the pet's health by 5
    def play(self):
        self.health += 5
        print("Playing is so fun!")
        print(f"{self.name}'s health level is : {self.health}")
        return self
    # noise() - prints out the pet's sound
    def noise(self):
        print("Rawr. I hate baths")

class Cats(Pet):
    def __init__(self, name, type, tricks, health, energy):
        super().__init__(name, type, tricks, health, energy)

    def sleep(self):
        self.health += 30
        print("Meow ZZZ")
        print(f"{self.name}'s health level is : {self.health}")
        return self
    
    def eat(self):
        self.energy += 10
        self.health += 15
        print("Yum! I just ate and I'm a cat")
        print(f"{self.name}'s energy level is : {self.energy} and health level is: {self.health}")
        return self
    
    def play(self):
        self.health += 2
        print("Playing is so fun!")
        print(f"{self.name}'s health level is : {self.health}")
        return self
    
    def noise(self):
        self.health -= 5
        print("Meow. I hate baths")
        print(f"{self.name}'s health level is : {self.health}")
        return self


