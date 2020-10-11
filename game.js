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
        let q = question_counter.innerHTML
        let question_text = document.getElementById("question");
        let answers_text = Array.from(document.getElementsByClassName("choice-text"));
        let load_answ_arr = (Object.values(loadedQuestions[q-1].answers));
        //let load_corr_answ_arr = (Object.values(loadedQuestions[i-1].correct_answers));
        let curr_question = {};
        curr_question = loadedQuestions[q-1];
        let answer_obj = {};
        let user_answers = {
            answer_a_correct: "false",
            answer_b_correct: "false", 
            answer_c_correct: "false",
            answer_d_correct: "false",
            answer_e_correct: "false",
            answer_f_correct: "false"
        }
        answer_obj = loadedQuestions[0].answers

        //console.log(answer_obj);
     
        question_text.innerHTML = loadedQuestions[q-1].question;   
        
        for(i = 0; i < load_answ_arr.length; i++) {
            answers_text[i].innerHTML = load_answ_arr[i];
            //add if-statement to hide empty choices
        }
 
        choice1.addEventListener("click", function() {
            user_answers.answer_a_correct = "true";
            console.log(user_answers);
            console.log(curr_question.correct_answers);
        })
        

        let nextQuestBtn = document.getElementById("next-question");
        nextQuestBtn.addEventListener("click", function() {
            getNewQuestion();
        })

        function getNewQuestion() {
            
            q++;
            console.log(q);
            console.log(i);
            console.log(load_answ_arr);
            q = question_counter.innerHTML
            question_text.innerHTML = loadedQuestions[q-1].question;

            for(i = 1; i < load_answ_arr.length; i++) {
                answers_text[i].innerHTML = load_answ_arr[i];
                //add if-statement to hide empty choices
            }
            
        }
        //console.log(answer_obj);
        //console.log(curr_question);
        //console.log(user_answers);
        //console.log(load_corr_answ_arr);
        //console.log(load_answ_arr);
        //console.log(loadedQuestions);
        
    }

class NewQuestion {
    
}

