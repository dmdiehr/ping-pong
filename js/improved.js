var pingInput;
var pongInput;
var gameLength;
var leftScore = 0;
var rightScore = 0;
var counter = 1;
var ping = false;
var pong = false;
var pingPong = false;


function countDown(callback){
  $('#countdown3').fadeIn(1000).delay(500).fadeOut(500, function(){
    $('#countdown2').fadeIn(500).delay(500).fadeOut(500, function(){
      $('#countdown1').fadeIn(500).delay(500).fadeOut(500, function(){
        $('#countdown-start').fadeIn(500).delay(500).fadeOut(100, function(){
          if (callback){
            callback(rightPlayerTurn);
          }
        });//countdown-start ending
      });//countdown1 ending
    });//countdown2 ending
  });//countdown3 ending
}//countDown function ending

function winner(left, right){
  $('#game-area').hide();
  $('header').hide();
  if (left>right){
    $('#winner').fadeIn();
    $('#left-winner').fadeIn();

    for (i=0; i<=3; i++) {
        $('#winner-inverse').fadeIn(1000).delay(500).fadeOut(500).fadeIn();
      }

  } else if (right>left){
    $('#winner').fadeIn();
    $('#right-winner').fadeIn();

    for (i=0; i<=3; i++) {
      $('#winner-inverse').fadeIn(1000).delay(500).fadeOut(500).fadeIn();
    }

    } else if (left===right){
    $('#winner').fadeIn();
    $('#winner-tie').fadeIn();
    $('#left-winner').fadeIn().css('float', 'left');
    $('#right-winner').fadeIn().css('float', 'right');

  }
}

function leftPlayerTurn(callback){

  ping = false;
  pong = false;
  pingPong = false;

  if (counter%pingInput===0 && counter%pongInput===0) {
    pingPong = true;
  } else if (counter%pongInput===0) {
    pong = true;
  } else if (counter%pingInput===0) {
    ping = true;
  }//end of if-else to set booleans

  if (pingPong){
    leftScore+=5;
    $('#left-score').text(leftScore);
    $('#left-ping-pong').fadeIn(500).delay(500).fadeOut(500);
  } else if (pong){
    leftScore+=2;
    $('#left-score').text(leftScore);
    $('#left-pong').fadeIn(500).delay(500).fadeOut(500);
  } else if (ping){
    leftScore+=1;
    $('#left-score').text(leftScore);
    $('#left-ping').fadeIn(500).delay(500).fadeOut(500);
  } else {
    $('#left-number').text(counter);
    $('#left-number').fadeIn(500).delay(500).fadeOut(500);
  }// end of paddle and scoring if else

  $('#left-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(leftPlayerTurn);
      } else {
        callback();
      }
    } else {
      winner(leftScore, rightScore);
    }
  });
}


function rightPlayerTurn(callback){

  ping = false;
  pong = false;
  pingPong = false;

  if (counter%pingInput===0 && counter%pongInput===0) {
    pingPong = true;
  } else if (counter%pongInput===0) {
    pong = true;
  } else if (counter%pingInput===0) {
    ping = true;
  }//end of if-else to set booleans

  if (pingPong){
    rightScore+=5;
    $('#right-score').text(rightScore);
    $('#right-ping-pong').fadeIn(500).delay(500).fadeOut(500);
  } else if (pong){
    rightScore+=2;
    $('#right-score').text(rightScore);
    $('#right-pong').fadeIn(500).delay(500).fadeOut(500);
  } else if (ping){
    rightScore+=1;
    $('#right-score').text(rightScore);
    $('#right-ping').fadeIn(500).delay(500).fadeOut(500);
  } else {
    $('#right-number').text(counter);
    $('#right-number').fadeIn(500).delay(500).fadeOut(500);
  }// end of paddle and scoring if else

  $('#right-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(rightPlayerTurn);
      } else {
        callback();
      }
    } else {
      winner(leftScore, rightScore);
      }
  });
}


$(document).ready(function(){
  $('#start-button').click(function(){
    pingInput = parseInt($('#ping-input').val(), 10);
    pongInput = parseInt($('#pong-input').val(), 10);
    gameLength = parseInt($('#game-length').val(), 10);

    $('#start').fadeOut(400);
    $('#game-area').delay(600).fadeIn(400);

    countDown(leftPlayerTurn);


  }); //ending of click function
}); //ending of document.ready;