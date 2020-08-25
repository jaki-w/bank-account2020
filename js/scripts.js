function BankAccount(originalDeposit) {
  this.originalDeposit = originalDeposit
}

// Withdrawal constructor
BankAccount.prototype.withdrawal = function(amount) {
  originalDeposit -= amount;
  return this.originalDeposit;
}

// Deposit constructor
BankAccount.prototype.deposit = function(amount) {
  originalDeposit += amount;
  return this.originalDeposit;
}

// User Interface Logic
$(document).ready(function() {
  $("form#originalDeposit").submit(function(event) {
    event.preventDefault();
    const originalDeposit = parseInt($("input#originalDeposit").val());
    let bankaccount = new BankAccount(originalDeposit);
    $("#cashTotal").text(originalDeposit);
  });
  $("form#deposit").submit(function(event) {
    event.preventDefault();
    let amount = parseInt($("input#amount").val());
    $("#cashTotal").text(BankAccount.deposit(amount));

  });
  $("form#withdrawal").submit(function(event) {
    event.preventDefault();
    let amount = parseInt($("input#amount").val());
    $("#cashTotal").text(BankAccount.withdrawal(amount));
  });
});