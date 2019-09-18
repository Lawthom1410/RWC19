function renderTournamentTable(){
    tags = document.getElementsByClassName("TournamentTable");
    console.log(tags);
    for (let i of tags) {
        let pool = i.getAttribute("Pool");
        let poolPlayers = PLAYERS.filter(player => player['pool']==pool);

        let HTML = `
            <div class="card group-card">
                <div class="card-header">
                    <h1>Pool `+pool+`</h1>
                </div>
                <ul class="list-group list-group-flush">
        `
        for (player of poolPlayers) {
            HTML += `
                    <li class="list-group-item">`+player['name']+`</li>           
            `
        }
        HTML += `
                </ul>  
            </div>
        `;

        i.innerHTML = HTML;
    }
}