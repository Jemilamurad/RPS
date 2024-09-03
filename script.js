let humanScore = 0;
let computerScore = 0;

/*const getHumanChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  let userInput = prompt(
    "Please enter rock, paper, or scissors:"
  ).toLowerCase();

  while (!choices.includes(userInput)) {
    userInput = prompt(
      "Invalid choice. Please enter rock, paper, or scissors:"
    );
  }
  return userInput;
};*/

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};
const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();
  let result = "";

  if (humanChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    result = "You win!";
    humanScore++;
  } else {
    result = "You lose!";
    computerScore++;
  }
  document.getElementById("result").textContent = result;

  document.getElementById(
    "score"
  ).textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5) {
    document.getElementById("final").textContent =
      "congratulation! You won the game";
  } else if (computerScore === 5) {
    document.getElementById("final").textContent =
      "Sorry, the computer won the game";
  }
};

document
  .querySelector(".rock")
  .addEventListener("click", () => playRound("rock"));
document
  .querySelector(".scissors")
  .addEventListener("click", () => playRound("scissors"));
document
  .querySelector(".paper")
  .addEventListener("click", () => playRound("paper"));

/* const playGame = () => {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    if (result === "human") {
      humanScore++;
    } else if (result === "computer") {
      computerScore++;
    }
  }

  console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
 };*/
