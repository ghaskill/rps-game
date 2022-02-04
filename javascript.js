let rpsArray = [
  "Rock",
  "Paper",
  "Scissors"
];

//let playerInput = prompt("Rock, paper, or scissors?");

//const playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);

//let computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];

//const computerChoice = computerPlay;

function rockPaperScissors(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    console.log("tie");
  } else if (playerChoice.length - computerChoice.length == -4 ||
             playerChoice.length - computerChoice.length == 3 ||
             playerChoice.length - computerChoice.length == 1) {
      console.log("win");
      return userWins++;
  } else {
    console.log("loss");
    return computerWins++;
  }
}

function gameLoop() {

  i = 0;
  userWins = 0;
  computerWins = 0;

  while (i < 5) {
    let playerInput = prompt("Rock, paper, or scissors?");
    let playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);
    let computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];
    let computerChoice = computerPlay;

    rockPaperScissors(playerChoice, computerChoice);
    i++;
  }
  if (userWins > computerWins) {
    console.log("Player wins " + userWins + " to " + computerWins);
  } else if (computerWins > userWins) {
    console.log("Witness the rise of the machine");
  }
}
