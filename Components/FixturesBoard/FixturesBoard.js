function renderFixturesBoard(activeMatches){
  if(!activeMatches) {activeMatches = FIXTURES}
  tags = document.getElementsByClassName("FixturesBoard");
  for (let i of tags) {
    let currentDate;
      
    let HTML = `
    <div class="fixtures-filters-container">
      <div>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" onClick="renderFixturesBoard()">All</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" onClick="filterFixtures()">Fixtures</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" onClick="filterResults()">Results</button>
      </div>
      <div>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" onClick="filterToday()">Today</button>
        <button class="btn btn-outline-dark btn-lg fixtures-filter-btn" onClick="filterTomorrow()">Tomorrow</button>
      </div>
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
    if (!activeMatches.length){
      HTML += `
      <h1> No Matches Available </h1>
      `
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

function filterToday() {
  date = getTodayDate();
  day = (date[0]).toString();
  activeMatches = FIXTURES.filter(match => match['date']==day+" "+date[1]);
  renderFixturesBoard(activeMatches);
}

function filterTomorrow() {
  date = getTodayDate();
  day = (date[0]+1).toString();
  activeMatches = FIXTURES.filter(match => match['date']==day+" "+date[1]);
  renderFixturesBoard(activeMatches);
}

function getTodayDate() {
  let d = new Date();
  let months = {
    8: "september",
    9: "october",
    10: "november"
  }
  return [d.getDate(), months[d.getMonth()]];
}