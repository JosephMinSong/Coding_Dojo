class BankAccount:
    all_accounts = []
    
    def __init__(self, account_name, int_rate = 0.01, balance = 0): 
        self.account_name = account_name
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_accounts.append(self.account_name)

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
        
    @classmethod
    def get_all_accounts(cls):
        for account in cls.all_accounts:
            print(account)

account1 = BankAccount('Joe')
account2 = BankAccount('Yuan')

account1.deposit(50).deposit(50).deposit(50).withdraw(10).yield_interest().display_account_info()
account2.deposit(100).deposit(10).withdraw(10).withdraw(10).withdraw(10).withdraw(10).yield_interest().display_account_info()
BankAccount.get_all_accounts()