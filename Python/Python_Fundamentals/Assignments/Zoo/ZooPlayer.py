import Zoo

my_zoo = Zoo.Zoo("Jojo's Bizzare Zoo")

my_zoo.add_lion('Alpha', 5, 100, 100).add_lion('Beta', 6, 110, 100).add_lion('Charlie', 2, 150, 120)
my_zoo.add_tiger('Delta', 1, 170, 140).add_tiger('Echo', 9, 60, 70).add_tiger('Foxtrot', 7, 100, 50)
my_zoo.add_bear('Golf', 2, 180, 100).add_bear('Hotel', 3, 150, 190).add_bear('India', 6, 160, 120)

my_zoo.display_all_animals()

my_zoo.feed_lions().feed_tigers().feed_bears()

my_zoo.end_business_day()
