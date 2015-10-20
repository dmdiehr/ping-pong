//variables and functions to be used later
var pingInput;
var pongInput;
var gameLength;
var leftScore = 0;
var rightScore = 0;
var leftScoreDisplay;
var rightScoreDisplay;
var counter = 1;
var ping = false;
var pong = false;
var pingPong = false;


////////////////////////functions to control div animation//////////////////////////////////////

function countDown(callback){
  $('#countdown3').fadeIn(1000).delay(500).fadeOut(500, function(){
    $('#countdown2').fadeIn(1000).delay(500).fadeOut(500, function(){
      $('#countdown1').fadeIn(1000).delay(500).fadeOut(500, function(){
        $('#countdown-start').fadeIn(1000).delay(500).fadeOut(100, function(){
          if (callback){
            // console.log('callback exists');
            callback(rightPlayerTurn);
          }
        });//countdown-start ending
      });//countdown1 ending
    });//countdown2 ending
  });//countdown3 ending
}//countDown function ending

////////////////////////////////////////center div////////////////////////////////////////////////

function motionLeft(callback){
  console.log('motionLeft ' + counter);
  $('#left-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(motionLeft);
      } else {
        callback();
      }
    }
  });
}
function motionRight(callback){
  console.log('motionRight '+ counter);
  $('#right-motion').fadeIn( 500 ).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(motionRight);
      } else {
        callback();
      }
    }
  });
}

//////////////////////////////////left div/////////////////////////////////////////////////////

function leftNumber(callback){
  $('#left-number').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}

function leftPing(callback){
  $('#left-ping').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}
function leftPong(callback){
  $('#left-pong').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}
function leftPongPong(callback){
  $('#left-ping-pong').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}
//////////////////////////////////// right div////////////////////////////////////////////////////
function rightNumber(callback){
  $('#right-number').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}

function rightPing(callback){
  $('#right-ping').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}
function rightPong(callback){
  $('#right-pong').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}
function righttPongPong(callback){
  $('#right-ping-pong').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){callback();}
  });
}

////////////////////////////////////Game Play/////////////////////////////////////////////////

function leftPlayerTurn(callback){
  console.log('left player, turn '+ counter);
  // console.log(pingInput);
  // console.log(pongInput);
  // console.log(gameLength);

                          //Establish Booleans//

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

                      //Animatons, Callbacks, and Scoring//

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

  }

  $('#left-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(leftPlayerTurn);
      } else {
        callback();
      }
    }
  });
}
  
  //if output = ping - show ping img, add 1 point

  //if output = pong - show pong img, add 2 point
  
  //if output = ping-pong - show ping-pong img, add 5 point
  
  //if output = number - show number
  
  // show left-ball img

function rightPlayerTurn(callback){
  console.log('right player turn ' + counter);

                          //Establish Booleans//
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

                      //Animatons, Callbacks, and Scoring//

  $('#right-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      if (counter<gameLength){
        callback(rightPlayerTurn);
      } else {
        callback();
      }
    }
  });
}
  // if output = ping - show ping img, add 1 point
  
  // if output = pong - show pong img, add 2 point
  
  // if output = ping-pong - show ping-pong img, add 5 point
  
  // if output = number - show number
  
  // show right-ball img





function gamePlay(ping, pong, length) {
  var output;
  // console.log('gamePlay called');
  motionLeft(motionRight);
  //basic game loop
  // for (i=1; i<=length; i++) {
  //   // console.log('loop ' + i)
  //   //if-else to establish output value;
  //   if (i%ping===0 && i%pong===0) {
  //       output = 'ping-pong';
  //     } else if (i%pong===0) {
  //       output = 'pong';
  //     } else if (i%ping===0) {
  //       output = 'ping';
  //     } else {
  //       output = i;
  //   }//end of if-else to set output

  //   if (i%2!==0) {leftPlayerTurn(output);} //if odd then it's the left players turn
  //   if (i%2===0) {rightPlayerTurn(output);} // if even then it's the right players turn
  // }//end of for-loop
}



$(document).ready(function(){
  $('#start-button').click(function(){

    //get variables
    pingInput = parseInt($('#ping-input').val(), 10);
    // console.log(pingInput);
    pongInput = parseInt($('#pong-input').val(), 10);
    // console.log(pongInput);
    gameLength = parseInt($('#game-length').val(), 10);
    // console.log(gameLength);

    //switch divs
    $('#start').fadeOut(400);
    $('#game-area').delay(600).fadeIn(400);

    //function calls
    // countDown(gamePlay);
    countDown(leftPlayerTurn);
   

    

  }); //ending of click function



}); //ending of document.ready;