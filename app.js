/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/



init();

document.querySelector(".btn-new").addEventListener("click", init)


// Roll dices and add dice score to current score
function diceAndAddScore() {
   document.querySelector(".btn-roll").addEventListener("click", function () {
      if (gamePlaying) {
         console.log(gamePlaying)
         document.querySelector(".dice").style.display = "block";
         document.getElementById("current-0").innerHTML = 0;
         document.getElementById("current-1").innerHTML = 0;
         // dice
         var dice = Math.floor(Math.random() * 6 + 1);
         document.querySelector(".dice").src = `img/dice-${dice}.png`;
         console.log(dice);
         if (dice !== 1) {
            // Add score to current score
            roundScore += dice;
            document.getElementById("current-" + activePlayer).textContent = roundScore;
         } else {
            nextPlayer();
         }
      }
   });
}
diceAndAddScore();

// Next player
function nextPlayer() {
   roundScore = 0;
   activePlayer === 1 ? (activePlayer = 0) : (activePlayer = 1);
   document.getElementById("current-" + activePlayer).textContent = 0;
   document.querySelector(".player-0-panel").classList.toggle("active");
   document.querySelector(".player-1-panel").classList.toggle("active");
}

// Add to global score
document.querySelector(".btn-hold").addEventListener("click", function () {
   if (gamePlaying) {

      document.getElementById("current-0").innerHTML = 0;
      document.getElementById("current-1").innerHTML = 0;
      document.getElementById("score-" + activePlayer).innerHTML = score[activePlayer] += roundScore;
      if (score[activePlayer] >= 15) {
         document.getElementById("name-" + activePlayer).innerHTML = "Winner!";
         document.querySelector(`.player-${activePlayer}-panel`).classList.add("winner");
         document.querySelector(`.player-${activePlayer}-panel`).classList.remove("active");
         document.querySelector(".dice").style.display = "none";
         gamePlaying = false;
         console.log(gamePlaying)
      } else {
         nextPlayer();
      }
   }
});

function init() {
   activePlayer = 0
   gamePlaying = true;
   roundScore = 0;
   score = [0, 0];
   document.querySelector(`.player-0-panel`).classList.remove("winner");
   document.querySelector(`.player-1-panel`).classList.remove("winner");
   document.querySelector(".player-0-panel").classList.remove("active");
   document.querySelector(".player-1-panel").classList.remove("active");
   document.querySelector(".player-0-panel").classList.add("active");
   document.getElementById("name-0").innerHTML = "Player 1";
   document.getElementById("name-1").innerHTML = "Player 2";
   document.getElementById("score-0").innerHTML = 0;
   document.getElementById("score-1").innerHTML = 0;
   document.getElementById("current-0").innerHTML = 0;
   document.getElementById("current-1").innerHTML = 0;
   document.querySelector(".dice").style.display = "none";

}