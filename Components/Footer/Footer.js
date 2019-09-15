renderFooter();
function renderFooter(){
    tags = document.getElementsByClassName("Footer");
    for (let i of tags) {
        i.innerHTML = ""+
        "<button class='btn btn-lg' onClick='Footer_handleTournamentBtn()'>Tournament</h1>"+
        "<button class='btn btn-lg' onClick='Footer_handleFixturesBtn()'>Fixtures</h1>";
    }
}

function Footer_handleTournamentBtn(){
    updateBody("TournamentBoard");
}

function Footer_handleFixturesBtn(){
    updateBody("FixturesBoard");
}

