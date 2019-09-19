console.log("Components.js");
function importScript(component){
    body = document.getElementById("body");
    script = document.createElement("script");
    script.setAttribute("src", "Components/"+component+"/"+component+".js");
    body.append(script);
}

const components = [
    "Header",
    "Body", "TitleBar", "TournamentBoard",
    "Footer",
    "FixturesBoard",
    "PlayersBoard",
    "ChatBoard",
    "PlayersCard",
    "TournamentTable",
    "TournamentKnockoutMatch",
    "PlayerElement",
    "TournamentFinalMatch"
]

for (component of components) {
    importScript(component)
}
importScript("App");


