renderTournamentBoard();
function renderTournamentBoard(){
    tags = document.getElementsByClassName("TournamentBoard");
    for (let i of tags) {
        i.innerHTML = `
        <h1>This is the Tournament Board</h2>
        `;
    }
}

function updateTournamentBoard(){
    renderTournamentBoard();
}