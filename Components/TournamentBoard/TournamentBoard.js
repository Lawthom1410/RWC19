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
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool A" namePlayer2="Runner-Up Pool B"></div>
            </div>
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool B" namePlayer2="Runner-Up Pool A"></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Winner QF1" namePlayer2="Winner QF2"></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Final" namePlayer1="Winner SF1" namePlayer2="Winner SF2"></div>
            </div>
        </div>

        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Semi Final" namePlayer1="Winner QF3" namePlayer2="Winner QF4"></div>
            </div>
        </div>


        <div class="row">
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool C" namePlayer2="Runner-Up Pool D"></div>
            </div>
            <div class="col">
                <div class="TournamentKnockoutMatch" RoundLabel="Quarter Final" namePlayer1="Winner Pool D" namePlayer2="Runner-Up Pool C"></div>
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