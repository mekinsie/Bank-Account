import Account from './../src/account.js'

describe('Account', () => {
  // All Tests go in here //
  test('should correctly create an account object with a current balance property with value 0', () => {
    const account = new Account();
    expect(account.currentBalance).toEqual(0);
  });
});
