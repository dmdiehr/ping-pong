//variables and functions to be used later
var pingInput;
var pongInput;
var gameLength;
var leftScore = 0;
var rightScore = 0;
var counter = 0;


////////////////////////functions to control div animation//////////////////////////////////////

function countDown(callback){
  $('#countdown3').fadeIn(1000).delay(500).fadeOut(500, function(){
    $('#countdown2').fadeIn(1000).delay(500).fadeOut(500, function(){
      $('#countdown1').fadeIn(1000).delay(500).fadeOut(500, function(){
        $('#countdown-start').fadeIn(1000).delay(500).fadeOut(100, function(){
          if (callback){
            // console.log('callback exists');
            callback(pingInput, pongInput, gameLength);
          }
        });//countdown-start ending
      });//countdown1 ending
    });//countdown2 ending
  });//countdown3 ending
}//countDown function ending

////////////////////////////////////////center div////////////////////////////////////////////////

function motionLeft(callback){
  $('#left-motion').fadeIn(500).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      console.log('motionLeft ' + counter)
      if (counter<gameLength){
        callback(motionLeft);
      } else {
        callback();
      }
    }
  });
}
function motionRight(callback){
  $('#right-motion').fadeIn( 500 ).delay(500).fadeOut(500, function(){
    if (callback){
      counter++;
      console.log('motionRight '+ counter)
      if (counter<gameLength){
        callback(motionRight);
      } else {
        callback();
      }
    }
  });
}

// function centerAnimationLoop(length){
//     motionLeft(motionRight);
//   }

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


function leftPlayerTurn(output){
  console.log('left player ' + output);
  
  //if output = ping - show ping img, add 1 point

  //if output = pong - show pong img, add 2 point
  
  //if output = ping-pong - show ping-pong img, add 5 point
  
  //if output = number - show number
  
  // show left-ball img


}
function rightPlayerTurn(output){
  console.log('right player ' + output);  
  //if output = ping - show ping img, add 1 point
  
  //if output = pong - show pong img, add 2 point
  
  //if output = ping-pong - show ping-pong img, add 5 point
  
  //if output = number - show number
  
  // show right-ball img


}


function gamePlay(ping, pong, length) {
  var output;
  // console.log('gamePlay called');
  motionLeft(motionRight);
  //basic game loop
  for (i=1; i<=length; i++) {
    // console.log('loop ' + i)
    //if-else to establish output value;
    if (i%ping===0 && i%pong===0) {
        output = 'ping-pong';
      } else if (i%pong===0) {
        output = 'pong';
      } else if (i%ping===0) {
        output = 'ping';
      } else {
        output = i;
    }//end of if-else to set output

    if (i%2!==0) {leftPlayerTurn(output);} //if odd then it's the left players turn
    if (i%2===0) {rightPlayerTurn(output);} // if even then it's the right players turn
  }//end of for-loop
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
    countDown(gamePlay);
   

    

  }); //ending of click function



}); //ending of document.ready;