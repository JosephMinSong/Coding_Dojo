class Animals:
    def __init__(self, name, age, health, happiness, type):
        self.name = name
        self.age = age
        self.health = health
        self.happiness = happiness
        self.type = type

    def display_info(self):
        print(f"Hello! I am a {self.type}, my name is {self.name} and I'm {self.age} years old. My health level is {self.health} and my happiness level is {self.happiness}")
        return self
    
    def play(self):
        self.happiness += 10
        print(f"Rawr. Thanks for playing with me! {self.name}'s happiness level went up to {self.happiness}")
        return self

    def death(self):
        print(f"OH NO! {self.name} the {self.type} has passed away")


class Lion(Animals):
    def __init__(self, name, age, health, happiness, type):
        super().__init__(name, age, health, happiness, type)
    
    def eat(self):
        self.health += 10
        print(f"Yum! I love chicken. {self.name}'s health is now {self.health}")
        return self
    
    def starve(self):
        self.health -= 5
        print(f"My stomach is growling! Please get more chicken soon. {self.name}'s health is now {self.health}")
        return self

class Tiger(Animals):
    def __init__(self, name, age, health, happiness, type):
        super().__init__(name, age, health, happiness, type)
    
    def eat(self):
        self.health += 12
        print(f"Yum! I love beef. {self.name}'s health is now {self.health}")
        return self
    
    def starve(self):
        self.health -= 7
        print(f"My stomach is growling! Please get more beef soon. {self.name}'s health is now {self.health}")
        return self

class Bear(Animals):
    def __init__(self, name, age, health, happiness, type):
        super().__init__(name, age, health, happiness, type)

    def eat(self):
        self.health += 15
        print(f"Yum! I love salmon. {self.name}'s health is now {self.health}")
        return self
    
    def starve(self):
        self.health -= 10
        print(f"My stomach is growling! Please get more salmon soon. {self.name}'s health is now {self.health}")
        return self



