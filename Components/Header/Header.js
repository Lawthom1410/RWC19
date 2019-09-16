renderHeader();
function renderHeader(){
    tags = document.getElementsByClassName("Header");
    for (let i of tags) {
        i.innerHTML = ""+
        '<div class="row d-flex justify-content-between mx-5">'+
        '<i class="material-icons header-icon">sports_rugby</i>'+
        "   <h1 class='header-brand'>Rugby World Cup 2019</h1>"+
        '<i class="material-icons header-icon">sports_rugby</i>';
        '</div>'
    }
}

function updateHeader(){
    renderHeader();
}
