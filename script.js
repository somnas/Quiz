const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];



async function fetchData() {
    const res = await fetch("https://quizapi.io/api/v1/questions?apiKey=ZaUKDEKaG02Lc411UFJe6pGrhokdPQw8TjZxlaTk&limit=10")
    const data = await res.json();
    
    /* console.log(data);
    console.log(data[0].question);
    console.log(data[0].answers);
    console.log(data[0].answers.answer_a);
    console.log(data.length); */

    console.log(data);

    let questions = [];

    /* for(i = 0; i < data.length; i++) {
        questions.push(data[i].question);
        
    }
    console.log(questions); */
}
    
fetchData();
   

    
            

            
       

   