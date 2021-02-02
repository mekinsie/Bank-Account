import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Account from './account.js';

$(document).ready(function(){
  const balanceElement = $('#current-balance');
  $('#submit-button').click(function(event){
    event.preventDefault();
    const account = new Account();

    const accountType = $("input:radio[name=account]:checked").val();
    const inputValue = $("#accountValue").val();
    
    
    if (accountType === 'deposit') {
      account.deposit(inputValue);
    } else if (accountType === 'withdrawal') {
      account.withdrawal(inputValue);
    }
    balanceElement.html(account.currentBalance);

    
  });
});
