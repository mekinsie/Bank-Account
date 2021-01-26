// Business Logic
function Account() {
  this.currentBalance = 0;
  this.date = new Date();
}
Account.prototype.Deposit = function(inputValue) {
  this.currentBalance += parseInt(inputValue);
  return this.currentBalance;
}
Account.prototype.Withdrawal = function(inputValue) {
  this.currentBalance -= parseInt(inputValue);
  return this.currentBalance;
}
const account = new Account()

// User Interface Logic
$(document).ready(function(){
  const balanceElement = $('#current-balance')
  $('#submit-button').click(function(event){
    event.preventDefault();
    const accountType = $("input:radio[name=account]:checked").val()
    const inputValue = $("#accountValue").val()   
    if (accountType === 'deposit') {
      account.Deposit(inputValue);
    } else if (accountType === 'withdrawal') {
      account.Withdrawal(inputValue);
    }
    balanceElement.html(account.currentBalance)
  })
});
