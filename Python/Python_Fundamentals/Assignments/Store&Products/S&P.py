class Store:

    id = 0

    def __init__(self, name):
        self.name = name
        self.list_of_products = []

    def add_product(self, name, price, category):
        new_product = Product(name, price, category)
        new_product.id = Store.id
        self.list_of_products.append(new_product)
        Store.id += 1
        return self

    def sell_product(self, id):
        for item in self.list_of_products:
            if item.id == id:
                self.list_of_products.remove(item)
        return self

    def inflation(self, percent_increase):
        for product in self.list_of_products:
            product.update_price(percent_increase, is_increased = True)
        return self

    def set_clearance(self, category, percent_discount):
        for product in self.list_of_products:
            if product.category == category:
                product.update_price(percent_discount, is_increased = False)
        return self



class Product:

    def __init__(self, name, price, category):
        self.name = name
        self.price = price
        self.category = category
    
    # percent change is given in whole number percentage
    def update_price(self, percent_change, is_increased):
        if is_increased == True:
            self.price *= (1+(percent_change/100))
            self.price = (f"{self.price:.3f}")
        else:
            self.price *= (1-(percent_change/100))
            self.price = (f"{self.price:.3f}")
        return self

    def print_into(self):
        print(f"This is a {self.name}. The price is {self.price}. It's in the {self.category} category.")
        return self


store1 = Store("Jojo's Bizzare Store")
store1.add_product('Oranges', 5, 'Fruits').add_product('Apples', 7, 'Fruits').add_product('Mangos', 8, 'Fruits')
store1.add_product('Lavander Candle', 15, 'Candles').add_product('Sandlewood Candle', 20, 'Candles').add_product('Hawaiian Breeze Candle', 12, 'Candles')
store1.add_product('Beef', 20, 'Meats').add_product('Chicken', 17, 'Meats').add_product('Pork', 25, 'Meats')


# store1.inflation(10) <-- inflation increases everything by 10%
# store1.set_clearance('Fruits', 10) <-- all 'Fruits' are 10 percent off
# store1.sell_product(4) <-- Sell the item that has an id of 4


for item in store1.list_of_products:
    print(f"{item.name} : {item.id}")

