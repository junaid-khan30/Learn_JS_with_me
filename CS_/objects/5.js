var scoreData = [{ "id": 1, "full_name": "Sloane Loveridge", "slack_name": "Sloane", "email": "sloveridge0@aol.com", "score": 22 },
{ "id": 2, "full_name": "Orv Heskins", "slack_name": "Orv", "email": "oheskins1@fotki.com", "score": 2 },
{ "id": 3, "full_name": "Nadya McBeath", "slack_name": "Nadya", "email": "nmcbeath2@google.it", "score": 25 },
{ "id": 4, "full_name": "Balduin Enriques", "slack_name": "Balduin", "email": "benriques3@nsw.gov.au", "score": 29 },
{ "id": 5, "full_name": "Zebulon Garfit", "slack_name": "Zebulon", "email": "zgarfit4@marriott.com", "score": 39 },
{ "id": 6, "full_name": "Nicoline Coode", "slack_name": "Nicoline", "email": "ncoode5@walmart.com", "score": 16 },
{ "id": 7, "full_name": "Saloma Drury", "slack_name": "Saloma", "email": "sdrury6@un.org", "score": 11 },
{ "id": 8, "full_name": "Huntington Lubbock", "slack_name": "Huntington", "email": "hlubbock7@ibm.com", "score": 6 },
{ "id": 9, "full_name": "Kevon Crosoer", "slack_name": "Kevon", "email": "kcrosoer8@sbwire.com", "score": 36 },
{ "id": 10, "full_name": "Tamar Rodie", "slack_name": "Tamar", "email": "trodie9@chicagotribune.com", "score": 39 },
{ "id": 11, "full_name": "Gwyneth Rustich", "slack_name": "Gwyneth", "email": "grusticha@wordpress.com", "score": 34 },
{ "id": 12, "full_name": "Hartwell Lett", "slack_name": "Hartwell", "email": "hlettb@blogger.com", "score": 3 },
{ "id": 13, "full_name": "Jonis Smallthwaite", "slack_name": "Jonis", "email": "jsmallthwaitec@cnet.com", "score": 8 },
{ "id": 14, "full_name": "Shandeigh Follows", "slack_name": "Shandeigh", "email": "sfollowsd@shareasale.com", "score": 26 },
{ "id": 15, "full_name": "Jeffry Hickford", "slack_name": "Jeffry", "email": "jhickforde@samsung.com", "score": 36 },
{ "id": 16, "full_name": "Scarlet Larby", "slack_name": "Scarlet", "email": "slarbyf@theguardian.com", "score": 39 },
{ "id": 17, "full_name": "Quentin MacBey", "slack_name": "Quentin", "email": "qmacbeyg@exblog.jp", "score": 8 },
{ "id": 18, "full_name": "Bridget Dury", "slack_name": "Bridget", "email": "bduryh@hexun.com", "score": 37 },
{ "id": 19, "full_name": "Emlen Lewnden", "slack_name": "Emlen", "email": "elewndeni@prlog.org", "score": 26 },
{ "id": 20, "full_name": "Townsend Brandli", "slack_name": "Townsend", "email": "tbrandlij@theglobeandmail.com", "score": 1 },
{ "id": 21, "full_name": "Ange Axcel", "slack_name": "Ange", "email": "aaxcelk@bluehost.com", "score": 2 },
{ "id": 22, "full_name": "Karoline Thunnercliff", "slack_name": "Karoline", "email": "kthunnercliffl@answers.com", "score": 15 },
{ "id": 23, "full_name": "Katharyn Lindermann", "slack_name": "Katharyn", "email": "klindermannm@blinklist.com", "score": 13 },
{ "id": 24, "full_name": "Petrina Sambidge", "slack_name": "Petrina", "email": "psambidgen@youtube.com", "score": 12 },
{ "id": 25, "full_name": "Holly-anne Espy", "slack_name": "Holly-anne", "email": "hespyo@biglobe.ne.jp", "score": 23 },
{ "id": 26, "full_name": "Brnaba Goodbarr", "slack_name": "Brnaba", "email": "bgoodbarrp@360.cn", "score": 9 },
{ "id": 27, "full_name": "Sarette Dovydenas", "slack_name": "Sarette", "email": "sdovydenasq@usatoday.com", "score": 38 },
{ "id": 28, "full_name": "Legra Gouck", "slack_name": "Legra", "email": "lgouckr@last.fm", "score": 9 },
{ "id": 29, "full_name": "Garret Stolberg", "slack_name": "Garret", "email": "gstolbergs@tmall.com", "score": 18 },
{ "id": 30, "full_name": "Angel Renak", "slack_name": "Angel", "email": "arenakt@google.com", "score": 23 },
{ "id": 31, "full_name": "Marylou Tulloch", "slack_name": "Marylou", "email": "mtullochu@domainmarket.com", "score": 8 },
{ "id": 32, "full_name": "Clarette Nendick", "slack_name": "Clarette", "email": "cnendickv@engadget.com", "score": 5 },
{ "id": 33, "full_name": "Hervey Dunton", "slack_name": "Hervey", "email": "hduntonw@fema.gov", "score": 15 },
{ "id": 34, "full_name": "Karl Trayhorn", "slack_name": "Karl", "email": "ktrayhornx@sitemeter.com", "score": 2 },
{ "id": 35, "full_name": "Sianna Chaplain", "slack_name": "Sianna", "email": "schaplainy@arstechnica.com", "score": 38 },
{ "id": 36, "full_name": "Terrie Omrod", "slack_name": "Terrie", "email": "tomrodz@opera.com", "score": 10 }
];

function deleteUsers(data) {
    for(var i = 0; i< data.length; i++) {
        if ( data[i].score <= 10) {
            data.splice(i, 1);
            --i;
        }
    }
    return data;
}
console.log(scoreData.length);
console.log(deleteUsers(scoreData));

