function renderFixturesCard(){
    tags = document.getElementsByClassName("FixturesCard");
    for (let i of tags) {
        let fixtureId = i.getAttribute("FixtureId");
        
        let fixture = getFixture(fixtureId);
        let homePlayer = getPlayer(fixture['homeName']);
        let awayPlayer = getPlayer(fixture['awayName']);
        let score;
        if(fixture['homeScore']!=null){
            score = fixture['homeScore']+`-`+fixture['awayScore'];
        } else {
            score = `v`;
        }
        let stage;
        if(fixture['stage']=="pool"){
            stage = "Pool " + homePlayer['pool'];
        } else {
            stage = fixture['stage']
        }

        let HTML = ` 
        <div class="card">
            <div class="card-header fixtures-header-container">
                <h1>`+fixture['day'].toUpperCase()+` `+fixture['date'].toUpperCase()+`</h1>
                <h1>`+fixture['time']+`</h1>
            </div>
            <div class="fixture-details">
                <div class="fixture-images">
                    <img src="./img/Players/`+homePlayer['image']+`" class="fixture-element-img"></img>
                    <img src="./img/Teams/`+homePlayer['logo']+`" class="fixture-element-logo"></img>
                </div>
                <div class="fixture-text-container">
                    <h3 class="fixture-detail">`+stage+`</h3>
                    <h1 class="fixture-names">
                        `+homePlayer['name'].toUpperCase()+` `+score+` `+awayPlayer['name'].toUpperCase()+`</h1>
                    <h3 class="fixture-detail">`+fixture['venue']+`</h3>
                </div>
                <div class="fixture-images">
                    <img src="./img/Players/`+awayPlayer['image']+`" class="fixture-element-img"></img>
                    <img src="./img/Teams/`+awayPlayer['logo']+`" class="fixture-element-logo"></img>
                </div>
            </div>
        </div>
        `;

        i.innerHTML = HTML;
    }
    renderPlayerElement();
}