/*
let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    const pick = ['rock', 'paper', 'scissors'];
    return pick[Math.floor(Math.random() * pick.length)];
 }
 
 function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
       return `It's a tie! you both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        // playerScore = playerScore + 1, playerScore--, playerScore = playerScore - 1
        playerScore++
       return "You win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++
       return "You win! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++
       return "You win! Scissors beats Paper";
    } else {
        computerScore++
       return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
 }
 
function game() {
    for(let i = 0; i < 5; i++) {
        const playerSelection = prompt("Start the game by picking among 'Rock, Paper, Scissors'").toLowerCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
   
    if(playerScore > computerScore) {
        return 'You beat the computer!';
    } else if(playerScore < computerScore) {
        return 'You lost to the computer!';
    } else {
        return 'You tied with the computer!';
    }
} */

const selectionButtons = document.querySelectorAll('[data-selection]')
const SELECTIONS = [
    {
        name: 'rock',
        emoji: '🪨',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '📝',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✂️',
        beats: 'paper'
    }
]

selectionButtons.forEach(selectionButtons => {
    selectionButtons.addEventListener('click', e => {
        const selectionName = selectionButtons.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selectionName)
    })
})

function makeSelection(selection) {
    console.log(selection)
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
}