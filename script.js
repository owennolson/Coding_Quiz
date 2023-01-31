let startBtn = document.querySelector("#startBtn");
let quizBtn = document.querySelector("#quizBtn");
let scoreBtn = document.querySelector("#scoreBtn");
let newGameBtn = document.querySelector("#newGameBtn");
let qAnswer = document.querySelectorAll('.answer');
let question = document.getElementById('question');
let aAnswer = document.getElementById('aAnswer');
let bAnswer = document.getElementById('bAnswer');
let cAnswer = document.getElementById('cAnswer');
let dAnswer = document.getElementById('dAnswer');
let score = 0;
const quizQs = [
    {
        question: "What year was the Boston Bruins most recent Stanley Cup win?",
        a: "2013",
        b: "2019",
        c: "2011",
        d: "2007",
        answer: "c",
    },
    {
        question: "Who is the Bruins current Captain?",
        a: "Bergeron",
        b: "Chara",
        c: "Orr",
        d: "Pasta",
        answer: "a",
    },
    {
        question: "What is the Bruins current standing (1-32) in the league as of January 30th 2023?",
        a: "1st",
        b: "16th",
        c: "3rd",
        d: "32nd",
        answer: "a",
    },
    {
        question: "Who has the MOST ammount of points in Bruins history?",
        a: "Chara",
        b: "Orr",
        c: "Espisito",
        d: "Borque",
        answer: "d",
    },
    {
        question: "What coding language allows you to style the webpage?",
        a: "I don't speak coding",
        b: "Chara",
        c: "Css",
        d: "HTML",
        answer: "c",
    }
];


startBtn.addEventListener("click", startGame);
quizBtn.addEventListener("click", quizInput);
scoreBtn.addEventListener("click", leaderboard);
newGameBtn.addEventListener("click", newGame);

function startGame () {
    let quizArea = document.getElementById("quizArea");
    let startGameArea = document.getElementById("startGameArea");
    quizArea.classList.toggle("displayNone");
    startGameArea.classList.toggle("displayNone");
}

function quizInput () {
    for(var i =0; i < quizQs.length; i++) {
        question = quizQs[i].question; 
        if(question == quizQs[i].answer){
            score++;
        }
        if(i >= quizQs.length) {
            quizArea.classList.toggle("displayNone");
            postGameArea.classList.toggle("displayNone");
        }
    }

    let quizArea = document.getElementById("quizArea");
    let postGameArea = document.getElementById("postGame");
}

function leaderboard () {
    let postGameArea = document.getElementById("postGame");
    let leaderboardArea = document.getElementById("leaderboard");
    postGameArea.classList.toggle("displayNone");
    leaderboardArea.classList.toggle("displayNone");
}
function newGame () {
    let leaderboardArea = document.getElementById("leaderboard");
    let quizArea = document.getElementById("quizArea");
    leaderboardArea.classList.toggle("displayNone");
    quizArea.classList.toggle("displayNone");
}