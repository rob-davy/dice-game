function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImage1 = "images/dice" + randomNumber1 + ".png";
  var randomImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", randomImage1);
  document.querySelector(".img2").setAttribute("src", randomImage2);

  var heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    heading.textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = "Player 2 Wins! 🚩";
  } else {
    heading.textContent = "It's a Draw!";
  }
}

document.getElementById("rollBtn").addEventListener("click", rollDice);