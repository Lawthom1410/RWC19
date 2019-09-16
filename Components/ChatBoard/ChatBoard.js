renderChatBoard();
function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        i.innerHTML = ""+
        "<h1>This is the Chat Board</h2>";
    }
}

function updateChatBoard(){
    renderChatBoard();
}