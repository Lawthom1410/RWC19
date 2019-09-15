tags = document.getElementsByClassName("Header");
for (let i of tags) {
    renderHeader(i);
}

function renderHeader(tag){
    tag.innerHTML = ""+
    "<h1>RWC19 Header.js</h1>";
}

