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
    Fixture(1, "Gary", "Louise", 30, 10, "pool", "fri", "20 september", "11:45", "Tokyo Stadium, Tokyo"),
    Fixture(2, "Lili", "Ian", 39, 21, "pool", "sat", "21 september", "05:45", "Sapporo Dome, Sapporo" ),
    Fixture(3, "Josie", "Julian", 23, 21, "pool", "Sat", "21 september", "08:15", "Tokyo Stadium, Tokyo"),
    Fixture(4, "Leah", "Connor", 23, 13, "pool", "sat", "21 september", "10:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
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
    Fixture(15, "Connor", "Geraint", null, null, "pool", "sat", "28 september", "10:45", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(16, "Callum", "Joe", null, null, "pool", "sun", "29 september", "06:15", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(17, "Lili", "Rhiannon", null, null, "pool", "sun", "29 september", "08:45", "Tokyo Stadium, Tokyo"),
    Fixture(18, "Freddy", "Martine", null, null, "pool", "mon", "30 september", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(19, "Josie", "Jack", null, null, "pool", "wed", "02 october", "08:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(20, "Leah", "George", null, null, "pool", "wed", "02 october", "11:15", "Oita Stadium, Oita Prefecture"),
    Fixture(21, "Callum", "Ian", null, null, "pool", "thur", "03 october", "06:15", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(22, "Claire", "Louise", null, null, "pool", "thur", "03 october", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(23, "Connor", "Lee", null, null, "pool", "fri", "04 october", "10:45", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(24, "Lili", "Joe", null, null, "pool", "sat", "05 october", "06:15", "Oita Stadium, Oita Prefecture"),
    Fixture(25, "Naomi", "Julian", null, null, "pool", "sat", "05 october", "09:00", "Tokyo Stadium, Tokyo"),
    Fixture(26, "Gary", "Martine", null, null, "pool", "sat", "05 october", "11:30", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(27, "Leah", "Geraint", null, null, "pool", "sun", "06 october", "05:45", "Tokyo Stadium, Tokyo"),
    Fixture(28, "Josie", "Andrea", null, null, "pool", "sun", "06 october", "08:45", "Kumamoto Stadium, Kumamoto Prefecture, Kumamoto City"),
    Fixture(29, "Connor", "George", null, null, "pool", "tue", "08 october", "11:15", "Kobe Misaki Stadium, Kobe City"),
    Fixture(30, "Julian", "Jack", null, null, "pool", "wed", "09 october", "05:45", "Kumagaya Rugby Stadium, Saitama Prefecture, Kumagaya City"),
    Fixture(31, "Freddy", "Louise", null, null, "pool", "wed", "09 october", "08:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(32, "Rhiannon", "Ian", null, null, "pool", "wed", "09 october", "10:45", "Oita Stadium, Oita Prefecture"),
    Fixture(33, "Lili", "Callum", null, null, "pool", "fri", "11 october", "11:15", "Shizuoka Stadium Ecopa, Shizuoka Prefecture"),
    Fixture(34, "Leah", "Lee", null, null, "pool", "sat", "12 october", "05:45", "City of Toyota Stadium, Aichi Prefecture, Toyota City"),
    Fixture(35, "Naomi", "Josie", null, null, "pool", "sat", "12 october", "09:15", "nternational Stadium Yokohama, Kanagawa Prefecture, Yokohama City"),
    Fixture(36, "Claire", "Martine", null, null, "pool", "sat", "12 october", "11:45", "Fukuoka Hakatanomori Stadium, Fukuoka Prefecture, Fukuoka City"),
    Fixture(37, "Geraint", "George", null, null, "pool", "sun", "13 october", "04:15", "Kamaishi Recovery Memorial Stadium, Iwate Prefecture, Kamaishi City"),
    Fixture(38, "Jack", "Andrea", null, null, "pool", "sun", "13 october", "06:45", "Hanazono Rugby Stadium, Osaka Prefecture, Higashiosaka City"),
    Fixture(39, "Rhiannon", "Joe", null, null, "pool", "sun", "13 october", "09:15", "Kumamoto Stadium, Kumamoto Prefecture, Kumamoto City"),
    Fixture(40, "Gary", "Freddy", null, null, "pool", "sun", "13 october", "11:45", "International Stadium Yokohama, Kanagawa Prefecture, Yokohama City")
]

function getFixture(id){
    return FIXTURES.filter(fixture => fixture['id']==id)[0];
}