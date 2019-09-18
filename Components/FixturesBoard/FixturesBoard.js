console.log("Fixtures.js");
function renderFixturesBoard(){
    tags = document.getElementsByClassName("FixturesBoard");
    for (let i of tags) {
        
        let HTML = `
        <h1>This will be the Fixtures Board</h2>
        `;

        i.innerHTML = HTML;
      }
}