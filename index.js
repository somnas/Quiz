document.addEventListener("DOMContentLoaded", () => {

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", newPlayer);

    function newPlayer(player) {
       //let player_1 = 
       new Player;
       
    }
    
})

class Player {
    constructor() {
        /* this.name = document.getElementById("player-name").value;
        this.score = 0; */
        localStorage.setItem("player", document.getElementById("player-name").value);
        
    }
    
}

