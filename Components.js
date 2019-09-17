function importScript(component){
    body = document.getElementById("body");
    script = document.createElement("script");
    script.setAttribute("src", "Components/"+component+"/"+component+".js");
    body.append(script);
}

const components = [
    "App",
    "Header",
    "Body", "TitleBar", "TournamentBoard",
    "Footer",
    "FixturesBoard",
    "PlayersBoard",
    "ChatBoard",
    "PlayersCard"
]

for (component of components) {
    importScript(component)
}