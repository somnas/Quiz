/* const question = document.getElementById('question');
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
let availableQuesions = []; */





async function fetchData(url) {
    //let url = ;
    const res = await fetch(url)
    const data = await res.json();
   
    return data;
}
       
    
    



async function loadQuestions() {
    let loadedQuestions = await fetchData("https://quizapi.io/api/v1/questions?apiKey=ZaUKDEKaG02Lc411UFJe6pGrhokdPQw8TjZxlaTk&limit=10");

    let question_text = document.getElementById("question");
    let answers_text = Array.from(document.getElementsByClassName("choice-text"));
    let load_quest_arr = Array.from((Object.values(loadedQuestions)))
    question_text.innerHTML = loadedQuestions[0].question;
    
    answers_text.forEach(function(answer) {
        answer.added = true;
        
    })

    console.log(answers_text);
}

loadQuestions();




        

      //questions = data.map(loadedQuestions => {
       // const formattedQuestions = [
        //    /*question:*/ loadedQuestions            
       // ];  

       

    //Skriv array-funktion (filter?) som filtrerar ut korrekt svarsalternativ
    
    //Skriv array-funktion (map?) som formaterar svaren från answer_b_correct: false till något bättre
        
       //const formatQName = formattedQuestions.map(function())

    //let correctAnswers = Object.entries(formattedQuestions.question.correct_answers);

   // })  

    /* console.log(data);
    console.log(data[0].question);
    console.log(data[0].answers);
    console.log(data[0].answers.answer_a);
    console.log(data.length); */

    //let questions = [];

    /* for(i = 0; i < data.length; i++) {
        questions.push(data[i].question);
        
    }
    console.log(questions); */

    

   

    
            

            
       

   