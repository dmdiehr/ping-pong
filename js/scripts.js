$(document).ready(function(){
  var userInput = parseInt(prompt('Choose a number'));
  var output;
  for (i=1; i<=userInput; i++) {
    if (i%3===0 && i%5===0) {
      output = 'ping-pong';
    } else if (i%5===0) {
      output = 'pong';
    } else if (i%3===0) {
      output = 'ping';
    } else {
      output = i;
    }
    $('#list').append("<li>"+output+"</li>");
  }
}); //ending for document.ready