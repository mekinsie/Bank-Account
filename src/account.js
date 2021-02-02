// Business Logic
export default function Account() {
  this.currentBalance = 0;
  // this.date = new Date();
}
Account.prototype.deposit = function(inputValue) {
  this.currentBalance += parseInt(inputValue);
  return this.currentBalance;
}
Account.prototype.withdrawal = function(inputValue) {
  this.currentBalance -= parseInt(inputValue);
  return this.currentBalance;
}
