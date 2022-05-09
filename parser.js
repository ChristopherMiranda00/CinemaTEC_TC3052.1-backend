const fs = require('fs');

const movies = [
  {
    "adult": false,
    "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
    "genre_ids": [
      28,
      878,
      35,
      10751,
      12
    ],
    "id": 675353,
    "original_language": "en",
    "original_title": "Sonic the Hedgehog 2",
    "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
    "popularity": 14189.164,
    "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
    "release_date": "2022-03-30",
    "title": "Sonic the Hedgehog 2",
    "video": false,
    "vote_average": 7.7,
    "vote_count": 1087
  },
  {
    "adult": false,
    "backdrop_path": "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg",
    "genre_ids": [
      14,
      28,
      12
    ],
    "id": 453395,
    "original_language": "en",
    "original_title": "Doctor Strange in the Multiverse of Madness",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "popularity": 6815.895,
    "poster_path": "/wRnbWt44nKjsFPrqSmwYki5vZtF.jpg",
    "release_date": "2022-05-04",
    "title": "Doctor Strange in the Multiverse of Madness",
    "video": false,
    "vote_average": 7.6,
    "vote_count": 918
  },
  {
    "adult": false,
    "backdrop_path": "/5P8SmMzSNYikXpxil6BYzJ16611.jpg",
    "genre_ids": [
      80,
      9648,
      53
    ],
    "id": 414906,
    "original_language": "en",
    "original_title": "The Batman",
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "popularity": 6727.13,
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "release_date": "2022-03-01",
    "title": "The Batman",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 4359
  },
  {
    "adult": false,
    "backdrop_path": "/fEe5fe82qHzjO4yej0o79etqsWV.jpg",
    "genre_ids": [
      16,
      35,
      28,
      10751,
      80
    ],
    "id": 629542,
    "original_language": "en",
    "original_title": "The Bad Guys",
    "overview": "When the infamous Bad Guys are finally caught after years of countless heists and being the world’s most-wanted villains, Mr. Wolf brokers a deal to save them all from prison.",
    "popularity": 4294.361,
    "poster_path": "/7qop80YfuO0BwJa1uXk1DXUUEwv.jpg",
    "release_date": "2022-03-17",
    "title": "The Bad Guys",
    "video": false,
    "vote_average": 7.8,
    "vote_count": 271
  },
  {
    "adult": false,
    "backdrop_path": "/192vHmAPbk5esL34XMKZ1YLGFjr.jpg",
    "genre_ids": [
      28,
      53,
      80
    ],
    "id": 763285,
    "original_language": "en",
    "original_title": "Ambulance",
    "overview": "Decorated veteran Will Sharp, desperate for money to cover his wife's medical bills, asks for help from his adoptive brother Danny. A charismatic career criminal, Danny instead offers him a score: the biggest bank heist in Los Angeles history: $32 million.",
    "popularity": 3883.722,
    "poster_path": "/kuxjMVuc3VTD7p42TZpJNsSrM1V.jpg",
    "release_date": "2022-03-16",
    "title": "Ambulance",
    "video": false,
    "vote_average": 7,
    "vote_count": 487
  },
  {
    "adult": false,
    "backdrop_path": "/i0zbSmiyyylh7H3Qb4jgscz46Pm.jpg",
    "genre_ids": [
      27
    ],
    "id": 893370,
    "original_language": "es",
    "original_title": "Virus-32",
    "overview": "A virus is unleashed and a chilling massacre runs through the streets of Montevideo.",
    "popularity": 2971.762,
    "poster_path": "/wZiF79hbhLK1U2Pj9bF67NAKXQR.jpg",
    "release_date": "2022-04-21",
    "title": "Virus:32",
    "video": false,
    "vote_average": 6.7,
    "vote_count": 33
  },
  {
    "adult": false,
    "backdrop_path": "/x747ZvF0CcYYTTpPRCoUrxA2cYy.jpg",
    "genre_ids": [
      878,
      12,
      28
    ],
    "id": 406759,
    "original_language": "en",
    "original_title": "Moonfall",
    "overview": "A mysterious force knocks the moon from its orbit around Earth and sends it hurtling on a collision course with life as we know it.",
    "popularity": 2472.074,
    "poster_path": "/odVv1sqVs0KxBXiA8bhIBlPgalx.jpg",
    "release_date": "2022-02-03",
    "title": "Moonfall",
    "video": false,
    "vote_average": 6.5,
    "vote_count": 915
  },
  {
    "adult": false,
    "backdrop_path": "/2n95p9isIi1LYTscTcGytlI4zYd.jpg",
    "genre_ids": [
      18,
      53,
      80
    ],
    "id": 799876,
    "original_language": "en",
    "original_title": "The Outfit",
    "overview": "Leonard is an English tailor who used to craft suits on London’s world-famous Savile Row. After a personal tragedy, he’s ended up in Chicago, operating a small tailor shop in a rough part of town where he makes beautiful clothes for the only people around who can afford them: a family of vicious gangsters.",
    "popularity": 2429.97,
    "poster_path": "/lZa5EB6PVJBT5mxhgZS5ftqdAm6.jpg",
    "release_date": "2022-02-25",
    "title": "The Outfit",
    "video": false,
    "vote_average": 7,
    "vote_count": 182
  },
  {
    "adult": false,
    "backdrop_path": "/xicKILMzPn6XZYCOpWwaxlUzg6S.jpg",
    "genre_ids": [
      53,
      28
    ],
    "id": 294793,
    "original_language": "en",
    "original_title": "All the Old Knives",
    "overview": "When the CIA discovers one of its agents leaked information that cost more than 100 people their lives, veteran operative Henry Pelham is assigned to root out the mole with his former lover and colleague Celia Harrison.",
    "popularity": 1437.906,
    "poster_path": "/g4tMniKxol1TBJrHlAtiDjjlx4Q.jpg",
    "release_date": "2022-04-08",
    "title": "All the Old Knives",
    "video": false,
    "vote_average": 6,
    "vote_count": 204
  },
  {
    "adult": false,
    "backdrop_path": "/An1nKjXahrChfEbZ3MAE8fsiut1.jpg",
    "genre_ids": [
      27
    ],
    "id": 661791,
    "original_language": "es",
    "original_title": "La abuela",
    "overview": "A Paris model must return to Madrid where her grandmother, who raised her, has had a stroke. But spending just a few days with this relative turns into an unexpected nightmare.",
    "popularity": 1326.116,
    "poster_path": "/eIUixNvox4U4foL5Z9KbN9HXYSM.jpg",
    "release_date": "2022-01-28",
    "title": "The Grandmother",
    "video": false,
    "vote_average": 6,
    "vote_count": 152
  },
  {
    "adult": false,
    "backdrop_path": "/wdjdHBDwmynWUrJcNzS24uegvK5.jpg",
    "genre_ids": [
      14,
      12
    ],
    "id": 338953,
    "original_language": "en",
    "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    "popularity": 1201.403,
    "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
    "release_date": "2022-04-06",
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 904
  },
  {
    "adult": false,
    "backdrop_path": "/tq3klWQevRK0Or0cGhsw0h3FDWQ.jpg",
    "genre_ids": [
      12,
      16,
      35,
      10751,
      14
    ],
    "id": 676705,
    "original_language": "fr",
    "original_title": "Pil",
    "overview": "Pil, a little vagabond girl, lives on the streets of the medieval city of Roc-en-Brume, along with her three tame weasels. She survives of food stolen from the castle of the sinister Regent Tristain. One day, to escape his guards, Pil disguises herself as a princess. Thus she embarks upon a mad, delirious adventure, together with Crobar, a big clumsy guard who thinks she's a noble, and Rigolin, a young crackpot jester. Pil is going to have to save Roland, rightful heir to the throne under the curse of a spell. This adventure will turn the entire kingdom upside down, and teach Pil that nobility can be found in all of us.",
    "popularity": 1148.801,
    "poster_path": "/abPQVYyNfVuGoFUfGVhlNecu0QG.jpg",
    "release_date": "2021-08-11",
    "title": "Pil's Adventures",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 76
  },
  {
    "adult": false,
    "backdrop_path": "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg",
    "genre_ids": [
      16,
      35,
      10751,
      10402
    ],
    "id": 438695,
    "original_language": "en",
    "original_title": "Sing 2",
    "overview": "Buster and his new cast now have their sights set on debuting a new show at the Crystal Tower Theater in glamorous Redshore City. But with no connections, he and his singers must sneak into the Crystal Entertainment offices, run by the ruthless wolf mogul Jimmy Crystal, where the gang pitches the ridiculous idea of casting the lion rock legend Clay Calloway in their show. Buster must embark on a quest to find the now-isolated Clay and persuade him to return to the stage.",
    "popularity": 902.677,
    "poster_path": "/aWeKITRFbbwY8txG5uCj4rMCfSP.jpg",
    "release_date": "2021-12-01",
    "title": "Sing 2",
    "video": false,
    "vote_average": 8.1,
    "vote_count": 2692
  },
  {
    "adult": false,
    "backdrop_path": "/tj4lzGgHrfjnjVqAKkLIjFqPSyO.jpg",
    "genre_ids": [
      28,
      878,
      14
    ],
    "id": 526896,
    "original_language": "en",
    "original_title": "Morbius",
    "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
    "popularity": 875.352,
    "poster_path": "/h4WLN3cmEjCsH1fNGRfvGV6IPBX.jpg",
    "release_date": "2022-03-30",
    "title": "Morbius",
    "video": false,
    "vote_average": 5.9,
    "vote_count": 589
  },
  {
    "adult": false,
    "backdrop_path": "/6KgpxK3u4zOKLhTa16XNiYiDkJf.jpg",
    "genre_ids": [
      99,
      80
    ],
    "id": 933554,
    "original_language": "en",
    "original_title": "2000 Mules",
    "overview": "True the Vote has been working with Dinesh D’Souza to create a bombshell movie that uses footage they obtained of ballot boxes in key states across America to steal the election in 2020.  100 Percent Fed Up reports – Using geo-tracking devices, True the Vote was able to take footage from drop boxes across America in key states like Georgia and others to track over 2,000 ‘mules” wearing gloves and disguises to stuff ballot boxes.",
    "popularity": 713.513,
    "poster_path": "/9UzHZdXIIIbixHIwGZCN9VqplVG.jpg",
    "release_date": "2022-05-02",
    "title": "2000 Mules",
    "video": false,
    "vote_average": 10,
    "vote_count": 2
  },
  {
    "adult": false,
    "backdrop_path": "/yzH5zvuEzzsHLZnn0jwYoPf0CMT.jpg",
    "genre_ids": [
      53,
      28
    ],
    "id": 760926,
    "original_language": "en",
    "original_title": "Gold",
    "overview": "In the not-too-distant future, two drifters traveling through the desert stumble across the biggest gold nugget ever found and the dream of immense wealth and greed takes hold. They hatch a plan to excavate their bounty, with one man leaving to secure the necessary tools while the other remains with the gold. The man who remains must endure harsh desert elements, ravenous wild dogs, and mysterious intruders, while battling the sinking suspicion that he has been abandoned to his fate.",
    "popularity": 709.46,
    "poster_path": "/ejXBuNLvK4kZ7YcqeKqUWnCxdJq.jpg",
    "release_date": "2022-01-13",
    "title": "Gold",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 232
  },
  {
    "adult": false,
    "backdrop_path": "/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg",
    "genre_ids": [
      27,
      9648,
      53,
      35
    ],
    "id": 646385,
    "original_language": "en",
    "original_title": "Scream",
    "overview": "Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.",
    "popularity": 700.313,
    "poster_path": "/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
    "release_date": "2022-01-12",
    "title": "Scream",
    "video": false,
    "vote_average": 6.8,
    "vote_count": 1249
  },
  {
    "adult": false,
    "backdrop_path": "/figlwUsXXFehX3IebdjqNLV6vWk.jpg",
    "genre_ids": [
      28,
      53
    ],
    "id": 628900,
    "original_language": "en",
    "original_title": "The Contractor",
    "overview": "After being involuntarily discharged from the U.S. Special Forces, James Harper decides to support his family by joining a private contracting organization alongside his best friend and under the command of a fellow veteran. Overseas on a covert mission, Harper must evade those trying to kill him while making his way back home.",
    "popularity": 655.63,
    "poster_path": "/rJPGPZ5soaG27MK90oKpioSiJE2.jpg",
    "release_date": "2022-03-10",
    "title": "The Contractor",
    "video": false,
    "vote_average": 6.4,
    "vote_count": 196
  },
  {
    "adult": false,
    "backdrop_path": "/qNRkfXBdAuXk9Qs3BEDIfmbAK9w.jpg",
    "genre_ids": [
      80,
      28
    ],
    "id": 883502,
    "original_language": "en",
    "original_title": "Fortress: Sniper's Eye",
    "overview": "Weeks after the deadly assault on Fortress Camp, Robert makes a daring rescue to save Sasha, the widow of his old nemesis Balzary. But back in the camp's command bunker, it appears Sasha may have devious plans of her own. As a new attack breaks out, Robert is confronted with a familiar face he thought he'd never see again…",
    "popularity": 589.87,
    "poster_path": "/61J34xHVVdQHbJ4MSCWQo4e727v.jpg",
    "release_date": "2022-04-29",
    "title": "Fortress: Sniper's Eye",
    "video": false,
    "vote_average": 6.2,
    "vote_count": 11
  },
  {
    "adult": false,
    "backdrop_path": "/f2J8DpT5bqV0AiI9VVcfiuqKo5l.jpg",
    "genre_ids": [
      35,
      28,
      99
    ],
    "id": 656663,
    "original_language": "en",
    "original_title": "Jackass Forever",
    "overview": "Celebrate the joy of a perfectly executed shot to the groin as Johnny Knoxville, Steve-O and the rest of the gang return alongside some newcomers for one final round of hilarious, wildly absurd and often dangerous displays of stunts and comedy.",
    "popularity": 531.25,
    "poster_path": "/ugIdyvtAzHWOguD91UjHKoAvfum.jpg",
    "release_date": "2022-02-01",
    "title": "Jackass Forever",
    "video": false,
    "vote_average": 6.9,
    "vote_count": 329
  }
];

const parseData = () => {
  const data = movies.map(movie => ({
    title: movie.title,
    genre: '',
    overview: movie.overview,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    poster_path: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
  }));

  const jsonData = JSON.stringify(data);

  fs.writeFile('movies.json', jsonData, (err) => {
    if (err) throw err;
  });
};

parseData();