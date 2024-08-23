let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const RPSIssues = ["rock", "paper", "scissors"];
    randomValue = Math.floor(Math.random() * 3);
    const computerMove = RPSIssues[randomValue];
    return computerMove
};

function getHumanChoice() {
    const humanChoice = prompt("Enter your move (rock, paper, scissors)").toLowerCase();
    console.log(humanChoice)
    if (humanChoice == "rock" | humanChoice == "paper" | humanChoice == "scissors") {
        return humanChoice
    } else {
        console.log("Please enter a valid value (Rock, Paper, Scissors)");
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("You won ! Rock vs scissors !");
            humanScore += 1;
        } else if (computerChoice == "paper") {
            console.log("You lost ! Rock vs paper !");
            computerScore += 1;
        } else {
            console.log("Rock vs rock - it's a draw !");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You won ! Paper vs rock !");
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            console.log("You lost ! Paper vs scissors !");
            computerScore += 1;
        } else {
            console.log("Paper vs paper - it's a draw !");
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You won ! Scissors vs paper !");
            humanScore += 1;
        } else if (computerChoice == "rock") {
            console.log("You lost ! Scissors vs rock !");
            computerScore += 1;
        } else {
            console.log("Scissors vs scissors - it's a draw !");
        }
    } else {
        console.log("You played an unvalid hand");
    };
    console.log(`You ${humanScore} - Computer ${computerScore}`);
}



const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice);

