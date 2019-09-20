function Fixture(id, homeName, awayName, homeScore, awayScore, stage, day, date, time, venue){
    return {
        "id": id,
        "homeName": homeName,
        "awayName": awayName,
        "homeScore": homeScore,
        "awayScore": awayScore,
        "stage": stage,
        "day": day,
        "date": date,
        "time": time,
        "venue": venue
    }
}

const FIXTURES = [
    Fixture(1, "Gary", "Louise", null, null, "pool", "fri", "20 september", "11:45", "Tokyo Stadium, Tokyo"),
    Fixture(2, "Lili", "Ian", null, null, "pool", "sat", "21 september", "05:45", "Sapporo Dome, Sapporo" ),
    Fixture(3, "Josie", "Julian", null, null, "pool", "Sat", "21 september", "08:15", "Tokyo Stadium, Tokyo"),
    Fixture(4, "Leah", "Connor", null, null, "pool", "sat", "21 september", "10:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(5, "Lee", "Geraint", null, null, "pool", "sun", "22 september", "06:15", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(6, "Claire", "Freddy", null, null, "pool", "sun", "22 september", "08:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(7, "Naomi", "Andrea", null, null, "pool", "sun", "22 september", "11:15", "Sapporo Dome, Sapporo"),
    Fixture(8, "Rhiannon", "Callum", null, null, "pool", "mon", "23 september", "11:15", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(9, "Louise", "Martine", null, null, "pool", "tue", "24 september", "11:15", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(10, "Ian", "Joe", null, null, "pool", "wed", "25 september", "06:15", "Kamaishi Recovery Memorial Stadium, Iwate Prefecture, Kamaishi City"),
    Fixture(11, "Lee", "George", null, null, "pool", "thur", "26 september", "08:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(12, "Naomi", "Jack", null, null, "pool", "thur", "26 september", "11:45", "Kobe Misaki Stadium, Kobe City"),
    Fixture(13, "Julian", "Andrea", null, null, "pool", "sat", "28 september", "05:45", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(14, "Gary", "Claire", null, null, "pool", "sat", "28 september", "08:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(15, "Connor", "Geraint", null, null, "pool", "sat", "28 september", "10:45", "City of Toyota Stadium, Aichi Prefecture, Toyota City")
]

function getFixture(id){
    return FIXTURES.filter(fixture => fixture['id']==id)[0];
}