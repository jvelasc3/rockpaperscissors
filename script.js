let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let i = 0;

const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");
const playerScoreText = document.querySelector(".playerScoreText");
const computerScoreText = document.querySelector(".computerScoreText");
const tieScoreText = document.querySelector(".tieScoreText");

choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerChoice();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = winner();
    scoreTracker();
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    computerScoreText.textContent = `Computer Score: ${computerScore}`;
    tieScoreText.textContent = `Tie Score: ${tieScore}`;
    i++;
    if (i <= 5) {
    } else {
      whoWon();
      reset();
    }
  })
);

function computerChoice() {
  const randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}

function winner() {
  if (player == computer) {
    return "Tie!";
  } else if (
    (player == "Rock" && computer == "Scissors") ||
    (player == "Paper" && computer == "Rock") ||
    (player == "Scissors" && computer == "Paper")
  ) {
    return "Player Wins!";
  } else {
    return "Computer Wins!";
  }
}

function scoreTracker() {
  if (winner() === "Tie!") {
    tieScore += 1;
  } else if (winner() === "Player Wins!") {
    playerScore += 1;
  } else if (winner() === "Computer Wins!") {
    computerScore += 1;
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  i = 0;
  playerScoreText.textContent = "";
  computerScoreText.textContent = "";
  tieScoreText.textContent = "";
}

function whoWon() {
  if (playerScore > computerScore) {
    alert("Game Over! Player Wins");
  } else if (playerScore < computerScore) {
    alert("Game Over! Computer Wins");
  } else {
    alert("Tie Game!");
  }
}
