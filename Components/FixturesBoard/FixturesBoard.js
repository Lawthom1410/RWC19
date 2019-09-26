function renderFixturesBoard(activeMatches){
  if(!activeMatches) {activeMatches = FIXTURES}
  tags = document.getElementsByClassName("FixturesBoard");
  for (let i of tags) {
    let currentDate;
      
    let HTML = `
    <div>
      <button class="btn btn-lg fixtures-filter-btn" onClick="renderFixturesBoard()">All</button>
      <button class="btn btn-lg fixtures-filter-btn" onClick="filterFixtures()">Fixtures</button>
      <button class="btn btn-lg fixtures-filter-btn" onClick="filterResults()">Results</button>
    </div>
    `;
    for (let match of activeMatches){
      if (currentDate != match['date']){
        currentDate = match['date'];
        HTML += `
        <div class="FixturesDateContainer" Date="`+currentDate+`"></div>
        `
      }
    }

    i.innerHTML = HTML;
  }
  renderFixturesDateContainer(activeMatches);
}

function filterFixtures() {
  activeMatches = FIXTURES.filter(match => match['homeScore']==null);
  renderFixturesBoard(activeMatches);
}

function filterResults() {
  activeMatches = FIXTURES.filter(match => match['homeScore']!=null);
  renderFixturesBoard(activeMatches);
}