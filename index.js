document.addEventListener("DOMContentLoaded", () => {

    let playBtn = document.getElementById("playBtn");
    playBtn.addEventListener("click", newPlayer);

    function newPlayer(player) {
       new Player;       
    }    
})

class Player {
    constructor() {        
        localStorage.setItem("player", document.getElementById("player-name").value);        
    }
    
}

