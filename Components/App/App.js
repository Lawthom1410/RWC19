renderApp();
function renderApp(){
    tags = document.getElementsByClassName("App");
    for (let i of tags) {
        i.innerHTML = `
        <div class='Header sticky-top'></div>
        <div class='Body'></div>
        <div class='Footer'></div>
        `;   
    }
}