console.log("Players.js");
function Player(name, team, img, logo, flag){
    return {
        "name": name,
        "team": team,
        "image": img,
        "logo": logo,
        "flag": flag
    }
}

const PLAYERS = [
    Player("Andrea", "Tonga", "Andrea.jpg", "Tonga_logo.png", "Tonga_flag.jpg"),
    Player("Claire", "Ireland", "Claire2.jpg", "Ireland_logo.png", "Ireland_flag.jpg"),
    Player("Freddy", "Scotland", null ,"Scotland_logo.png", "Scotland_flag.jpg"),
    Player("Louise", "Russia", "LouiseSqr.jpg", "Russia_logo.png", "Russia_flag.jpg"),
    Player("Naomi", "England", "NaomiSqr.jpg", "England_logo.png", "England_flag.jpg"),
    Player("George", "Canada", null, "Canada_logo.png", "Canada_flag.jpg"),
    Player("Geraint", "Namibia", null, "Namibia_logo.png", "Namibia_flag.jpg"),
    Player("Josie", "France", null, "France_logo.png", "France_flag.jpg"),
    Player("Martine", "Samoa", null, "Samoa_logo.png", "Samoa_flag.jpg"),
    Player("Ian", "Fiji", null, "Fiji_logo.png", "Fiji_flag.jpg"),
    Player("Julian", "Argentina", null, "Argentina_logo.png", "Argentina_flag.jpg"),
    Player("Lee", "Italy", null, "Italy_logo.png", "Italy_flag.jpg"),
    Player("Leah", "New Zealand", null, "NewZealand_logo.png", "NewZealand_flag.jpg"),
    Player("Gary", "Japan", "GarySqr.jpg", "Japan_logo.png", "Japan_flag.jpg"),
    Player("Jack", "U.S.A", "Jack2.jpg", "USA_logo.png", "USA_flag.jpg"),
    Player("Joe", "Uruguay", "JoeSqr.jpg", "Uruguay_logo.png", "Uruguay_flag.jpg"),
    Player("Connor", "South Africa", "ConnorSqr.jpg", "SouthAfrica_logo.png", "SouthAfrica_flag.jpg"),
    Player("Callum", "Georgia", "CallumSqr.jpg", "Georgia_logo.png", "Georgia_flag.jpg"),
    Player("Lili","Australia", "LiliSqr2.jpg", "Australia_logo.png", "Australia_flag.jpg"),
    Player("Rhiannon", "Wales", "RhiannonSqr.jpeg", "Wales_logo.png", "Wales_flag.svg")

]