renderApp();
function renderApp(){
    tags = document.getElementsByClassName("App");
    for (let i of tags) {
        i.innerHTML = ""+
        "<div class='header'></div>"+
        "<div class='body'></div>"+
        "<div class='footer'></div>";   
    }
}