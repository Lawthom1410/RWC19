renderPlayersBoard();
function renderPlayersBoard(){
    tags = document.getElementsByClassName("PlayersBoard");
    for (let i of tags) {
        i.innerHTML = `
        <div class="py-5">
            <div 
                Name="Jack" 
                Team="U.S.A" 
                Image="./img/Players/Jack2.jpg"
                Logo="./img/Teams/USA.png"
                Flag ="./img/Teams/USA_flag.svg" 
                class="PlayersCard mx-4">
            </div>
            <div 
                Name="Andrea"
                Team="Tonga"
                Image="./img/Players/Andrea.jpg"
                Logo="./img/Teams/Tonga_logo.png"
                Flag="./img/Teams/Tonga_flag.svg"
                class="PlayersCard mx-4"></div>
        </div>
        `;
    }
}

function updatePlayersBoard(){
    renderPlayersBoard();
    updatePlayersCard();
}