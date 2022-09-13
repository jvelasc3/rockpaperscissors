const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let choice = options[Math.floor(Math.random() * options.length)];
  console.log(choice);
  return choice;
}

function getPlayerChoice() {
  let errorInput = false;
  while (errorInput === false) {
    const choice = prompt("Pick: Rock, Paper or Scissors?");
    if (choice == null) {
      continue;
    }
    const choiceLower = choice.toLowerCase();
    if (options.includes(choiceLower)) {
      errorInput = true;
      return choiceLower;
    }
  }
}

function win_lose_tie(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function playRound(playerSelection, computerSelection) {
  const response = win_lose_tie(playerSelection, computerSelection);
  if (response === "Tie") {
    return "Tie Game";
  } else if (response === "Player") {
    return `Player Wins ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Player loses! ${computerSelection} beats ${playerSelection}`;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    if (i == 0) {
      console.log("Round 1");
    } else if (i === 4) {
      console.log("Last Round");
    }
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    console.log("---------------");

    if (win_lose_tie(playerSelection, computerSelection) === "Player") {
      playerScore++;
    } else if (
      win_lose_tie(playerSelection, computerSelection) === "Computer"
    ) {
      computerScore++;
    }
  }
  if (playerScore > computerScore) {
    console.log(`Player won by ${playerScore} out of 5`);
  } else if (playerScore < computerScore) {
    console.log(`Computer won by ${computerScore} out of 5`);
  } else {
    console.log("Tie Game!");
  }
}

game();
