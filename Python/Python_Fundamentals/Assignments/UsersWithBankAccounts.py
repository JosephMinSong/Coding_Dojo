class BankUser:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.user_accounts = []
        self.account = BankAccount(int_rate = 0.02, balance = 0)

    def get_user_info(self):
        print(self.name, self.email, self.account, self.user_accounts)
    
    def user_deposit(self, amount):
        self.account.deposit(amount)

    def user_withdraw(self, amount):
        self.account.withdraw(amount)

    def display_info(self):
        self.account.display_account_info(self)

    # def make_new_account():



class BankAccount:
    
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self
    
    def withdraw(self, amount):
        if (self.balance - amount) < 0: 
            print("Insufficient funds. Charging a $5 fee")
            self.balance -= 5
            return self
        else:
            self.balance -= amount
            return self
        
    def display_account_info(self):
        print("Balance:", self.balance)
        return self
    
    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance*self.int_rate
            return self
        
user1 = BankUser('Joe Song', 'yeojsong@gmail.com')

user1.get_user_info()
