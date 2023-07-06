List<Drink> AllBeverages = new List<Drink>();

Soda Coke = new Soda(30, false, "Coke", 37.5, 100, "Brown");

Coffee Latte = new Coffee(120, "Medium", "Argentenian Beans", "Latte", "Light Brown", 120, 100);

Wine Champagne = new Wine("Champagne", "Gold", 37.5, true, 100, 12, "Champagne, France", 1975);

AllBeverages.Add(Coke);
AllBeverages.Add(Latte);
AllBeverages.Add(Champagne);

AllBeverages.ForEach(drink => drink.ShowInfo());

// Coffee MyDrink = new Soda(); will not work because by stating "Coffee" as the variable type, the program is looking to intantiate an instance of Coffee. It looks at the value being passed and sees that it is Soda and not Coffee, which does not match what it's looking for. This is flawed logic and C# will not build the program because of this. 