/* NICE ROCK PAPER SCISSORS
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
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

selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection) {
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection)

    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)

    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
    return selection.beats === opponentSelection.name
}

function randomSelection() {
    const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
    return SELECTIONS[randomIndex]
} 
*/



// start by creating ELEMENTS
const userChoiceDisplay = document.getElementById('userChoice');
const computerChoiceDisplay = document.getElementById('computerChoice');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


// determine how to display an event every time a button choice is clicked
choices.forEach(choices => choices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    getComputerChoice();
    getResult();
}))

// generate random computerChoice when userChoice is selected
function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length) + 1

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }
    if(randomNumber === 2) {
        computerChoice = 'paper'
    }
    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

// generate result once both choices are shown
function getResult() {
    if(computerChoice === userChoice) {
        result = "It's a tie!"
    }
    if(computerChoice === 'rock' && userChoice === 'paper') {
        
        result = "You win!"
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        
        result = "You lose!"
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        
        result = "You lose!"
    }
    if(computerChoice === 'paper' && userChoice === 'scissors') {
        
        result = "You win!"
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        
        result = "You lose!"
    }
    if(computerChoice === 'scissors' && userChoice === 'rock') {
        
        result = "You win!"
    }
    resultDisplay.innerHTML = result
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    let gameWinner = '';
}

// determine who won to 5 points first
function endGame() {
    if(playerWin === 5) {
        gameWinner = 'You WIN!';
        resultDisplay.innerHTML = gameWinner;

        // disable game buttons after there is a winner
        document.getElementById('rock').disable = true;
        document.getElementById('paper').disable = true;
        document.getElementById('scissors').disable = true;

        // create new DOM button to replay game
        const playAgain = document.createElement('playAgainBtn');
        playAgain.innerHTML = 'Play Again!';
        resultDisplay.appendChild(playAgain);

        // will reload page once btn is clicked
        playAgain.addEventListener('click', () => {
            location.reload();
        })
    } else {
        gameWinner = 'COMPUTER WINS!';
        resultDisplay.innerHTML = gameWinner;

        // disable game buttons after there is a winner
        document.getElementById('rock').disable = true;
        document.getElementById('paper').disable = true;
        document.getElementById('scissors').disable = true;

        // create new DOM button to replay game
        const playAgain = document.createElement('playAgainBtn');
        playAgain.innerHTML = 'Play Again!';
        resultDisplay.appendChild(playAgain);

        // will reload page once btn is clicked
        playAgain.addEventListener('click', () => {
            location.reload();
        })
    }
}

game();



/*
let userScore = 0;
let computerScore = 0;

const computerPlay = () => {
    const arrayOfChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * arrayOfChoices.length) + 1
    const compChoice = arrayOfChoices[randomNumber];
    return compChoice;
} 

const getResult = (userChoice, computerChoice) => {
    if (computerChoice === userChoice) {
        return "It's a tie!"
    } else if(computerChoice === 'rock' && userChoice === 'paper') {
        userScore++
        return "You win!"
    } else if(computerChoice === 'rock' && userChoice === 'scissors') {
        computerScore++
        return "You lose!"
    } else if(computerChoice === 'paper' && userChoice === 'rock') {
        computerScore++
        return "You lose!"
    } else if(computerChoice === 'paper' && userChoice === 'scissors') {
        userScore++
        return "You win!"
    } else if(computerChoice === 'scissors' && userChoice === 'paper') {
        computerScore++
        return "You lose!"
    } else if(computerChoice === 'scissors' && userChoice === 'rock') {
        userScore++
        return "You win!"
    }
}

const computerChoice = computerPlay();

const game = () => {
    for (let i = 0; i < 5; i++) {
    }
    if (userScore > computerScore) {
        return "You beat the computer! You rock!"
    } else if (userScore < computerScore) {
        return "The computer wins! You lose!"
    } else {
        return "You have tied with the computer..."
    }
}
*/




