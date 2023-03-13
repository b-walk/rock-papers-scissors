let computerChoice;
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    (randomNum === 0) ? computerChoice = 'rock' :
    (randomNum === 1) ? computerChoice = 'paper' :
    computerChoice = 'scissors';
    return computerChoice;
}

const drawMessage = 'Draw!';
const winMessage = 'Victory!';
const loseMessage = 'Defeat!';

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    let choiceCombination = playerChoice + computerChoice;
    if (playerChoice === computerChoice) {
        console.log(drawMessage);
        return choiceCombination;
    };
    switch (choiceCombination) {
        case 'rockpaper':
            console.log(`${loseMessage} Paper beats rock!`);
            return choiceCombination;
            break;
        case 'rockscissors':
            console.log(`${winMessage} Rock beats scissors!`);
            return choiceCombination;
            break;
        case 'paperrock':
            console.log(`${winMessage} Paper beats rock!`);
            return choiceCombination;
            break;
        case 'paperscissors':
            console.log(`${loseMessage} Scissors beat paper!`);
            return choiceCombination;
            break;
        case 'scissorsrock':
            console.log(`${loseMessage} Rock beats scissors!`);
            return choiceCombination;
            break;
        case 'scissorspaper':
            console.log(`${winMessage} Scissors beat paper!`);
            return choiceCombination;
            break;
        default:
            console.log('SWITCH_STATEMENT_ERROR');
            return choiceCombination;
    }

}

let playerScore = 0;
let computerScore = 0;
function game() {
    let playerChoice;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt('Type your selection of rock, paper, or scissors.', '');
        getComputerChoice();
        playRound(playerChoice, computerChoice);

    }
}