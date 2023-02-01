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
        choices: ["2013", "2019", "2011", "2007"],
        answer: "2011",
    },
    {
        question: "Who is the Bruins current Captain?",
        choices: ["Bergeron", "Chara", "Orr", "Pasta"],
        answer: "Bergeron",
    },
    {
        question: "What is the Bruins current standing (1-32) in the league as of January 30th 2023?",
        choices: ["1st", "16th", "3rd", "32nd"],
        answer: "1st",
    },
    {
        question: "Who has the MOST ammount of points in Bruins history?",
        choices: ["Chara", "Orr", "Espisito", "Borque"],
        answer: "Borque",
    },
    {
        question: "What coding language allows you to style the webpage?",
        choices: ["I don't speak coding", "Chara", "CSS", "HTML"],
        answer: "CSS",
    }
];

var questionIndex = 0;
startBtn.addEventListener("click", startGame);
//quizBtn.addEventListener("click", quizInput);
scoreBtn.addEventListener("click", leaderboard);
newGameBtn.addEventListener("click", newGame);

function startGame () {
    let quizArea = document.getElementById("quizArea");
    let startGameArea = document.getElementById("startGameArea");
    quizArea.classList.toggle("displayNone");
    startGameArea.classList.toggle("displayNone");
    showQuestion();
}

function showQuestion() {
    let quizArea = document.getElementById("quizArea");
    let postGameArea = document.getElementById("postGame");
    question.innerHTML = quizQs[questionIndex].question;
    document.getElementById("questionArea").innerHTML = "";
    for (var i = 0; i < quizQs[questionIndex].choices.length; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = quizQs[questionIndex].choices[i];
        document.getElementById("questionArea").appendChild(btn);
        btn.addEventListener("click", function() {
            if(quizQs[questionIndex].choices[i] === quizQs[questionIndex].answer[i]) {
                score++;
                console.log("score+1");
            } else if(quizQs[questionIndex].question[i] > quizQs[questionIndex].length) {
                quizArea.classList.toggle("displayNone");
                postGameArea.classList.toggle("displayNone");
            }
            questionIndex++;
            showQuestion();
        })
    }
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