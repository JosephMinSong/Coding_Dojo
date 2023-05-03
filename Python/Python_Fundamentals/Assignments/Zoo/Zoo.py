import Animals

class Zoo:

    chicken = 10
    beef = 10
    salmon = 10
    account = 500

    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.lions = {}
        self.tigers = {}
        self.bears = {}

    @classmethod
    def delivery_day(cls):
        cls.chicken += 10
        cls.beef += 10
        cls.salmon += 10
        cls.account -= 100

    @classmethod
    def check_animals(cls, animal_dict):
        for animal in animal_dict:
            if animal_dict[animal].health == 0:
                animal_dict[animal].death()
                animal_dict.pop(animal.name)

    @classmethod
    def play_with_animals(cls, animal_dict):
        for animal in animal_dict:
            animal_dict[animal].play()

    def display_all_animals(self):
        print(f"Our ferocious lions:")
        for lion in self.lions:
            print(lion)
        print(f"\nOur beautiful tigers:")
        for tiger in self.tigers:
            print(tiger)
        print(f"\nOur cuddly bears:")
        for bear in self.bears:
            print(bear)

    def end_business_day(self):
        visitors = int(input("How many visitors did we have today: "))
        if visitors > 100:
            self.account += 80
            print(f"Fantastic! Our new account balance is {self.account}")
        else:
            self.account += 50
            print(f"That's good! Our new account balance is {self.account}")
        print(f"Our inventory are as follows: Chicken: {Zoo.chicken}, Beef: {Zoo.beef}, Salmon: {Zoo.salmon}.")
        scheduling_delivery_day = (int(input("Shall we schedule a delivery day? 1: Yes 2: No\n")))
        if scheduling_delivery_day == 1:
            Zoo.delivery_day()
            print(f"Our new inventory list are as follows: Chicken: {Zoo.chicken}, Beef: {Zoo.beef}, Salmon: {Zoo.salmon}.")
        return self

    # Adding lions
    def add_lion(self, name, age, health, happiness):
        new_lion = Animals.Lion(name, age, health, happiness, type = 'lion')
        self.lions[new_lion.name] = new_lion
        return self

    # Feeding lions
    def feed_lions(self):
        for lion in self.lions:
            if Zoo.chicken > 0:
                self.lions[lion].eat()
                Zoo.chicken -= 1
            else:
                self.lions[lion].starve()
        Zoo.check_animals(self.lions)
        return self

    # Adding tigers
    def add_tiger(self, name, age, health, happiness):
        new_tiger = Animals.Tiger(name, age, health, happiness, type = 'tiger')
        self.tigers[new_tiger.name] = new_tiger
        return self

    # Feeding tigers
    def feed_tigers(self):
        for tiger in self.tigers:
            if Zoo.beef > 0:
                self.tigers[tiger].eat()
                Zoo.beef -= 1
            else:
                self.tigers[tiger].starve()
        Zoo.check_animals(self.tigers)
        return self

    # Adding bears
    def add_bear(self, name, age, health, happiness):
        new_bear = Animals.Bear(name, age, health, happiness, type = 'bear')
        self.bears[new_bear.name] = new_bear
        return self

    # Feeding tigers
    def feed_bears(self):
        for bear in self.bears:
            if Zoo.salmon > 0:
                self.bears[bear].eat()
                Zoo.salmon -= 1
            else:
                self.bears[bear].starve()
        Zoo.check_animals(self.bears)
        return self
