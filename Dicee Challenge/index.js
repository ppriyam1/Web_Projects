var randomNumber1 = Math.random();
var randomNumber2 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;
randomNumber2 = Math.floor(randomNumber2*6) + 1;

if(randomNumber1>randomNumber2){
  //player1 wins
  document.querySelector("h1").innerHTML = "🚩 player1 Wins!";
}else if(randomNumber1<randomNumber2){
  //player2 wins
  document.querySelector("h1").innerHTML = "player2 Wins! 🚩";
}else if(randomNumber1===randomNumber2){
  //draw
  document.querySelector("h1").innerHTML = "Draw!";
}

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

//document.querySelectorAll("img").forEach((function(x){ x.setAttribute("src", "images/dice"+randomNumber1+".png");}));
