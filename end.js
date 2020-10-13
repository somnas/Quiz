document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("final-score").innerHTML = localStorage.getItem("score");
})