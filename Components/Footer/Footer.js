console.log("Footer.js");
function renderFooter(){
    tags = document.getElementsByClassName("Footer");
    for (let i of tags) {
        i.innerHTML = `
        <div class='container d-flex justify-content-between'>
           <a class='material-icons footer-icon' id='tournamentBtn'>table_chart</a>
           <a class='material-icons footer-icon' id='fixturesBtn'>sports_rugby</a>
           <a class='material-icons footer-icon' id='playersBtn'>group</a>
           <a class='material-icons footer-icon' id='chatBtn'>forum</a>
        </div>
        `;
    }
    document.getElementById('tournamentBtn').addEventListener('click', () => Footer_handleTournamentBtn());
    document.getElementById('fixturesBtn').addEventListener('click', () => Footer_handleFixturesBtn());
    document.getElementById('playersBtn').addEventListener('click', () => Footer_handlePlayersBtn());
    document.getElementById('chatBtn').addEventListener('click', () => Footer_handleChatBtn());
}

function Footer_handleTournamentBtn(){
    renderBody("TournamentBoard");
}

function Footer_handleFixturesBtn(){
    renderBody("FixturesBoard");
}

function Footer_handlePlayersBtn(){
    renderBody("PlayersBoard");
}

function Footer_handleChatBtn(){
    renderBody("ChatBoard");
}

