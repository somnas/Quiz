let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-text"));
let correct_bonus = 10;
let max_questions = 3;
let question_counter_text = document.getElementById("question-counter");
let score_text = document.getElementById("score");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let questions = [];


async function fetchQuestions() {
    let res = await fetch("https://quizapi.io/api/v1/questions?apiKey=ZaUKDEKaG02Lc411UFJe6pGrhokdPQw8TjZxlaTk&limit=10");
    
    let questions = await res.json();
    console.log(questions[2]);
}

fetchQuestions();






startGame = () => {

    questionCounter = 0;
    score = 0;
    score_text.innerHTML = score;    
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    /* if(availableQuestions.length === 0 || questionCounter >= max_questions) {
        return window.location.assign("/end.html");
    } */
    questionCounter++;
    question_counter_text.innerText = questionCounter + "/" + max_questions;

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;

    choices.forEach(choice => {
        let letter = choice.dataset["letter"];
        choice.innerText = currentQuestion["answer_" + letter];
        //console.log(currentQuestion);
    })

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
            score++;
            score_text.innerHTML = score;
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
        
        
    })
})









