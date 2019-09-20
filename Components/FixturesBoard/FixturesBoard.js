function renderFixturesBoard(){
    tags = document.getElementsByClassName("FixturesBoard");
    for (let i of tags) {
      let currentDate;
        
      let HTML = ``;
      for (let fixture of FIXTURES){
        if (currentDate != fixture['date']){
          currentDate = fixture['date'];
          HTML += `
          <div class="FixturesDateContainer" Date="`+currentDate+`"></div>
          `
        }
      }

      i.innerHTML = HTML;
    }
    renderFixturesDateContainer();
}