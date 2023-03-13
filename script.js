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