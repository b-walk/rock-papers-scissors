function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
        return 'rock';
    } else if (randomNum === 1) {
        return 'paper';
    } else if (randomNum === 2) {
        return 'scissors';
    } else {
        console.log('ERROR');
        return;
    }
}

//Enumerates possible messages to be displayed following a round being played
const drawMessage = 'Draw!';
const winMessage = 'Victory!';
const loseMessage = 'Defeat!';

const rockMessage = 'Rock crushes scissors!';
const paperMessage = 'Paper covers rock!';
const scissorsMessage = 'Scissors cut paper!';

//Establishes button references
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//Establishes scoreboard references
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score')

//Executes the playRound function on button click
let playerChoice;
rockButton.addEventListener('click', () => {
    playRound('rock');
});
paperButton.addEventListener('click', () => {
    playRound('paper');
});
scissorsButton.addEventListener('click', () => {
    playRound('scissors');
});

let playerScore;
let computerScore;
function playRound(playerChoice) {
    getComputerChoice();
    if (playerChoice === computerChoice) console.log(drawMessage);
    let choiceCombination = playerChoice + computerChoice;
    switch (choiceCombination) {
        case 'rockpaper':
            console.log(`${loseMessage} ${paperMessage}`);
            ++computerScore;
            break;
        case 'rockscissors':
            console.log(`${winMessage} ${rockMessage}`);
            ++playerScore;
            break;
        case 'paperrock':
            console.log(`${winMessage} ${paperMessage}`);
            ++playerScore;
            break;
        case 'paperscissors':
            console.log(`${loseMessage} ${scissorsMessage}`);
            ++computerScore;
            break;
        case 'scissorsrock':
            console.log(`${loseMessage} ${rockMessage}`);
            ++computerScore;
            break;
        case 'scissorspaper':
            console.log(`${winMessage} ${scissorsMessage}`);
            ++playerScore;
            break;
        default:
            console.log('ERROR');
    }
    if (playerScore === 5) {
        console.log('Player has won!\nScores will now be reset to 0.');
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        console.log('Computer has won!\nScores will now be reset to 0.');
        playerScore = 0;
        computerScore = 0;
    }
}