document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("final-score").innerHTML = localStorage.getItem("score");
    document.getElementById("sum-questions").innerHTML = localStorage.getItem("sum_questions");
})