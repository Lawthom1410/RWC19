renderBody("PlayersBoard");
function renderBody(board){
    tags = document.getElementsByClassName("Body");
    for (let i of tags) {
        i.innerHTML = `
        <div class='TitleBar sticky-top' Title='`+getTitle(board)+`'></div>
        <div class='`+board+`'></div>
        `;
    }
}

function updateBody(board){
    renderBody(board);
    updateTitleBar();
    updateTournamentBoard();
    updateFixturesBoard();
    updatePlayersBoard();
    updateChatBoard();
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