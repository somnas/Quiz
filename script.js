document.addEventListener("DOMContentLoaded", () => {
    
    new LoadQuestions();

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", newPlayer);

    function newPlayer(player) {
       new Player;
       return player;
    }
    console.log(player);
})



class Player {
    constructor(name) {
        this.name = document.getElementById("player-name").value;
        this.score = 0;
        console.log(this);
    }
    
}

class LoadQuestions {

}