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

const WIN_ROCK = `${winMessage} ${rockMessage}`;
const LOSE_ROCK = `${loseMessage} ${rockMessage}`;
const WIN_PAPER = `${winMessage} ${paperMessage}`;
const LOSE_PAPER = `${loseMessage} ${paperMessage}`;
const WIN_SCISSORS = `${winMessage} ${scissorsMessage}`;
const LOSE_SCISSORS = `${loseMessage} ${scissorsMessage}`;

//Establishes button references
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//Establishes scoreboard references
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');

//Establishes notification box reference
const notificationDisplay = document.querySelector('#notification');

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

let playerScore = 0;
let computerScore = 0;
function playRound(playerChoice) {
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        notificationDisplay.textContent = drawMessage;
        return;
    };
    let choiceCombination = playerChoice + computerChoice;
    switch (choiceCombination) {
        case 'rockpaper':
            incrementScore('computer');
            updateNotificationDisplay(LOSE_ROCK);
            break;
        case 'rockscissors':
            incrementScore('player');
            updateNotificationDisplay(WIN_ROCK);
            break;
        case 'paperrock':
            incrementScore('player');
            updateNotificationDisplay(WIN_PAPER);
            break;
        case 'paperscissors':
            incrementScore('computer');
            updateNotificationDisplay(LOSE_PAPER);
            break;
        case 'scissorsrock':
            incrementScore('computer');
            updateNotificationDisplay(LOSE_SCISSORS);
            break;
        case 'scissorspaper':
            incrementScore('player');
            updateNotificationDisplay(WIN_SCISSORS);
            break;
        default:
            incrementScore(null);
    }
}

function incrementScore(victor) {
    if (!victor) {
        console.log('ERROR');
        return 'ERROR';
    }
    victor === 'player' ? ++playerScore : ++computerScore;
    updateScoreDisplays();
}
function updateScoreDisplays() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function updateNotificationDisplay(notificationMessage) {
    if (playerScore === 5) {
        notificationDisplay.textContent = `${notificationMessage} Player has won! Scores will now be reset to 0.`;
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        notificationDisplay.textContent = `${notificationMessage} Computer has won! Scores will now be reset to 0.`;
        playerScore = 0;
        computerScore = 0;
    } else {
        notificationDisplay.textContent =  `${notificationMessage}`;
    }
}