#Challenge 1: 
class Player:

    team_list = []

    def __init__(self, player_dictionary):
        self.name = player_dictionary['name']
        self.age = player_dictionary['age']
        self.position = player_dictionary['position']
        self.team = player_dictionary['team']
        Player.team_list.append((self.name, self.position))

    def display_player(self):
        print(f'Player name: {self.name}')
        print(f'Player age: {self.age}')
        print(f'Player position: {self.position}')
        print(f'Player team: {self.team}')

    @classmethod
    def get_team(cls):
        for player in cls.team_list:
            print(player)

player_dict = {
    'kevin' : {
        "name": "Kevin Durant", 
        "age":34, 
        "position": "small forward", 
        "team": "Brooklyn Nets"
    },
    'jason' : {
        "name": "Jason Tatum", 
        "age":24, 
        "position": "small forward", 
        "team": "Boston Celtics"
    },
    'kyrie' : {
        "name": "Kyrie Irving", 
        "age":32,
        "position": "Point Guard", 
        "team": "Brooklyn Nets"
    }
}

#Challenge 2
# player_kevin = Player(kevin)
# player_jason = Player(jason)
# player_kyrie = Player(kyrie)


#Challenge 3
new_team = []

for athelete, info in player_dict.items():
    new_athelete = Player(info)
    new_team.append(new_athelete)

for player in new_team:
    player.display_player()


#Ninja Bonus
Player.get_team()








