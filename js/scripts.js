$(document).ready(function(){
  var userInput = parseInt(prompt('Choose a number'));
  for (i=1; i<=userInput; i++) {
    if (i%3===0 && i%5===0) {
      document.write('ping-pong');
    } else if (i%5===0) {
      document.write('pong');
    } else if (i%3===0) {
      document.write('ping');
    } else {
      document.write(i);
    }
    document.write('<br>');
  }
}); //ending for document.ready