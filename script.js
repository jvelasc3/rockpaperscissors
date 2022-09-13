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
