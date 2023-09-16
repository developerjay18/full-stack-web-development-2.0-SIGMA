// Create a BankAccount class in JavaScript using Object-Oriented Programming (OOP) principles. The class should have methods for depositing, withdrawing, and checking the account balance. Ensure that account balances cannot go below zero and that both deposit and withdrawal amounts must be positive.

// class for BankAccount
class BankAccount {
  constructor(initialDeposit, holderName) {
    if (initialDeposit > 0) this.balance = initialDeposit;
    this.holderName = holderName;
  }

  // for depositing money
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited Rs.${amount}. New balance : Rs.${this.balance}`);
    } else {
      console.log(`Invalid deposit amount. Please enter a positive amount.`);
    }
  }

  // for withdrawing money
  withdraw(amount) {
    if (amount > 0) {
      if (this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn Rs.${amount}. New balance : Rs.${this.balance}`);
      } else {
        console.log(`Insufficient funds for Withdrawl.`);
      }
    } else {
      console.log(`Invalid withdrawl amount. Please enter a positive amount`);
    }
  }

  // for displaying account balance
  checkBalance() {
    if (this.balance > 0) {
      console.log(
        `Account balance for ${this.holderName}: is Rs.${this.balance}`
      );
    }
  }
}

// test-case
let accountHolder = new BankAccount(1000, 'Jay');
accountHolder.checkBalance();

accountHolder.deposit(500);
accountHolder.deposit(-50);

accountHolder.withdraw(200);
accountHolder.withdraw(1500);
accountHolder.withdraw(-500);

accountHolder.checkBalance();
