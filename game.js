document.addEventListener("DOMContentLoaded", function() {
    new LoadQuestions();
    document.getElementById("display-name").innerHTML = localStorage.getItem("player");
    loadQuestions();
    
    let choice1 = document.getElementById("choice1");
    let choice2 = document.getElementById("choice2");
    let choice3 = document.getElementById("choice3");
    let choice4 = document.getElementById("choice4");
    let choice5 = document.getElementById("choice5");
    let choice6 = document.getElementById("choice6");
    
})



//Create a question counter (next question=++, previous question=--)
//Display current question through question counter "/" loadedQuestions.length
//Display correct question by using i = question counter - 1 in loadedQuestions[i].question
//Same as above but for answers
//For the answers, use dataset to spread/assign the answers
//Use if-statements to hide answers = null

class LoadQuestions {

}

    async function fetchData(url) {
        
        const res = await fetch(url)
        const data = await res.json();
       
        return data;
    }
    
    async function loadQuestions() {
        let loadedQuestions = await fetchData("https://quizapi.io/api/v1/questions?apiKey=ZaUKDEKaG02Lc411UFJe6pGrhokdPQw8TjZxlaTk&limit=10");
        let question_counter = document.getElementById("question-counter");
        question_counter.innerHTML = 1;
        let i = question_counter.innerHTML
        let question_text = document.getElementById("question");
        let answers_text = Array.from(document.getElementsByClassName("choice-text"));
    
        let load_answ_arr = (Object.values(loadedQuestions[i-1].answers));
     
        question_text.innerHTML = loadedQuestions[i-1].question;   
        
        for(i = 0; i < load_answ_arr.length; i++) {
            answers_text[i].innerHTML = load_answ_arr[i];
            //add if-statement to hide empty choices
        }
 
        
        console.log(loadedQuestions[0].answers.answer_a);
        console.log(loadedQuestions);
    }