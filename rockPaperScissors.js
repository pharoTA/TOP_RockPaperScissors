function getComputerChoice() {
    const RPSIssues = ["Rock", "Paper", "Scissors"];
    randomValue = Math.floor(Math.random() * 3);
    computerMove = RPSIssues[randomValue];
    return computerMove
};

computerMove = getComputerChoice();