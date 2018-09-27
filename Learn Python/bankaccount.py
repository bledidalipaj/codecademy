'''
Bank Account
============
In this project, we'll create a Python class that can be used to create
and manipulate a personal bank account.

The bank account class you'll create should have methods for each of 
the following:
	- Accepting deposits
	- Allowing withdrawals
	- Showing the balance
	- Showing the details of the account
'''

class BankAccount(object):
	balance = 0

	def __init__(self, name):
		self.name = name

	def __repr__(self):
		return '{} - {:.2f}'.format(self.name, BankAccount.balance)

	def show_balance(self):
		return 'Your balance is: {:.2f}'.format(BankAccount.balance)

	def deposit(self, amount):
		if amount <= 0:
	  		return 'Amount should be greater than zero!!'
		else:
	  		BankAccount.balance += amount
		return 'Deposit amount: {:.2f} - {}'.format(amount, 
			self.show_balance())

	def withdraw(self, amount):
		if amount > BankAccount.balance:
	  		return 'The amount you requested is greater than you current \
	  			balance - {:.2f}'.format(BankAccount.balance)
		else:
	  		BankAccount.balance -= amount
		return 'Withdrawing now: {:.2f} - {}'.format(amount,self.show_balance())
    
my_account = BankAccount('Minato')

print(my_account)
print(my_account.show_balance())

print(my_account.deposit(2000))
print(my_account.withdraw(1000))

print(my_account)