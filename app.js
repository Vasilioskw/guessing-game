
$(document).ready(function () {


    function generateRandomNumber() {
      let myRandomNumber = Math.floor(Math.random() * 100 + 1);
      console.log('myRandomNumber', myRandomNumber);
      return myRandomNumber;
    }
  
  
    let randomNumber = generateRandomNumber();
  
    function checkGuess(guess) {
      // Write your code here
      guess = Number(guess); //ParseInt()
      if (guess === randomNumber) {
        console.log('yay');
        return 'Yay';
      } else { 
        console.log('boo');
        return 'Boo, guess again';
      }
    }
  
    $('.guessingForm').submit(function (event) {
      event.preventDefault();
      var guess = $('#js-user-guess').val();
      $('#js-user-guess').val('');
    
      let answer = checkGuess(guess);
      $('.responseText').text(answer);
      
    });
    
  });


