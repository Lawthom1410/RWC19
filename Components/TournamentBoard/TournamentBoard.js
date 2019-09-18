function renderTournamentBoard(){
    tags = document.getElementsByClassName("TournamentBoard");
    for (let i of tags) {
        i.innerHTML = `
        <h1>This will be the Tournament Board</h2>
        `;
    }
}