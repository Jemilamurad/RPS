const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

console.log(getComputerChoice());

const getHumanChoice = () => {
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
};

console.log(getHumanChoice());

const playRound = (humanChoice, computerChoice) => {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(
      `It's a tie! Both chose ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      }`
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(
      `You win! ${
        humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)
      } beats ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      }`
    );
    humanScore++;
  } else {
    console.log(
      `You lose! ${
        computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
      } beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`
    );
    computerScore++;
  }
};

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
ro;
const playGame = () => {
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
};
