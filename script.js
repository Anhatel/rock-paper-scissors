function computerPlay() {
  let random = Math.floor(Math.random() * 3 + 1);

  switch (random) {
    case 1:
      return "Rock";
      break;
    case 2:
      return "Paper";
      break;
    case 3:
      return "Scissors";
      break;
    default:
      break;
  }
}

function playRound(playerSelection, computerSelection) {
  console.log("The player selected " + playerSelection);
  console.log("The computer selected " + computerSelection);

  if (playerSelection === computerSelection) {
    return (
      "It's a draw! " +
      playerSelection +
      " is equal to " +
      computerSelection +
      "."
    );
  } else if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    return "You won! " + playerSelection + " beats " + computerSelection + ".";
  } else {
    return "You lost! " + computerSelection + " beats " + playerSelection + ".";
  }
}

function game() {
  const ROUNDS = 5;
  let playerInput = "";

  for (let i = 0; i < ROUNDS; i++) {
    playerInput = prompt("ROCK, PAPER OR SCISSORS?").toLowerCase();

    if (playerInput !== "rock" && playerInput !== "paper" && playerInput !== "scissors") {
      alert("You have entered an invalid input. Please try again.");
      i = 0;
      continue;
    }

    playerInput = playerInput.replace(playerInput.charAt(0), playerInput.charAt(0).toUpperCase());

    console.log(playRound(playerInput, computerPlay()));
  }
}

game();
