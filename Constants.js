function importConstant(constant){
    body = document.getElementById("body");
    script = document.createElement("script");
    script.setAttribute("src", "Constants/"+constant+".js");
    body.append(script);
}

const constants = [
    "Players"
]

for (constant of constants) {
    importConstant(constant)
}