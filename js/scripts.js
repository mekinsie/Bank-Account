// Business Logic
function Transaction() {
  this.currentBalance = 0;
  this.date = new Date();
}
Transaction.prototype.Deposit = function(inputValue) {
  this.currentBalance += parseInt(inputValue);
  return this.currentBalance;
}
Transaction.prototype.Withdrawal = function(inputValue) {
  this.currentBalance -= parseInt(inputValue);
  return this.currentBalance;
}
const transaction = new Transaction()

// User Interface Logic
$(document).ready(function(){
  const balanceElement = $('#current-balance')
  $('#submit-button').click(function(event){
    event.preventDefault();
    const transactionType = $("input:radio[name=transaction]:checked").val()
    const inputValue = $("#transactionValue").val()   
    if (transactionType === 'deposit') {
      transaction.Deposit(inputValue);
    } else if (transactionType === 'withdrawal') {
      transaction.Withdrawal(inputValue);
    }
    balanceElement.html(transaction.currentBalance)
  })
});
