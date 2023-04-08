let outcome;
let playerWins = 0;
let computerWins = 0;
let draws = 0;
let showdownResults;

let playerWeapon;
let computerWeapon;

const buttons = document.getElementsByTagName("button");

function playerChoice(e) {

    if (e.target.id === 'rock') {
        playerWeapon = 'rock';
    } else if (e.target.id === 'paper') {
        playerWeapon = 'paper';
    } else if (e.target.id === 'scissors') {
        playerWeapon = 'scissors';
    }
    console.log(playerWeapon);
    return playerWeapon;
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

function computerChoice(e) {
    let randomNumber = Math.random() * 10;

    if (randomNumber < 3) {
        computerWeapon = 'rock';
    } else if (randomNumber >= 3 && randomNumber < 6) {
        computerWeapon = 'paper';
    } else if (randomNumber >= 6) {
        computerWeapon = 'scissors';
    }
    console.log(computerWeapon);
    return computerWeapon;
}

function winnerWinner(e) {
    if (playerWeapon === 'rock') {
        if (computerWeapon === 'scissors') {
            outcome = "Player wins!";
        } else if (computerWeapon === 'paper'){
            outcome = "Computer wins!";
        } else {
            outcome = "Tragic. Everyone loses."
        }
        return outcome;
    } else if (playerWeapon === 'paper') {
        if (computerWeapon === 'rock') {
            outcome = "Player wins!";
        } else if (computerWeapon === 'scissors') {
            outcome = "Computer wins!";
        } else {
            outcome = "Tragic. Everyone loses."
        }
        return outcome;
    } else if (playerWeapon === 'scissors') {
        if (computerWeapon === 'rock') {
            outcome = "Computer wins!";
        } else if (computerWeapon === 'paper') {
            outcome = "Player wins!";
        } else {
            outcome = "Tragic. Everyone loses."
        }
        return outcome;
    }
}

function changeText(e) {
    document.getElementById('winner').innerText = `${outcome}`;
}

for (let button of buttons) {
    button.addEventListener('click', playerChoice);
    button.addEventListener('click', computerChoice);
    button.addEventListener('click', winnerWinner);
    button.addEventListener('click', changeText);
}

/* function game() {
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        getRandomNumber();
        getComputerChoice(randomNumber);
        playGame(playerWeapon, computerWeapon);
        console.log(outcome);

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