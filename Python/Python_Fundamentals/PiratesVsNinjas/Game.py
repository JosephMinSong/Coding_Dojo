from Ninja import Ninja
from Pirate import Pirate
from Programmer import Programmer
import random


pirate1 = Pirate()
ninja1 = Ninja()
spencer = Programmer()

print('Welcome to Ninjas vs Pirates!!')
player_choice = input('Which character do you want to play as? /n 1 for ninja or 2 for pirate \n')
if player_choice == '1':
    player = ninja1
    opponent = pirate1
elif player_choice == '2':
    player = pirate1
    opponent = ninja1
elif player_choice == '9':
    player = spencer
    choice = random.randint(0,1)
    if choice < 1 :
        opponent = ninja1
    else: 
        opponent = pirate1


player.name = input("What is his name? \n")


environments = ['sunny', 'rainy', 'cloudy']
environment = environments[random.randint(0,2)]
print(f"The environment is {environment}!")
if environment == 'sunny':
    pirate1.strength -= 1
    ninja1.agility -= 1
    print("Pirates lose 1 strength due to being too fat in the heat and Ninjas lose 1 agility point because WE SEE YOU")
elif environment == 'rainy':
    pirate1.defense += 1
    ninja1.defense += 1
    print("Pirates and Ninjas defense go up by 1 because... because")
else:
    pirate1.agility += 1
    ninja1.agility += 2
    ninja1.strength += 1
    print("Pirates and Ninjas work best covertly. Pirate agility +1. Ninja agility + 2 and strength + 1")


while player.health >= 0 and opponent.health >= 0:
    response = ''
    
    while response != '1' and response != '2' and response != '3':
        response = input(f"Choose an action \n 1)Attack \n 2)Use {player.special} \n 3)Use {player.buff} \n >>>")
    print('\n')
    if response == '1':
        player.attack(opponent)
        # player.special_cd += 1
    elif response == '2':
        # if player.check_cd(player.special_cd) == True:
        player.use_special(opponent)
        # else: 
    else:
        player.use_buff()

    print("\n--opponents turn!--\n")

    opponent_move = random.randint(1,3)
    if opponent_move == 1:
        opponent.attack(player)
    elif opponent_move == 2:
        opponent.use_special(player)
    else:
        opponent.use_buff()

    print('\n')

if opponent.health < 0 and player.health < 0:
    print("Wow a tie!!")
elif opponent.health < 0:
    print("Congrats you win!")
elif player.health < 0:
    print("Try again you lost!")