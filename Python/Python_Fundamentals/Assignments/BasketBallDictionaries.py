#Challenge 1: 
class Player:

    team_list = []

    def __init__(self, player_dictionary):
        self.player = {}
        for key, value in player_dictionary.items():
            self.player[key] = value
        Player.team_list.append(self.player)

    def display_player(self):
        print(self.player)
    
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

for athelete in player_dict:
    new_athelete = Player(player_dict[athelete])
    new_team.append(new_athelete)

for player in new_team:
    player.display_player()


#Ninja Bonus
Player.get_team()








