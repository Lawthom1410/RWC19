function importScript(component){
    body = document.getElementById("body");
    script = document.createElement("script");
    script.setAttribute("src", "Components/"+component+"/"+component+".js");
    body.append(script);
}

const components = [
    "App",
    "Header",
    "Body",
    "Footer",
    "FixturesBoard",
    "TournamentBoard"
]

for (component of components) {
    importScript(component)
}
