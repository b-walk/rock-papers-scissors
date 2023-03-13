function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    (randomNum === 0) ? computerChoice = 'rock' :
    (randomNum === 1) ? computerChoice = 'paper' :
    computerChoice = 'scissors';
    return computerChoice;
}
let computerChoice;

const drawMessage = 'Draw!';
const winMessage = 'Victory!';
const loseMessage = 'Defeat!';

function playRound(playerChoice, computerChoice) {
    let choiceCombination = playerChoice + computerChoice;
    if (playerChoice === computerChoice) {
        console.log(drawMessage);
    };
    switch (choiceCombination) {
        case 'rockpaper':
            console.log(`${loseMessage} Paper beats rock!`);
            computerScore += 1;
            break;
        case 'rockscissors':
            console.log(`${winMessage} Rock beats scissors!`);
            playerScore += 1;
            break;
        case 'paperrock':
            console.log(`${winMessage} Paper beats rock!`);
            playerScore += 1;
            break;
        case 'paperscissors':
            console.log(`${loseMessage} Scissors beat paper!`);
            computerScore += 1;
            break;
        case 'scissorsrock':
            console.log(`${loseMessage} Rock beats scissors!`);
            computerScore += 1;
            break;
        case 'scissorspaper':
            console.log(`${winMessage} Scissors beat paper!`);
            playerScore += 1;
    }

}

let playerScore;
let computerScore;
function game() {
    playerScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerChoice = prompt('Type your selection of rock, paper, or scissors.', '');
        playerChoice = playerChoice.toLowerCase();
        getComputerChoice();
        playRound(playerChoice, computerChoice);
    }
    console.log(`Player score: ${playerScore}\n Computer score: ${computerScore}`);
}