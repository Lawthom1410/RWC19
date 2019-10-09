function Player(name, team, pool, colour, tieBreak, points){
    return {
        "name": name,
        "team": team,
        "pool": pool,
        "colour": colour,
        "tieBreak": tieBreak,
        "points": points
    }
}

const PLAYERS = [
    Player("Andrea", "Tonga", "C", "red-white",0, 1),
    Player("Claire", "Ireland", "A", "green-gif", 1, 11),
    Player("Freddy", "Scotland", "A", "blue-gif", 0, 10),
    Player("Louise", "Russia", "A", "red-blue", -1, 0),
    Player("Naomi", "England", "C", "england-gif", 0, 15),
    Player("George", "Canada", "B", "red", -1, 0),
    Player("Geraint", "Namibia", "B", "blue", 0, 0),
    Player("Josie", "France", "C", "blue", 0, 13),
    Player("Martine", "Samoa", "A", "blue", -1, 5),
    Player("Ian", "Fiji", "D", "blue", 0, 7),
    Player("Julian", "Argentina", "C", "blue", 0, 11),
    Player("Lee", "Italy", "B", "blue", -1, 10),
    Player("Leah", "New Zealand", "B", "blue", 0, 14),
    Player("Gary", "Japan", "A", "blue", 0, 14),
    Player("Jack", "USA", "C", "blue", -1, 0),
    Player("Joe", "Uruguay", "D", "blue", 0, 4),
    Player("Connor", "South Africa", "B", "blue", 1, 15),
    Player("Callum", "Georgia", "D", "blue", -2, 5),
    Player("Lili","Australia", "D", "blue", 0, 11),
    Player("Rhiannon", "Wales", "D", "blue", 1, 14)
]

function getPlayer(name){
    return PLAYERS.filter(player => player['name']==name)[0];
}