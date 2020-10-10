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
        let curr_question = {};
        let load_answ_arr = (Object.values(loadedQuestions[i-1].answers));
        let load_corr_answ_arr = (Object.values(loadedQuestions[i-1].correct_answers));
        curr_question = loadedQuestions[i-1];
        let answer_obj = {};
        answer_obj = loadedQuestions[0].answers

        //console.log(answer_obj);
     
        question_text.innerHTML = loadedQuestions[i-1].question;   
        
        for(i = 0; i < load_answ_arr.length; i++) {
            answers_text[i].innerHTML = load_answ_arr[i];
            //add if-statement to hide empty choices
        }
 
        choice1.addEventListener("click", function() {
            console.log("hello");
            answer_obj.answer_a_correct = true;
        })

        //console.log(answer_obj);
        console.log(curr_question);
        //console.log(load_corr_answ_arr);
        //console.log(load_answ_arr);
        //console.log(loadedQuestions);
        
    }

  