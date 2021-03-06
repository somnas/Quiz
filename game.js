document.addEventListener("DOMContentLoaded", function() {   
    document.getElementById("display-name").innerHTML = localStorage.getItem("player");    
    loadQuestions();
})


    async function fetchData(url) {
        
        const res = await fetch(url)
        const data = await res.json();
       
        return data;
    }
    
    async function loadQuestions() {
        let loadedQuestions = await fetchData("https://quizapi.io/api/v1/questions?apiKey=ZaUKDEKaG02Lc411UFJe6pGrhokdPQw8TjZxlaTk&limit=10");
        
        let choice1 = document.getElementById("choice1");
        let choice2 = document.getElementById("choice2");
        let choice3 = document.getElementById("choice3");
        let choice4 = document.getElementById("choice4");
        let choice5 = document.getElementById("choice5");
        let choice6 = document.getElementById("choice6");

        let score = document.getElementById("score");
        let nextQuestBtn = document.getElementById("next-question");
        let end_btn = document.getElementById("end-game");
        let question_counter = document.getElementById("question-counter");
        let q = question_counter.innerHTML
        question_counter.innerHTML = q;
        let question_text = document.getElementById("question");
        let answers_text = Array.from(document.getElementsByClassName("choice-text"));
        let load_answ_arr = (Object.values(loadedQuestions[q-1].answers));
        let numberOfAnswers_arr = [];

        curr_question = loadedQuestions[q-1];
        correct_answers_obj = loadedQuestions[q-1].correct_answers;
        
        //creating object with values matching the correct answers in the API to calculate score
        user_answers_obj = {
            answer_a_correct: "false",
            answer_b_correct: "false", 
            answer_c_correct: "false",
            answer_d_correct: "false",
            answer_e_correct: "false",
            answer_f_correct: "false"
        }
        

        question_text.innerHTML = loadedQuestions[q-1].question;   
        
        for(i = 0; i < load_answ_arr.length; i++) {
            answers_text[i].innerHTML = load_answ_arr[i];
            //add if-statement to hide empty choices
        }
        
        choice1.addEventListener("click", function() {
            user_answers_obj.answer_a_correct = "true";
            //choice1.classList.add("clicked");
        })
        
        choice2.addEventListener("click", function() {
            user_answers_obj.answer_b_correct = "true";
            //choice2.classList.add("clicked");
        })

        choice3.addEventListener("click", function() {
            user_answers_obj.answer_c_correct = "true";
            //choice3.classList.add("clicked");
        })

        choice4.addEventListener("click", function() {
            user_answers_obj.answer_d_correct = "true";
            //choice4.classList.add("clicked");
        })

        choice5.addEventListener("click", function() {
            user_answers_obj.answer_e_correct = "true";
            //choice5.classList.add("clicked");
        })

        choice6.addEventListener("click", function() {
            user_answers_obj.answer_f_correct = "true";
            //choice6.classList.add("clicked");
        })

        //checking if user answer matches correct answer
        isEqual = (obj1, obj2) => {
            const obj1Keys = Object.keys(obj1); 
            const obj2Keys = Object.keys(obj2);

            if (obj1Keys.length !== obj2Keys.length) {               
               return false;
            }

            for (let objKey of obj1Keys) {
                if (obj1[objKey] !== obj2[objKey]) {                   
                   return false;
                }
            }

            score.innerHTML++;
            return true;
       }
        
       
       //click triggering next question function
        nextQuestBtn.addEventListener("click", function() {
            numberOfAnswers_arr.push(1);            
            getNewQuestion();           
        })

       
        //running function to check correct answer and loading a new question
        function getNewQuestion() {
            isEqual(user_answers_obj, correct_answers_obj);
            q++;
            question_text.innerHTML = loadedQuestions[q-1].question; 
            
            load_answ_arr = (Object.values(loadedQuestions[q-1].answers)); 
            console.log(load_answ_arr);

            //loop through array of answer choices
            for(i = 0; i < load_answ_arr.length; i++) {
                answers_text[i].innerHTML = load_answ_arr[i];
                //TO DO: add if-statement to hide empty choices
            }
            //if at last question, remove next question button
            if(q == loadedQuestions.length) {                
                nextQuestBtn.classList.add("hide");                       
                                
            }
            
        }
        //save the score in local storage on click end game button
        end_btn.addEventListener("click", function() {
            localStorage.setItem("score", score.innerHTML);
            let sum_questions = numberOfAnswers_arr.reduce((total, num) => {
                return total + num;
            }, 0); 
            localStorage.setItem("sum_questions", sum_questions);
            
        })
        
    }



