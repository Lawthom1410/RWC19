renderBody("TournamentBoard");
function renderBody(board){
    tags = document.getElementsByClassName("Body");
    for (let i of tags) {
        i.innerHTML = ""+
        "<div class='"+board+"'></div>";
    }
}

function updateBody(board){
    renderBody(board);
    updateTournamentBoard();
    updateFixturesBoard();
    updatePlayersBoard();
    updateChatBoard();
}