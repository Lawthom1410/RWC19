function Player(name, team, img, logo, flag, pool, tieBreak, points){
    return {
        "name": name,
        "team": team,
        "image": img,
        "logo": logo,
        "flag": flag,
        "pool": pool,
        "tieBreak": tieBreak,
        "points": points
    }
}

const PLAYERS = [
    Player("Andrea", "Tonga", "Andrea.jpg", "Tonga_logo.png", "Tonga_flag.jpg", "C", 0, 0),
    Player("Claire", "Ireland", "Claire2.jpg", "Ireland_logo.png", "Ireland_flag.jpg", "A", 0, 0),
    Player("Freddy", "Scotland", "FreddySqr2.png" ,"Scotland_logo.png", "Scotland_flag.jpg", "A", 0, 0),
    Player("Louise", "Russia", "LouiseSqr2.jpg", "Russia_logo.png", "Russia_flag.jpg", "A", 0, 0),
    Player("Naomi", "England", "NaomiSqr.jpg", "England_logo.png", "England_flag.jpg", "C", 0, 0),
    Player("George", "Canada", "GeorgeSqr2.png", "Canada_logo.png", "Canada_flag.jpg", "B", 0, 0),
    Player("Geraint", "Namibia", "GeraintSqr.png", "Namibia_logo.png", "Namibia_flag.jpg", "B", 0, 0),
    Player("Josie", "France", "JosieSqr.png", "France_logo.png", "France_flag.jpg", "C", 0, 4),
    Player("Martine", "Samoa", "MartineSqr3.png", "Samoa_logo.png", "Samoa_flag.jpg", "A", 0, 0),
    Player("Ian", "Fiji", "IanSqr.png", "Fiji_logo.png", "Fiji_flag.jpg", "D", 0, 0),
    Player("Julian", "Argentina", "JulianSqr.png", "Argentina_logo.png", "Argentina_flag.jpg", "C", 0, 1),
    Player("Lee", "Italy", "LeeSqr.png", "Italy_logo.png", "Italy_flag.jpg", "B", 0, 0),
    Player("Leah", "New Zealand", "LeahSqr2.png", "NewZealand_logo.png", "NewZealand_flag.jpg", "B", 0, 0),
    Player("Gary", "Japan", "GarySqr.jpg", "Japan_logo.png", "Japan_flag.jpg", "A", 0, 5),
    Player("Jack", "U.S.A", "JackSqr.jpg", "USA_logo.png", "USA_flag.jpg", "C", 0, 0),
    Player("Joe", "Uruguay", "JoeSqr.jpg", "Uruguay_logo.png", "Uruguay_flag.jpg", "D", 0, 0),
    Player("Connor", "South Africa", "ConnorSqr.jpg", "SouthAfrica_logo.png", "SouthAfrica_flag.jpg", "B", 0, 0),
    Player("Callum", "Georgia", "CallumSqr.jpg", "Georgia_logo.png", "Georgia_flag.jpg", "D", 0, 0),
    Player("Lili","Australia", "LiliSqr2.jpg", "Australia_logo.png", "Australia_flag.jpg", "D", 0, 5),
    Player("Rhiannon", "Wales", "RhiannonSqr.jpeg", "Wales_logo.png", "Wales_flag.svg", "D", 0, 0)
]

function getPlayer(name){
    return PLAYERS.filter(player => player['name']==name)[0];
}