function renderTournamentBoard(){
    tags = document.getElementsByClassName("TournamentBoard");
    for (let i of tags) {

        let HTML = `
        <div class="row">
            <div class="col">
                <div class="TournamentTable" Pool="A"></div>
            </div>
            <div class="col">
                <div class="TournamentTable" Pool="B"></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="" namePlayer2=""></div>
            </div>
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="" namePlayer2=""></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="" namePlayer2=""></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Final" namePlayer1="" namePlayer2=""></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="" namePlayer2=""></div>
            </div>
        </div>


        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="" namePlayer2=""></div>
            </div>
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="" namePlayer2=""></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentTable" Pool="C"></div>
            </div>
            <div class="col">
                <div class="TournamentTable" Pool="D"></div>
            </div>
        </div>

        `;

        i.innerHTML = HTML;
    }

    renderTournamentTable();
    renderTournamentKnockoutMatch();
}