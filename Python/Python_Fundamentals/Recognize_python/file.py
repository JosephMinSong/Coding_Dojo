num1 = 42
    #Variable declaration

num2 = 2.3
    #Variable declaration

boolean = True
    #Primitive data type - Boolean

string = 'Hello World'
    #Primitive data type - String

pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives']
    #Composite data type - List

person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False}
    #Dictionary

fruit = ('blueberry', 'strawberry', 'banana')
    #Tuple

print(type(fruit))
    #Type check 

print(pizza_toppings[1])
    #Log

pizza_toppings.append('Mushrooms')
    #Add value to list

print(person['name'])
    #Log

person['name'] = 'George'
    #Change value in dictionary

person['eye_color'] = 'blue'
    #Change value in dictionary

print(fruit[2])
    #Log tuple value

if num1 > 45:
    print("It's greater")
else:
    print("It's lower")
    #Conditional If statement

if len(string) < 5:
    print("It's a short word!")
elif len(string) > 15:
    print("It's a long word!")
else:
    print("Just right!")
    #Conditional If statement

for x in range(5): #From 0-5, log x 
    print(x)
for x in range(2,5):#From 2-5, log x
    print(x)
for x in range(2,10,3): #From 2-10, stepping by 3, log x
    print(x)

x = 0
while(x < 5):
    print(x)
    x += 1
    #While loop - while x is less than 5, log x

pizza_toppings.pop() #Deleting last item of list
pizza_toppings.pop(1) #Deleting the second item of list

print(person) 
person.pop('eye_color')
print(person)
#Deleting 'eye_color' of person list

for topping in pizza_toppings:
    if topping == 'Pepperoni':
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break
    #If the topping is pepperoni, don't do anything (continue)
    #If the topping is olives, break the loop

def print_hello_ten_times():
    for num in range(10):
        print('Hello')
        #For numbers from 0-10, log 'hello'

print_hello_ten_times()

def print_hello_x_times(x):
    for num in range(x):
        print('Hello')

print_hello_x_times(4)
#For numbers from 0-4, log 'hello'

def print_hello_x_or_ten_times(x = 10):
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()
print_hello_x_or_ten_times(4)
#x is 10 by default, but by typing 4 into the parameters, you set it to 4. 


"""
Bonus section
"""

# print(num3) = NameError
# num3 = 72 = Variable declaration
# fruit[0] = 'cranberry' TypeError = can't change tuples
# print(person['favorite_team']) KeyError = 'favorite_team doesn't exist'
# print(pizza_toppings[7]) IndexError = Index of 7 doesn't exist
#   print(boolean) logs 'true'
# fruit.append('raspberry') = AttributeError = can't change tuples
# fruit.pop(1) = AttributeError = can't change tuples