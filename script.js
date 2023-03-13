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
const winMessage = 'Player wins!';
const loseMessage = 'Computer wins!';

function playRound(playerChoice, computerChoice) {
    let choiceCombination = playerChoice + computerChoice;
    if (playerChoice === computerChoice) {
        console.log(drawMessage);
    };
    switch (choiceCombination) {
        case 'rockpaper':
            console.log(loseMessage);
            break;
        case 'rockscissors':
            console.log(winMessage);
            break;
        case 'paperrock':
            console.log(winMessage);
            break;
        case 'paperscissors':
            console.log(loseMessage);
            break;
        case 'scissorsrock':
            console.log(loseMessage);
            break;
        case 'scissorspaper':
            console.log(winMessage);
            break;
        default:
            console.log('SWITCH_STATEMENT_ERROR');
    }

}