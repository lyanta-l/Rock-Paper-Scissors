function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}
function getComputerChoice() {
    let i = getRandomIntInclusive(0, 2);
    switch (i) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}
function getHumanChoice() {
    let choice = prompt("choose rock,paper or scissors.");
    return choice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (computerChoice === "rock") {
            switch (humanChoice) {
                case "rock":
                    console.log("Tie, same options");
                    break;
                case "paper":
                    console.log("You win! paper beats rock");
                    humanScore++;
                    break;
                case "scissors":
                    console.log("You lose! rock beats scissors");
                    computerScore++;
                    break;
            }
        }
        else if (computerChoice === "paper") {
            switch (humanChoice) {
                case "rock":
                    console.log("You lose! paper beats rock");
                    computerScore++;
                    break;
                case "paper":
                    console.log("Tie, same options");
                    break;
                case "scissors":
                    console.log("You win! scissors beats paper");
                    humanScore++;
                    break;
            }
        }
        else if (computerChoice === "scissors") {
            switch (humanChoice) {
                case "rock":
                    console.log("You win! rock beats scissors");
                    humanScore++;
                    break;
                case "paper":
                    console.log("You lose! scissors beats paper");
                    computerScore++;
                    break;
                case "scissors":
                    console.log("Tie, same options");
                    break;
            }
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("your score is:" + humanScore + "computer's score is:" + computerScore);

}

playGame();