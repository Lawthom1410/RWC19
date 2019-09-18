function renderTournamentTable(){
    tags = document.getElementsByClassName("TournamentTable");
    console.log(tags);
    for (let i of tags) {
        let pool = i.getAttribute("Pool");
        let poolPlayers = PLAYERS.filter(player => player['pool']==pool);

        let HTML = `
            <div class="card group-card">
                <div class="card-header pool-header">
                    <h1 class="pool-title">Pool `+pool+`</h1>
                </div>
                <ul class="list-group list-group-flush">
        `
        for (player of poolPlayers) {
            HTML += `
            <li class="list-group-item pool-grid-container">
                <div class="PlayerElement" PlayerName="`+player['name']+`"></div>
                <h1 class="player-element-name">`+player['name']+`</h1>
                <h1 class="pool-points">`+player['points']+`
            </li> 
            `
        }
        HTML += `
                </ul>  
            </div>
        `;

        i.innerHTML = HTML;

        renderPlayerElement();
    }
}