document.addEventListener("DOMContentLoaded", function() {
    new LoadQuestions();
    document.getElementById("display-name").innerHTML = localStorage.getItem("player");
    loadQuestions();
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
    
        
        //Iterate through all ten loaded questions
       /*  for(let i = 0; i < loadedQuestions.length; i++) { 
            let answers_arr = [];
            answers_arr.push(loadedQuestions[i].answers);
            console.log(answers_arr);
        } */
    
    }