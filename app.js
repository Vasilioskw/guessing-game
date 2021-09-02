// var, let, const
let numberOfSheep; // Camel Case a-z A-Z 0-9 _ $
numberOfSheep = 20;

console.log(numberOfSheep);






$(document).ready(function() {
  function myFunction(guess) {
    
    
  }

 

  
  // =====================================================
  // This code uses jQuery, a javascript library, to run.
  // You don't need to know how this works,
  // just that it makes the submit button function.
  $("form").submit(function(event) {
    event.preventDefault();
    var valueA = $("#js-user-input-a").val();
    var valueB = $("#js-user-input-b").val();
    
    let result = myFunction();
    // let result = concat(valueA, valueB);
    $(".resultText").text(result);
  });
});
