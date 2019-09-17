renderTitleBar();
function renderTitleBar(){
    tags = document.getElementsByClassName("TitleBar");
    for (let i of tags) {
        let title = i.getAttribute("Title");
        i.innerHTML = `
        <div class="card title-card">
            <h1 class="page-title">`+title+`</h1>
        </div>
        `;
    }
}

function updateTitleBar(){
    renderTitleBar();
}