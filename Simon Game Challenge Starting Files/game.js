//pushing random colors to the array using nextSequence function
var userClickedPattern = [];
var gamePattern = [];
var flag = false;

var buttonColours = ["red", "blue", "green", "yellow"];

var level = 0;

//call nextSequence the first time when keyboard key is pressed
$(document).keypress(function() {
  if (!flag) {
    $("#level-title").text("Level " + level);
    nextSequence();
    flag = true;
  }
});

function checkAnswer(currentLevel) {

  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("failed");
    $("body").css("background-color", "red");
    playSound("wrong");
    setTimeout(function() {
      $("body").css("background-color", "");
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

/* function to generate random colors and press the button with the same color */
function nextSequence() {

  userClickedPattern = [];
  //console.log("userClicked Pattern after emtying the array" + userClickedPattern.length);

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  //alert(randomChosenColour);

  //to select the button with the same id as the randomChosenColour
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(randomChosenColour);

  animatePress(randomChosenColour);
}

/* function to start over */
function startOver() {
  level = 0;
  gamePattern = [];
  flag = false;
}

// store the id(e.g. green) of the button that got clicked by the user
$('.btn').click(function() {
  var userChosenColour = $(this).attr("id");
  playSound(userChosenColour);
  animatePress(userChosenColour)
  userClickedPattern.push(userChosenColour);
  console.log("userClicked pattern: " + userClickedPattern);
  checkAnswer(userClickedPattern.length - 1);
  //alert(userChosenColour);
});

/* function to play sounds*/
function playSound(names) {
  var audio = new Audio('sounds/' + names + '.mp3');
  audio.play();
}

/* function to apply animatePress on the button */
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");

  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}
