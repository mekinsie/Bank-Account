import Account from './../src/account.js'


describe('Account', () => {
  let reusableAccount;

  beforeEach(() => {
  reusableAccount = new Account(); 
  });
  // All Tests go in here //
  test('should correctly create an account object with a current balance property with value 0', () => {
    // const reusableAccount = new Account(); 
    expect(reusableAccount.currentBalance).toEqual(0);
  });

  test('should take in value from user and add to currentBalance', () => {
    let inputValue = 4;
    expect(reusableAccount.deposit(inputValue)).toEqual(4);
  }); 

  test('should take in value from user and subtract to currentBalance', () => {
    let inputValue = 4;
    expect(reusableAccount.withdrawal(inputValue)).toEqual(-4);
  });
});