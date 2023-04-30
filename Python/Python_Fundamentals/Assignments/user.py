class User:
    def __init__(self, first_name, last_name, email, age):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = False
        self.gold_card_points = 50

    def display_info(self):
        print('First name:', self.first_name)
        print('Last name:', self.last_name)
        print('Email:', self.email)
        print('Age:', self.age)
        print('Rewards member:', self.is_rewards_member)
        print('Amount of gold card points:', self.gold_card_points)


    def enroll(self):
        if self.is_rewards_member == False:
            self.is_rewards_member = True
        else:
            print("This member is already enrolled")
    
    def spend_points(self, amount):
        if amount > self.gold_card_points:
            print('Insufficient gold card points')
        else:
            self.gold_card_points -= amount
            print(self.gold_card_points, 'left')


