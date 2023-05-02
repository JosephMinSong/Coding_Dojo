class BankUser:

    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.user_accounts = {}

    def get_user_info(self):
        print(f"Name: {self.name}. Email: {self.email}. Number of Accounts: {len(self.user_accounts)}")
        return self
    
    def user_deposit(self, key, amount):
        self.user_accounts[key].deposit(amount)
        return self

    def user_withdraw(self, key, amount):
        self.user_accounts[key].withdraw(amount)
        return self

    def display_account_balance(self):
        for key in self.user_accounts:
            print(key, ':', self.user_accounts[key].balance)
        return self

    def make_new_account(self, name, int_rate, balance):
        new_account = BankAccount(int_rate, balance)
        self.user_accounts[name] = new_account
        return self


class BankAccount:
    def __init__(self, type, balance): 
        self.type = type
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
    
    def yield_interest(self):
        if self.balance > 0:
            self.balance += self.balance*self.int_rate
            return self






user1 = BankUser('Joe Song', 'yeojsong@gmail.com')
user1.make_new_account('Checking', 0.05, 100)
user1.make_new_account('Savings', 0.05, 500)
user1.get_user_info()
user1.display_account_balance()


