let computerChoice;
getComputerChoice();
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    (randomNum === 0) ? computerChoice = 'rock' :
    (randomNum === 1) ? computerChoice = 'paper' :
    computerChoice = 'scissors';
    console.log(randomNum, computerChoice);
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
            break;
        case 'rockscissors':
            console.log(`${winMessage} Rock beats scissors!`);
            break;
        case 'paperrock':
            console.log(`${winMessage} Paper beats rock!`);
            break;
        case 'paperscissors':
            console.log(`${loseMessage} Scissors beat paper!`);
            break;
        case 'scissorsrock':
            console.log(`${loseMessage} Rock beats scissors!`);
            break;
        case 'scissorspaper':
            console.log(`${winMessage} Scissors beat paper!`);
            break;
        default:
            console.log('SWITCH_STATEMENT_ERROR');
    }

}