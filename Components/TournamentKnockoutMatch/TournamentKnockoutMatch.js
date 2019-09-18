function renderTournamentKnockoutMatch(){
    tags = document.getElementsByClassName("TournamentKnockoutMatch");
    for (let i of tags) {
        let roundLabel = i.getAttribute("RoundLabel");
        let namePlayer1 = i.getAttribute("NamePlayer1");
        let namePlayer2 = i.getAttribute("NamePlayer2");

        let player1 = PLAYERS.filter(player => player['name']==namePlayer1)[0];
        let player2 = PLAYERS.filter(player => player['name']==namePlayer2)[0];

        if (!player1) player1={"name":""};
        if (!player2) player2={"name":""};

        let HTML = ` 
        <div class="card group-card">
            <div class="card-header">
                <h1>`+roundLabel+`</h1>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">`+player1['name']+`</li> 
                <li class="list-group-item">`+player2['name']+`</li> 
            </ul>
        </div>
`;

        i.innerHTML = HTML;
    }
}