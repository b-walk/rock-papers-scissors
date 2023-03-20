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