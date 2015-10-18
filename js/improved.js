//variables and functions to be used later
var pingInput;
var pongInput;
var gameLength;
var leftScore;
var rightScore;
var leftPaddle;
var rightPaddle;

function leftPlayerTurn(output){
  //if output = ping - show ping img, add 1 point
  //if output = pong - show pong img, add 2 point
  //if output = ping-pong - show ping-pong img, add 5 point
  //if output = number - show number
  // show left-ball img

}
function rightPlayerTurn(output){
  //if output = ping - show ping img, add 1 point
  //if output = pong - show pong img, add 2 point
  //if output = ping-pong - show ping-pong img, add 5 point
  //if output = number - show number
  // show right-ball img

}

function gamePlay(ping, pong, length) {
  var output;
  //basic game loop
  for (i=1; i<=length; i++) {
    if (i%ping===0 && i%pong===0) {
      output = 'ping-pong';
    } else if (i%pong===0) {
      output = 'pong';
    } else if (i%ping===0) {
      output = 'ping';
    } else {
      output = i;
    }
    
  }
}



$(document).ready(function(){
  $('#start-button').click(function(){

    //get variables
    pingInput = parseInt($('#ping-input').val(), 10);
    pongInput = parseInt($('pong-input').val(), 10);
    gameLength = parseInt($('game-length').val(), 10);

    //switch divs
    $('#start').fadeOut( 400 );
    $('#game-area').delay( 600 ).fadeIn( 400 );


  }); //ending of click function



}); //ending of document.ready;