let playerWeapon;
let randomNumber;

function getRandomNumber() {
    randomNumber = Math.random() * 10;

    return randomNumber;
}

function getComputerChoice(randomNumber) {
    let computerWeapon = randomNumber;

    if (computerWeapon < 3) {
        computerWeapon = 'rock';
    } else if (computerWeapon >= 3 && computerWeapon < 6) {
        computerWeapon = 'paper';
    } else if (computerWeapon >= 6) {
        computerWeapon = 'scissors';
    }

    return computerWeapon;
}