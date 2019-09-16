renderPlayersBoard();
function renderPlayersBoard(){
    tags = document.getElementsByClassName("PlayersBoard");
    for (let i of tags) {
        i.innerHTML = ""+
        "<h1>This is the Players Board</h2>";
    }
}

function updatePlayersBoard(){
    renderPlayersBoard();
}