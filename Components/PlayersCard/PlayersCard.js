function renderPlayersCard(){
    tags = document.getElementsByClassName("PlayersCard");
    for (let i of tags) {
        let name = i.getAttribute("Name");
        let team = i.getAttribute("Team");
        let image = i.getAttribute("Image");
        let logo = i.getAttribute("Logo");
        let flag = i.getAttribute("Flag");
        
        let HTML = `
        <div class="card player-card">
            <div class="card-body player-card-body">
                <img src="`+image+`" class="player-card-img">
                <h1 class="player-card-name">`+name+`</h1>
                <h2 class="player-card-team">`+team+`</h2>
                <img src="`+logo+`" class="player-card-logo">
                <img src="`+flag+`" class="player-card-flag">
            </div>
        </div>
        `;

        i.innerHTML = HTML;
    }
}