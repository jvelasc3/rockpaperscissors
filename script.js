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
      validatedInput = true;
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
  const response = checkRound(playerSelection, computerSelection);
  if (response === "Tie") {
    return "Tie Game";
  } else if (response === "Player") {
    return `Player Wins ${playerSelection} beats ${computerSelection}`;
  } else {
    return `Player loses! ${computerSelection} beats ${playerSelection}`;
  }
}
