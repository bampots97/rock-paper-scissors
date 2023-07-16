const playerSelection = prompt('Please enter rock, paper, or scissors');

const computerChoices = ['rock', 'paper', 'scissors'];
const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

function playRound(playerSelection, computerChoice) {
    if (!isValidChoice(playerSelection)) {
        return 'Invalid choice. Please enter rock, paper, or scissors.';
    }
    
    if (playerSelection === 'rock' && computerChoice === 'paper') {
        return `You lost! ${computerChoice} beats ${playerSelection}.`;
    } else if (playerSelection === 'paper' && computerChoice === 'scissors') {
        return `You lost! ${computerChoice} beats ${playerSelection}.`;
    } else if (playerSelection === 'scissors' && computerChoice === 'rock') {
        return `You lost! ${computerChoice} beats ${playerSelection}.`;
    } else if (playerSelection === computerChoice) {
        return 'It\'s a tie!';
    } else {
        return `You won! ${playerSelection} beats ${computerChoice}.`;
    }
}

function isValidChoice(choice) {
    return ['rock', 'paper', 'scissors'].includes(choice);
}
function game() {
    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`)
        console.log(playerSelection, computerChoice);
    console.log('');
    }
}



console.log(playRound(playerSelection, computerChoice));
