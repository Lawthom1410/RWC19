console.log("Players.js");
function Player(name, team, img, logo, flag, pool, points){
    return {
        "name": name,
        "team": team,
        "image": img,
        "logo": logo,
        "flag": flag,
        "pool": pool,
        "points": points
    }
}

const PLAYERS = [
    Player("Andrea", "Tonga", "Andrea.jpg", "Tonga_logo.png", "Tonga_flag.jpg", "C", 0),
    Player("Claire", "Ireland", "Claire2.jpg", "Ireland_logo.png", "Ireland_flag.jpg", "A", 0),
    Player("Freddy", "Scotland", null ,"Scotland_logo.png", "Scotland_flag.jpg", "A", 0),
    Player("Louise", "Russia", "LouiseSqr.jpg", "Russia_logo.png", "Russia_flag.jpg", "A", 0),
    Player("Naomi", "England", "NaomiSqr.jpg", "England_logo.png", "England_flag.jpg", "C", 0),
    Player("George", "Canada", null, "Canada_logo.png", "Canada_flag.jpg", "B", 0),
    Player("Geraint", "Namibia", null, "Namibia_logo.png", "Namibia_flag.jpg", "B", 0),
    Player("Josie", "France", null, "France_logo.png", "France_flag.jpg", "C", 0),
    Player("Martine", "Samoa", null, "Samoa_logo.png", "Samoa_flag.jpg", "A", 0),
    Player("Ian", "Fiji", null, "Fiji_logo.png", "Fiji_flag.jpg", "D", 0),
    Player("Julian", "Argentina", null, "Argentina_logo.png", "Argentina_flag.jpg", "C", 0),
    Player("Lee", "Italy", null, "Italy_logo.png", "Italy_flag.jpg", "B", 0),
    Player("Leah", "New Zealand", null, "NewZealand_logo.png", "NewZealand_flag.jpg", "B", 0),
    Player("Gary", "Japan", "GarySqr.jpg", "Japan_logo.png", "Japan_flag.jpg", "A", 0),
    Player("Jack", "U.S.A", "Jack2.jpg", "USA_logo.png", "USA_flag.jpg", "C", 0),
    Player("Joe", "Uruguay", "JoeSqr.jpg", "Uruguay_logo.png", "Uruguay_flag.jpg", "D", 0),
    Player("Connor", "South Africa", "ConnorSqr.jpg", "SouthAfrica_logo.png", "SouthAfrica_flag.jpg", "B", 0),
    Player("Callum", "Georgia", "CallumSqr.jpg", "Georgia_logo.png", "Georgia_flag.jpg", "D", 0),
    Player("Lili","Australia", "LiliSqr2.jpg", "Australia_logo.png", "Australia_flag.jpg", "D", 0),
    Player("Rhiannon", "Wales", "RhiannonSqr.jpeg", "Wales_logo.png", "Wales_flag.svg", "D", 0)

]