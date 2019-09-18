console.log("Body.js");
function renderBody(board){
    if (!board) {board = "PlayersBoard"}
    tags = document.getElementsByClassName("Body");
    for (let i of tags) {
        i.innerHTML = `
        <div class='TitleBar sticky-top' Title='`+getTitle(board)+`'></div>
        <div class='`+board+`'></div>
        `;
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