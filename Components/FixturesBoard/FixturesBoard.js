renderFixturesBoard();
function renderFixturesBoard(){
    tags = document.getElementsByClassName("FixturesBoard");
    for (let i of tags) {
        i.innerHTML = `
        <h1>This will be the Fixtures Board</h2>
        `;
      }
}

function updateFixturesBoard(){
    renderFixturesBoard();
}