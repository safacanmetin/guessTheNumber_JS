const randomNumber = Math.floor(Math.random() * 10) + 1;

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value;
    const resultMessage = document.getElementById("resultMessage");

    if (userGuess == randomNumber) {
        resultMessage.textContent = "Congrats, you found it!";
        resultMessage.style.color = "green";
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = "Wrong guess! Guess greater.";
        resultMessage.style.color = "red";
    } else {
        resultMessage.textContent = "Wrong guess! Guess less.";
        resultMessage.style.color = "red";
    }
}
