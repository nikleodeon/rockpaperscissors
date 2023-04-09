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

const buttons = document.getElementsByTagName("button");

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
            changeText('Computer  wins!');
        } else {
            changeText('Tragic. Everyone loses.');
        }
    } else if (playerWeapon === 'paper') {
        if (computerWeapon === 'rock') {
            changeText('Player wins!');
        } else if (computerWeapon === 'scissors') {
            changeText('Computer  wins!');
        } else {
            changeText('Tragic. Everyone loses.');
        }
    } else if (playerWeapon === 'scissors') {
        if (computerWeapon === 'rock') {
            changeText('Computer  wins!');
        } else if (computerWeapon === 'paper') {
            changeText('Player wins!');
        } else {
            changeText('Tragic. Everyone loses.');
        }
    }
}

for (let button of buttons) {
    button.addEventListener('click', playerChoice);
    button.addEventListener('click', computerChoice);
    button.addEventListener('click', gameIncrement);
    button.addEventListener('click', winnerWinner);
    button.addEventListener('click', scoreCard);
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

function gameIncrement() {
    if (count === 4 ) {
        count++;
        roundCount.innerText = count;
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
        whoWon();
    } else {
        count++;
        roundCount.innerText = count;
    }
}

function whoWon() {
    if (playerScore > computerScore) {
        finalWinnerName = "Player won the world!";
    } else if (computerScore > playerScore) {
        finalWinnerName = "The computer always wins!";
    } else if (computerScore === playerScore) {
        finalWinnerName = "Nobody wins!";
    }
    const element = document.getElementById('finalWinner');
    element.innerText = finalWinnerName;
}