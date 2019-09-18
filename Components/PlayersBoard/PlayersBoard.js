function renderPlayersBoard(){
    tags = document.getElementsByClassName("PlayersBoard");
    for (let i of tags) {
        
        let HTML = `<div class="py-5">`;
        for (let player of PLAYERS) {
            HTML += `
            <div
                Name="`+player['name']+`"
                Team="`+player['team']+`"
                Image="./img/Players/`+player['image']+`"
                Logo="./img/Teams/`+player['logo']+`"
                Flag="./img/Teams/`+player['flag']+`"
                class="PlayersCard mx-3">
            </div>
            ` 
        }
        HTML += `</div>`;

        i.innerHTML = HTML;
    }
    renderPlayersCard();
}