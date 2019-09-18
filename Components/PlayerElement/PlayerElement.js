function renderPlayerElement(){
    tags = document.getElementsByClassName("PlayerElement");
    for (let i of tags) {
        let playerName = i.getAttribute("PlayerName");
        
        let Player = PLAYERS.filter(player => player['name']==playerName)[0];
        
        let HTML=``;
        if (!Player) {
            HTML = `
            <h1 class="tournament-placeholder-text">`+playerName+`</h1>
            `
        } else {
            HTML = `
            <div class="element-grid-container">
                <img src="./img/Teams/`+Player['logo']+`" class="player-element-logo">
                <img src="./img/Players/`+Player['image']+`" class="player-element-img">
                <h1 class="player-element-name">`+Player['name']+`</h1>
            </div>
            `
        }

        i.innerHTML = HTML;
    }
    renderPlayersCard();
}