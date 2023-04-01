let playerWeapon;
let ominousMessage;
let randomNumber;
let computerWeapon;
let outcome;

function getPlayerChoice() {
    playerWeapon = prompt("Choose your weapon", "rock, paper, or scissors?");

    if (playerWeapon !== 'rock' || playerWeapon !== 'paper' || playerWeapon !== 'scissors') {
        ominousMessage = "Choose a proper weapon.";
    }
}

function getRandomNumber() {
    randomNumber = Math.random() * 10;

    return randomNumber;
}

function getComputerChoice(randomNumber) {
    computerWeapon = randomNumber;

    if (computerWeapon < 3) {
        computerWeapon = 'rock';
    } else if (computerWeapon >= 3 && computerWeapon < 6) {
        computerWeapon = 'paper';
    } else if (computerWeapon >= 6) {
        computerWeapon = 'scissors';
    }

    return computerWeapon;
}

function playGame(playerWeapon, computerWeapon) {
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
    } else if (playerWeapon !== 'rock' || playerWeapon !== 'paper' || playerWeapon !== 'scissors') {
        return ominousMessage;
    }
}