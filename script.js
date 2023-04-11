let domDefault = document.body.innerText;
let playerWeapon;
let computerWeapon;

let count = 0;
let roundCount = document.getElementById("roundcount");

let playerScore = 0;
let playerCount = document.getElementById("playerscore");

let computerScore = 0;
let computerCount = document.getElementById("computerscore");

let score = document.getElementById('winner');
let scoreString = score.textContent;

let finalWinnerName;

let playAgainButton = document.getElementById("playagainbutton");

const buttons = document.getElementsByClassName("btn");

function playerChoice(e) {

    if (e.target.id === 'rock') {
        playerWeapon = 'rock';
    } else if (e.target.id === 'paper') {
        playerWeapon = 'paper';
    } else if (e.target.id === 'scissors') {
        playerWeapon = 'scissors';
    }
    return playerWeapon;
}

function computerChoice(e) {
    let randomNumber = Math.random() * 10;

    if (randomNumber < 3) {
        computerWeapon = 'rock';
    } else if (randomNumber >= 3 && randomNumber < 6) {
        computerWeapon = 'paper';
    } else if (randomNumber >= 6) {
        computerWeapon = 'scissors';
    }
    return computerWeapon;
}

function changeText(string) {
    document.getElementById('winner').innerText = string;
}

function winnerWinner(e) {
    if (playerWeapon === 'rock') {
        if (computerWeapon === 'scissors') {
            changeText('Player wins!');
        } else if (computerWeapon === 'paper'){
            changeText('Computer wins!');
        } else if (computerWeapon === 'rock') {
            changeText('Tragic. We all lose in the game of rps');
        }
    } else if (playerWeapon === 'paper') {
        if (computerWeapon === 'rock') {
            changeText('Player wins!');
        } else if (computerWeapon === 'scissors') {
            changeText('Computer wins!');
        } else if (computerWeapon === 'paper') {
            changeText('Tragic. We all lose in the game of rps');
        }
    } else if (playerWeapon === 'scissors') {
        if (computerWeapon === 'rock') {
            changeText('Computer wins!');
        } else if (computerWeapon === 'paper') {
            changeText('Player wins!');
        } else if (computerWeapon === 'scissors') {
            changeText('Tragic. We all lose in the game of rps');
        }
    }
}

for (let button of buttons) {
    button.addEventListener('click', playerChoice);
    button.addEventListener('click', computerChoice);
    button.addEventListener('click', winnerWinner);
    button.addEventListener('click', scoreCard);
    button.addEventListener('click', gameIncrement);
}

function scoreCard() {
    scoreString = score.innerText;
    if (scoreString === 'Player wins!') {
        playerScore++;
        playerCount.innerText = playerScore;
    } else if (scoreString === 'Computer wins!') {
        computerScore++;
        computerCount.innerText = computerScore;
    }
}

function resetGame(e) {
    playerWeapon = '';
    computerWeapon = '';

    count = 0;
    document.getElementById('roundcount').innerText = count;

    playerScore = 0;
    document.getElementById('playerscore').innerText = playerScore;
    playerCount = document.getElementById("playerscore");

    computerScore = 0;
    document.getElementById('computerscore').innerText = computerScore;
    computerCount = document.getElementById('computerscore');

    score = document.getElementById('winner');
    scoreString = '';

    document.getElementById('finalwinner').innerText = "Final Winner";
    enableButtons();
}

function changeButtons() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    document.getElementById("playagainbutton").disabled = false;
}

function enableButtons() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("playagainbutton").disabled = true;
}

function whoWon() {
    if (computerScore === playerScore) {
        finalWinnerName = "Nobody wins!";
    } else if (computerScore > playerScore) {
        finalWinnerName = "The computer always wins!";
    } else if (playerScore > computerScore) {
        finalWinnerName = "Player won the world!";
    }
    const element = document.getElementById('finalwinner');
    element.innerText = finalWinnerName;
    changeButtons();
    playAgainButton.addEventListener('click', resetGame);
}

function gameIncrement() {
    if (count === 4 ) {
        count++;
        roundCount.innerText = count;
        whoWon();
    } else {
        count++;
        roundCount.innerText = count;
    }
}