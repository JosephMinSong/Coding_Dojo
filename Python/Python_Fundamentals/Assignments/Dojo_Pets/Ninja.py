import Pets

class Ninja():

    # implement __init__( first_name , last_name , treats , pet_food , pet)
    def __init__(self, first_name, last_name, treats, pet_food):
        self.first_name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pets = {}
    
    def add_new_pet(self, name, type, tricks, health, energy):
        new_pet = Pets.Pet(name, type, tricks, health, energy)
        self.pets[new_pet.name] = new_pet
        return self
    
    def add_new_cat(self, name, type, tricks, health, energy):
        new_cat = Pets.Cats(name, type, tricks, health, energy)
        self.pets[new_cat.name] = new_cat
        return self
    
    def show_pets(self):
        for pet in self.pets:
            print(f"{self.pets[pet].name} is a {self.pets[pet].type} and knows {self.pets[pet].tricks}. His current health is {self.pets[pet].health} and energy is {self.pets[pet].energy}")

    # implement the following methods:
    # walk() - walks the ninja's pet invoking the pet play() method
    def walk(self, name):
        self.pets[name].play()
        return self
    # feed() - feeds the ninja's pet invoking the pet eat() method
    def feed(self, name):
        self.pets[name].eat()
        return self
    # bathe() - cleans the ninja's pet invoking the pet noise() method
    def bathe(self, name):
        self.pets[name].noise()
        return self

ninja1 = Ninja('Joe', 'Song', 10, 10)

ninja1.add_new_pet('Bowser', 'German Shepard', 'Sit, Roll Over', 100, 100)

ninja1.add_new_pet('Mario', 'Malti-Poo', 'Sit, Lay Down', 100, 100)

ninja1.add_new_cat('CatMan', 'Calico', 'None', 200, 200)

ninja1.show_pets()

ninja1.bathe('CatMan')





