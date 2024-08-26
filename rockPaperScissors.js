/// Useful functions  

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
    const RPSIssues = ["rock", "paper", "scissors"];
    randomValue = Math.floor(Math.random() * 3);
    const computerMove = RPSIssues[randomValue];
    return computerMove
};

function checkWinner(humanScore, computerScore) {
    if (humanScore == 5) {
        const score_container = document.querySelector(".score_container");
        const winnerTitle = document.createElement("h1");
        winnerTitle.textContent = "YOU WIN ! Congratulations";
        score_container.appendChild(winnerTitle);

    } else if (computerScore == 5) {
        const score_container = document.querySelector(".score_container");
        const winnerTitle = document.createElement("h1");
        winnerTitle.textContent = "YOU LOST ! Too much bad luck";
        score_container.appendChild(winnerTitle);
    };
};


function playRound(humanChoice, computerChoice) {
    let text2display = ""
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            text2display = "You won ! Rock vs scissors !";
            humanScore += 1;
        } else if (computerChoice == "paper") {
            text2display = "You lost ! Rock vs paper !";
            computerScore += 1;
        } else {
            text2display = "Rock vs rock - it's a draw !";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            text2display = "You won ! Paper vs rock !"
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            text2display = "You lost ! Paper vs scissors !";
            computerScore += 1;
        } else {
            text2display = "Paper vs paper - it's a draw !";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            text2display = "You won ! Scissors vs paper !";
            humanScore += 1;
        } else if (computerChoice == "rock") {
            text2display = "You lost ! Scissors vs rock !";
            computerScore += 1;
        } else {
            text2display = "Scissors vs scissors - it's a draw !";
        }
    } else {
        text2display = "You played an unvalid hand";
    };
    let textForScores = `You ${humanScore} - Computer ${computerScore}`;

    const score_container = document.querySelector(".score_container");

    const textRound = document.querySelector("#textRound");
    textRound.textContent = text2display;

    const textScore = document.querySelector("#textScore");
    textScore.textContent = textForScores;

    checkWinner(humanScore, computerScore);
};

/// DOM manipulation

const playMoveButtons = document.querySelectorAll(".playmove");
console.log(playMoveButtons);
playMoveButtons.forEach((playMoveButton) => {
    playMoveButton.addEventListener("click", () => {
        let computerChoice = getComputerChoice();
        let humanChoice = playMoveButton.id;
        playRound(humanChoice, computerChoice);
        return playMoveButton.id;
    });
});
