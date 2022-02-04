let rpsArray = [
  "Rock",
  "Paper",
  "Scissors"
];

let playerInput = prompt("Rock, paper, or scissors?");

const playerChoice = playerInput.charAt(0).toUpperCase() + playerInput.slice(1);

let computerPlay = rpsArray[Math.floor(Math.random() * rpsArray.length)];

const computerChoice = computerPlay;

function rockPaperScissors(playerChoice, computerChoice) {
  console.log('Computer chose ' + computerChoice + '!');
  if (playerChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (playerChoice.length - computerChoice.length == -4 ||
             playerChoice.length - computerChoice.length == 3 ||
             playerChoice.length - computerChoice.length == 1) {
             console.log("Winrar!");
  } else {
    console.log("Big sad hours");
  }
}
