function getComputerChoice() {
    const choice = ['rock', 'paper', 'scissors'];
    return choice(Math.floor(Math.random() * choice.length));
}

function roundPlay(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return (`It's a tie! You both picked ${playerSelection}`);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return ('You lose! Paper beats Rock');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return ('You win! Scissors beats Paper');
    } else {
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
} 