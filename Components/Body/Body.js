console.log("Body.js");
function renderBody(board){
    if (!board) {board = "TournamentBoard"}
    tags = document.getElementsByClassName("Body");
    for (let i of tags) {
        
        let HTML = `
        <div class='TitleBar sticky-top' Title='`+getTitle(board)+`'></div>
        <div class='`+board+` py-3'></div>
        `;

        i.innerHTML = HTML;
    }
    renderTitleBar();
    renderTournamentBoard();
    renderFixturesBoard();
    renderPlayersBoard();
    renderChatBoard();
}

function getTitle(board){
    if (board=="TournamentBoard"){
        return "Tournament";
    }
    if (board=="FixturesBoard"){
        return "Fixtures/Results";
    }
    if (board=="PlayersBoard"){
        return "Players";
    }
    if (board=="ChatBoard"){
        return "Message Board";
    }
}