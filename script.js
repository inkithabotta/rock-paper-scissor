function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("userChoice").innerText =
        "You chose: " + userChoice;

    document.getElementById("computerChoice").innerText =
        "Computer chose: " + computerChoice;

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win! 🎉";
    } else {
        result = "Computer Wins! 🤖";
    }

    document.getElementById("winner").innerText = result;
}

function resetGame() {
    document.getElementById("userChoice").innerText = "";
    document.getElementById("computerChoice").innerText = "";
    document.getElementById("winner").innerText = "";
}