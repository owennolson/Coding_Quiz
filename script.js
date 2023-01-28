let startBtn = document.querySelector("#startBtn");
let quizBtn = document.querySelector("#quizBtn");
let scoreBtn = document.querySelector("#scoreBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let startGameArea = document.querySelector("#startGame");
let quizArea = document.querySelector("#quiz");
let postGameArea = document.querySelector("#postGame");
let leaderboardArea = document.querySelector("#leaderboard");

startBtn.addEventListener("click", startGame);

function startGame () {
    if (quizArea.style.display === 'none') {
        startGameArea.style.display = 'none';
        quizArea.style.display = 'block';
    }
    return true;
}