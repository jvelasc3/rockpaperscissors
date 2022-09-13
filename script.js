function rock() {
  return "I pick Rock";
}

function paper() {
  return "I pick paper";
}

function scissor() {
  return "I pick scissor";
}

function getHumanChoice() {
  let choice = prompt("Pick Rock, Paper or Scissor");
  let answer = choice.toLowerCase();

  if (answer === "rock") {
    return rock();
  } else if (answer === "paper") {
    return paper();
  } else if (answer === "scissor") {
    return scissor();
  } else {
    return "error";
  }
}

function getComputerChoice() {
  let choice = ["rock", "paper", "scissor"];
  let answer = choice[Math.floor(Math.random() * choice.length)];
  if (answer === "rock") {
    return rock();
  } else if (answer === "paper") {
    return paper();
  } else if (answer === "scissor") {
    return scissor();
  } else {
    return "error";
  }
}
