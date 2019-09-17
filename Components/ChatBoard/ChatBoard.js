renderChatBoard();
function renderChatBoard(){
    tags = document.getElementsByClassName("ChatBoard");
    for (let i of tags) {
        i.innerHTML =  `
        <h1>This will be the Message Board</h2>
        `;
    }
}

function updateChatBoard(){
    renderChatBoard();
}