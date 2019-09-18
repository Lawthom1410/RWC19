function renderPlayerElement(){
    tags = document.getElementsByClassName("PlayerElement");
    for (let i of tags) {
        let playerName = i.getAttribute("PlayerName");
        
        let Player = PLAYERS.filter(player => player['name']==playerName)[0];
        
        let HTML = `
        <div class="element-grid-container">
            <img src="./img/Teams/`+Player['logo']+`" class="player-element-logo">
            <img src="./img/Players/`+Player['image']+`" class="player-element-img">
        </div>
        `

        i.innerHTML = HTML;
    }
    renderPlayersCard();
}