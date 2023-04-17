/* Create a function called pizzaOven. 
We should feel free to customize what information we keep track of for our pizza, 
but let's make sure that we include the following: crustType, sauceType, cheeses, and toppings. */

function pizzaOven (crustType, sauceType, cheeses, toppings) {
    var pizza = [];
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var firstPizza = pizzaOven('deep dish', 'traditional', ['mozzarella'], ['pepperoni', 'sausage']);

var secondPizza = pizzaOven('hand tossed', 'marinara', ['mozzarella', 'feta'], ['mushrooms', 'olives', 'onions']);

var thirdPizza = pizzaOven('thin crust', 'marinara', ['mozzarella', 'parmesean'], ['pepperoni', 'mushrooms', 'olives']);

var fourthPizza = pizzaOven('deep dish', 'white sauce', ['mozzarella', 'feta'], ['pepperoni', 'mushrooms']);

// Bonus Challenge: Create a function called randomPizza that uses Math.random() to create a random pizza!

let randNum = function getRandomNumber (max) {
    return Math.floor(Math.random() * (max + 1));
}

var typesOfCrust = ['deep dish', 'hand tossed', 'thin crust'];
var typesOfSauce = ['traditional', 'marinara', 'white sauce'];
var typesOfCheese = ['mozzarella', 'feta', 'parmesean'];
var typesOfTopping = ['pepperoni', 'sausage', 'olives', 'mushrooms', 'onions',]

function randomPizza(numberOfCheese, numberOfToppings) {
    var randomPizza = [];
    randomPizza.crustType = typesOfCrust[randNum(2)];
    randomPizza.sauceType = typesOfSauce[randNum(2)];
    randomPizza.cheeses = function () {
        return numberOfCheese == 3 ? typesOfCheese
        : numberOfCheese == 2 ? typesOfCheese.slice(2)
        : typesOfCheese[randNum(2)]
    }
    randomPizza.toppings = function () {
        return numberOfToppings == 5 ? typesOfTopping
        : numberOfToppings == 4 ? typesOfTopping.slice(3)
        : numberOfToppings == 3 ? typesOfTopping.slice(2)
        : numberOfToppings == 2 ? typesOfTopping.slice(1)
        : typesOfTopping[randNum(4)]
    }
    return randomPizza
}

console.log(randomPizza(3,4));

