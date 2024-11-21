let userName = prompt("Введіть своє ім'я:");
if (!userName) userName = "Користувач";
let userScore = 0;
let computerScore = 0;
const userScoreElement = document.getElementById("userScore");
const computerScoreElement = document.getElementById("computerScore");
const userNumberElement = document.getElementById("userNumber");
const computerNumberElement = document.getElementById("computerNumber");
const playButton = document.getElementById("playButton");
const winnerMessage = document.getElementById("winnerMessage");
userScoreElement.textContent = `${userName}: 0`;
playButton.addEventListener("click", playGame);
function playGame() {
    if (userScore < 3 && computerScore < 3) {
        const userNumber = Math.floor(Math.random() * 10) + 1;
        const computerNumber = Math.floor(Math.random() * 10) + 1;
        userNumberElement.textContent = `Число ${userName}: ${userNumber}`;
        computerNumberElement.textContent = `Число Комп'ютера: ${computerNumber}`;
        if (userNumber > computerNumber) {
            userScore++;
        } else if (computerNumber > userNumber) {
            computerScore++;
        }
        updateScores();
    }
    if (userScore === 3 || computerScore === 3) {
        displayWinner();
    }
}
function updateScores() {
    userScoreElement.textContent = `${userName}: ${userScore}`;
    computerScoreElement.textContent = `Комп'ютер: ${computerScore}`;
}
function displayWinner() {
    winnerMessage.classList.remove("hidden");
    winnerMessage.textContent =
        userScore === 3 ? `Переміг ${userName}!` : "Переміг Комп'ютер!";
    playButton.textContent = "Почати спочатку";
    playButton.removeEventListener("click", playGame);
    playButton.addEventListener("click", resetGame);
}
function resetGame() {
    userScore = 0;
    computerScore = 0;
    userNumberElement.textContent = `Число ${userName}: -`;
    computerNumberElement.textContent = `Число Комп'ютера: -`;
    winnerMessage.classList.add("hidden");
    updateScores();
    playButton.textContent = "Грати";
    playButton.removeEventListener("click", resetGame);
    playButton.addEventListener("click", playGame);
}
