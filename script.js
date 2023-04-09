let outcome;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let showdownResults;

let playerWeapon;
let computerWeapon;

let count = 0;
let roundCount = document.getElementById("roundcount");

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

function gameIncrement() {
    if (count === 5) {
        button.removeEventListener('click', playerChoice);
        button.removeEventListener('click', computerChoice);
        button.removeEventListener('click', winnerWinner);
        button.removeEventListener('click', gameIncrement);
    } else {
        count++;
        roundCount.innerText = count;
    }
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
        return outcome;
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

/* function countGame() {
    let increment = document.getElementById('roundcount');
    increment += increment.innerText;
} */

for (let button of buttons) {
    button.addEventListener('click', playerChoice);
    button.addEventListener('click', computerChoice);
    button.addEventListener('click', gameIncrement);
    button.addEventListener('click', winnerWinner);
}

/* function getPlayerChoice() {
    playerWeapon = prompt("Choose your weapon", "rock, paper, or scissors?");

    playerWeapon = playerWeapon.toLowerCase();

    if (playerWeapon !== 'rock' || playerWeapon !== 'paper' || playerWeapon !== 'scissors') {
        ominousMessage = "Choose a proper weapon.";
    }
} */

/* function getRandomNumber() {
    randomNumber = Math.random() * 10;

    return randomNumber;
} */

/*

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice;
        computerChoice;
        winnerWinner;

        if (outcome === "Player wins!") {
            playerWins++;
        } else if (outcome === "Computer wins!") {
            computerWins++;
        } else if (outcome === "Tragic. Everyone loses.") {
            draws++;
        }
    }

    if (draws > 2 || computerWins == playerWins) {
        showdownResults = "Tragedy. No one wins."
    } else if (playerWins > computerWins) {
        showdownResults = "Congats! Player wins it all!";
    } else if (computerWins > playerWins) {
        showdownResults = "Ha. Can't even beat the computer.";
    }

    console.log(`The results are in! ${showdownResults}`);
} */