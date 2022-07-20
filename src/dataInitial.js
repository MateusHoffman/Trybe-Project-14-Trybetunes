const dataInitial = [
    {
        "artistId": 5040714,
        "artistName": "AC/DC",
        "collectionId": 574050396,
        "collectionName": "Back In Black",
        "collectionPrice": 9.99,
        "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/1e/14/58/1e145814-281a-58e0-3ab1-145f5d1af421/886443673441.jpg/100x100bb.jpg",
        "releaseDate": "2012-11-19T08:00:00Z",
        "trackCount": 11
    },
    {
        "artistId": 5040714,
        "artistName": "AC/DC",
        "collectionId": 579356406,
        "collectionName": "The Complete Collection",
        "collectionPrice": 149.99,
        "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/67/bd/3b/67bd3b76-e12b-20be-153f-dbaf6efaea44/886443705340.jpg/100x100bb.jpg",
        "releaseDate": "2012-11-19T08:00:00Z",
        "trackCount": 291
    },
    {
        "artistId": 5040714,
        "artistName": "AC/DC",
        "collectionId": 574049507,
        "collectionName": "The Razors Edge",
        "collectionPrice": 9.99,
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Features114/v4/fc/c2/f8/fcc2f850-1d81-7440-c0a0-de7fcef1e911/dj.rrgizfic.jpg/100x100bb.jpg",
        "releaseDate": "2012-11-19T08:00:00Z",
        "trackCount": 13
    },
    {
        "artistId": 5040714,
        "artistName": "AC/DC",
        "collectionId": 574043989,
        "collectionName": "Highway to Hell",
        "collectionPrice": 9.99,
        "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music126/v4/b9/c8/ef/b9c8ef42-bbc9-64df-11f8-717571f6730f/886443673458.jpg/100x100bb.jpg",
        "releaseDate": "2012-11-19T08:00:00Z",
        "trackCount": 11
    },
    {
        "artistId": 5040714,
        "artistName": "AC/DC",
        "collectionId": 578509124,
        "collectionName": "The Collection",
        "collectionPrice": 99.99,
        "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Features4/v4/56/e1/c3/56e1c3ab-cbd9-881f-b8bd-765945515952/dj.rwnmlbbh.jpg/100x100bb.jpg",
        "releaseDate": "2012-11-19T08:00:00Z",
        "trackCount": 160
    },
    {
      "artistId": 136975,
      "artistName": "The Beatles",
      "collectionId": 1474815798,
      "collectionName": "Abbey Road (2019 Mix)",
      "collectionPrice": 9.99,
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music114/v4/f6/db/94/f6db94bd-35f8-2806-6459-dee4fbd85c68/19UMGIM68354.rgb.jpg/100x100bb.jpg",
      "releaseDate": "1969-09-26T07:00:00Z",
      "trackCount": 17
  },
  {
      "artistId": 136975,
      "artistName": "The Beatles",
      "collectionId": 1441133100,
      "collectionName": "The Beatles 1967-1970 (The Blue Album)",
      "collectionPrice": 19.99,
      "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music126/v4/a6/8b/65/a68b657c-cac6-68e6-3bde-b79d58fbc795/18UMGIM30762.rgb.jpg/100x100bb.jpg",
      "releaseDate": "1973-04-02T08:00:00Z",
      "trackCount": 29
  },
  {
      "artistId": 136975,
      "artistName": "The Beatles",
      "collectionId": 1441132965,
      "collectionName": "The Beatles 1962-1966 (The Red Album)",
      "collectionPrice": 19.99,
      "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music122/v4/2a/4a/e6/2a4ae63d-ada7-fa57-6f16-02eebcf72f95/18UMGIM29770.rgb.jpg/100x100bb.jpg",
      "releaseDate": "1973-04-02T08:00:00Z",
      "trackCount": 27
  },
  {
      "artistId": 136975,
      "artistName": "The Beatles",
      "collectionId": 1573250333,
      "collectionName": "Sgt. Pepper's Lonely Hearts Club Band (Remix)",
      "collectionPrice": 9.99,
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/64/85/d2/6485d219-91ac-5481-2668-7eab1320436d/21UMGIM57007.rgb.jpg/100x100bb.jpg",
      "releaseDate": "1967-06-01T07:00:00Z",
      "trackCount": 13
  },
  {
      "artistId": 136975,
      "artistName": "The Beatles",
      "collectionId": 1441164359,
      "collectionName": "Rubber Soul",
      "collectionPrice": 12.99,
      "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/af/20/aa/af20aa89-4002-11fb-25d8-ff544af67eb4/00602567725404.rgb.jpg/100x100bb.jpg",
      "releaseDate": "1965-12-03T08:00:00Z",
      "trackCount": 16
  },
  {
    "artistId": 3296287,
    "artistName": "Queen",
    "collectionId": 1440650428,
    "collectionName": "Greatest Hits I, II & III: The Platinum Collection",
    "collectionPrice": 24.99,
    "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/4d/08/2a/4d082a9e-7898-1aa1-a02f-339810058d9e/14DMGIM05632.rgb.jpg/100x100bb.jpg",
    "releaseDate": "2014-01-01T08:00:00Z",
    "trackCount": 51
},
{
    "artistId": 3296287,
    "artistName": "Queen",
    "collectionId": 1422650667,
    "collectionName": "Greatest Hits (1981 UK Edition)",
    "collectionPrice": 10.99,
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music124/v4/fb/93/0f/fb930f12-74b1-ef6e-774e-fb22302f33e9/14DMGIM05636.rgb.jpg/100x100bb.jpg",
    "releaseDate": "2014-01-01T08:00:00Z",
    "trackCount": 18
},
{
    "artistId": 3296287,
    "artistName": "Queen",
    "collectionId": 1434899831,
    "collectionName": "Bohemian Rhapsody (The Original Soundtrack)",
    "collectionPrice": 11.99,
    "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/ef/54/0b/ef540ba4-bbe7-0809-aa55-97ce32e0e13d/18UMGIM55763.rgb.jpg/100x100bb.jpg",
    "releaseDate": "2018-10-19T07:00:00Z",
    "trackCount": 22
},
{
    "artistId": 3296287,
    "artistName": "Queen",
    "collectionId": 1440650816,
    "collectionName": "A Night at the Opera (Deluxe Edition)",
    "collectionPrice": 11.99,
    "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/a7/00/d7/a700d715-a493-19a5-3de9-5753d139419f/14DMGIM05597.rgb.jpg/100x100bb.jpg",
    "releaseDate": "2014-01-01T08:00:00Z",
    "trackCount": 18
},
{
    "artistId": 1419227,
    "artistName": "Beyoncé",
    "collectionId": 780330041,
    "collectionName": "BEYONCÉ",
    "collectionPrice": 15.99,
    "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Features4/v4/dc/ca/29/dcca295f-851e-5faf-a3b4-030965fa80f2/dj.jyrlgxlq.jpg/100x100bb.jpg",
    "releaseDate": "2013-12-13T08:00:00Z",
    "trackCount": 33
},
{
  "artistId": 26643,
  "artistName": "Muddy Waters & The Rolling Stones",
  "collectionId": 1440917716,
  "collectionName": "Live at the Checkerboard Lounge (Chicago, 1981)",
  "collectionPrice": 11.99,
  "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music128/v4/d0/8b/d0/d08bd030-109e-67bf-2a57-4653efc29c9f/00670211032758.rgb.jpg/100x100bb.jpg",
  "releaseDate": "2012-07-09T07:00:00Z",
  "trackCount": 21
},
{
  "artistId": 1249595,
  "artistName": "The Rolling Stones",
  "collectionId": 1440764786,
  "collectionName": "Hot Rocks 1964-1971",
  "collectionPrice": 14.99,
  "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/77/fc/b4/77fcb492-2938-a288-dd58-b0649d48c1bc/00018771895725.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1972-01-11T08:00:00Z",
  "trackCount": 22
},
{
  "artistId": 26643,
  "artistName": "Muddy Waters & The Rolling Stones",
  "collectionId": 1440916788,
  "collectionName": "Live At the Checkerboard Lounge",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/f8/e9/b1/f8e9b1d9-1f14-f0e5-118b-d0f8e6e7d153/00670211032666.rgb.jpg/100x100bb.jpg",
  "releaseDate": "2012-07-09T07:00:00Z",
  "trackCount": 11
},
{
  "artistId": 1249595,
  "artistName": "The Rolling Stones",
  "collectionId": 1500642838,
  "collectionName": "Let It Bleed (Remastered)",
  "collectionPrice": 8.99,
  "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/69/64/67/696467fe-9ed1-b65e-1016-a10d07e6464d/20UMGIM14087.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1969-11-29T08:00:00Z",
  "trackCount": 9
},
{
  "artistId": 1249595,
  "artistName": "The Rolling Stones",
  "collectionId": 1440812661,
  "collectionName": "Sticky Fingers (2015 Remaster)",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/4a/1e/da/4a1eda08-d2cf-da00-67f0-90b8e2d9179b/00602537190980.rgb.jpg/100x100bb.jpg",
  "releaseDate": "2012-01-01T08:00:00Z",
  "trackCount": 10
},
{
  "artistId": 106621,
  "artistName": "Guns N' Roses",
  "collectionId": 1377813284,
  "collectionName": "Appetite for Destruction",
  "collectionPrice": 6.99,
  "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music125/v4/a0/4d/c4/a04dc484-03cc-02aa-fa82-5334fcb4bc16/18UMGIM24878.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1987-07-21T07:00:00Z",
  "trackCount": 12
},
{
  "artistId": 106621,
  "artistName": "Guns N' Roses",
  "collectionId": 1440896026,
  "collectionName": "Use Your Illusion I",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/6a/e2/1f/6ae21fa9-c897-3be1-2967-50eefae22b93/06UMGIM05041.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1991-01-01T08:00:00Z",
  "trackCount": 16
},
{
  "artistId": 106621,
  "artistName": "Guns N' Roses",
  "collectionId": 1389971138,
  "collectionName": "Use Your Illusion II",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/db/8e/35/db8e356d-76e8-1e10-d7cb-87870bdbfad2/18UMGIM31437.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1991-09-17T07:00:00Z",
  "trackCount": 14
},
{
  "artistId": 106621,
  "artistName": "Guns N' Roses",
  "collectionId": 1440756253,
  "collectionName": "Chinese Democracy",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is4-ssl.mzstatic.com/image/thumb/Music124/v4/cd/7d/bb/cd7dbb63-491a-3d65-0b29-61886ef2cd84/00602517906099.rgb.jpg/100x100bb.jpg",
  "releaseDate": "2008-01-01T08:00:00Z",
  "trackCount": 15
},
{
  "artistId": 106621,
  "artistName": "Guns N' Roses",
  "collectionId": 1440905381,
  "collectionName": "G N' R Lies",
  "collectionPrice": 9.99,
  "artworkUrl100": "https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/8e/d9/ba/8ed9ba3b-bbb5-b7b1-7441-39e7f0f42699/00720642419823.rgb.jpg/100x100bb.jpg",
  "releaseDate": "1988-01-01T08:00:00Z",
  "trackCount": 8
},
]

export default dataInitial
