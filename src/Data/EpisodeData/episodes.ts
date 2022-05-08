/* eslint-disable max-len */
export type EpisodeProps = {
    id: number;
    name: string;
    airDate: string;
    episode: string;
    image: string;
    characters: any[];
    url: string;
    created: string;
    video: string;
}

const episodeData = [
  {
    id: 1,
    name: 'Pilot',
    airDate: 'December 2, 2013',
    episode: 'S01E01',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/4/4b/S1e1_Rick-and-morty.png/',
    video: 'https://www.youtube.com/embed/qtdCIs6JdXg?list=PLnB5enXU4M7U9b3DN0VKeKJDbH4pbYaVZ',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/35',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/62',
      'https://rickandmortyapi.com/api/character/92',
      'https://rickandmortyapi.com/api/character/127',
      'https://rickandmortyapi.com/api/character/144',
      'https://rickandmortyapi.com/api/character/158',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/179',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/249',
      'https://rickandmortyapi.com/api/character/271',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/394',
      'https://rickandmortyapi.com/api/character/395',
      'https://rickandmortyapi.com/api/character/435',
    ],
    url: 'https://rickandmortyapi.com/api/episode/1',
    created: '2017-11-10T12:56:33.798Z',
  },
  {
    id: 2,
    name: 'Lawnmower Dog',
    airDate: 'December 9, 2013',
    episode: 'S01E02',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d7/Lawnmower_Dog.png/',
    video: 'https://www.youtube.com/embed/gR1WFUP4bvs',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/46',
      'https://rickandmortyapi.com/api/character/63',
      'https://rickandmortyapi.com/api/character/80',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/221',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/246',
      'https://rickandmortyapi.com/api/character/304',
      'https://rickandmortyapi.com/api/character/305',
      'https://rickandmortyapi.com/api/character/306',
      'https://rickandmortyapi.com/api/character/329',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/396',
      'https://rickandmortyapi.com/api/character/397',
      'https://rickandmortyapi.com/api/character/398',
      'https://rickandmortyapi.com/api/character/405',
    ],
    url: 'https://rickandmortyapi.com/api/episode/2',
    created: '2017-11-10T12:56:33.916Z',
  },
  {
    id: 3,
    name: 'Anatomy Park',
    airDate: 'December 16, 2013',
    episode: 'S01E03',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d3/Anatomy_Park_7.png/',
    video: 'https://www.youtube.com/embed/g00-7nGOI5o',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/12',
      'https://rickandmortyapi.com/api/character/17',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/45',
      'https://rickandmortyapi.com/api/character/96',
      'https://rickandmortyapi.com/api/character/97',
      'https://rickandmortyapi.com/api/character/98',
      'https://rickandmortyapi.com/api/character/99',
      'https://rickandmortyapi.com/api/character/100',
      'https://rickandmortyapi.com/api/character/101',
      'https://rickandmortyapi.com/api/character/108',
      'https://rickandmortyapi.com/api/character/112',
      'https://rickandmortyapi.com/api/character/114',
      'https://rickandmortyapi.com/api/character/169',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/186',
      'https://rickandmortyapi.com/api/character/201',
      'https://rickandmortyapi.com/api/character/268',
      'https://rickandmortyapi.com/api/character/300',
      'https://rickandmortyapi.com/api/character/302',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/356',
    ],
    url: 'https://rickandmortyapi.com/api/episode/3',
    created: '2017-11-10T12:56:34.022Z',
  },
  {
    id: 4,
    name: 'M. Night Shaym-Aliens!',
    airDate: 'January 13, 2014',
    episode: 'S01E04',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2c/Screenshot_2015-09-28_at_7.09.48_PM.png/',
    video: 'https://www.youtube.com/embed/qVpqaac4mZ0',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/87',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/179',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/191',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/241',
      'https://rickandmortyapi.com/api/character/270',
      'https://rickandmortyapi.com/api/character/337',
      'https://rickandmortyapi.com/api/character/338',
    ],
    url: 'https://rickandmortyapi.com/api/episode/4',
    created: '2017-11-10T12:56:34.129Z',
  },
  {
    id: 5,
    name: 'Meeseeks and Destroy',
    airDate: 'January 20, 2014',
    episode: 'S01E05',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e7/Meeseeks_and_Drestroy.png/',
    video: 'https://www.youtube.com/embed/45YvxfCroYg',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/41',
      'https://rickandmortyapi.com/api/character/89',
      'https://rickandmortyapi.com/api/character/116',
      'https://rickandmortyapi.com/api/character/117',
      'https://rickandmortyapi.com/api/character/120',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/193',
      'https://rickandmortyapi.com/api/character/238',
      'https://rickandmortyapi.com/api/character/242',
      'https://rickandmortyapi.com/api/character/271',
      'https://rickandmortyapi.com/api/character/303',
      'https://rickandmortyapi.com/api/character/326',
      'https://rickandmortyapi.com/api/character/333',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/343',
      'https://rickandmortyapi.com/api/character/399',
      'https://rickandmortyapi.com/api/character/400',
    ],
    url: 'https://rickandmortyapi.com/api/episode/5',
    created: '2017-11-10T12:56:34.236Z',
  },
  {
    id: 6,
    name: 'Rick Potion #9',
    airDate: 'January 27, 2014',
    episode: 'S01E06',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/b/b8/Rick-and-Morty-Season-1-Episode-6-10-4c17.jpg/',
    video: 'https://www.youtube.com/embed/Pjp7qDg-KKk',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/38',
      'https://rickandmortyapi.com/api/character/58',
      'https://rickandmortyapi.com/api/character/82',
      'https://rickandmortyapi.com/api/character/83',
      'https://rickandmortyapi.com/api/character/92',
      'https://rickandmortyapi.com/api/character/155',
      'https://rickandmortyapi.com/api/character/175',
      'https://rickandmortyapi.com/api/character/179',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/216',
      'https://rickandmortyapi.com/api/character/234',
      'https://rickandmortyapi.com/api/character/239',
      'https://rickandmortyapi.com/api/character/249',
      'https://rickandmortyapi.com/api/character/251',
      'https://rickandmortyapi.com/api/character/271',
      'https://rickandmortyapi.com/api/character/293',
      'https://rickandmortyapi.com/api/character/338',
      'https://rickandmortyapi.com/api/character/343',
      'https://rickandmortyapi.com/api/character/394',
    ],
    url: 'https://rickandmortyapi.com/api/episode/6',
    created: '2017-11-10T12:56:34.339Z',
  },
  {
    id: 7,
    name: 'Raising Gazorpazorp',
    airDate: 'March 10, 2014',
    episode: 'S01E07',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/d/d3/Raising_Gazorpazorp.png/',
    video: 'https://www.youtube.com/embed/Hp0sSgeaW4w',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/59',
      'https://rickandmortyapi.com/api/character/151',
      'https://rickandmortyapi.com/api/character/168',
      'https://rickandmortyapi.com/api/character/211',
      'https://rickandmortyapi.com/api/character/230',
      'https://rickandmortyapi.com/api/character/258',
      'https://rickandmortyapi.com/api/character/329',
      'https://rickandmortyapi.com/api/character/376',
      'https://rickandmortyapi.com/api/character/401',
    ],
    url: 'https://rickandmortyapi.com/api/episode/7',
    created: '2017-11-10T12:56:34.441Z',
  },
  {
    id: 8,
    name: 'Rixty Minutes',
    airDate: 'March 17, 2014',
    episode: 'S01E08',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/f/fb/Rixty_Minutes_Better_Picture.png/',
    video: 'https://www.youtube.com/embed/Beki0y3znwI',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/20',
      'https://rickandmortyapi.com/api/character/28',
      'https://rickandmortyapi.com/api/character/29',
      'https://rickandmortyapi.com/api/character/34',
      'https://rickandmortyapi.com/api/character/37',
      'https://rickandmortyapi.com/api/character/54',
      'https://rickandmortyapi.com/api/character/88',
      'https://rickandmortyapi.com/api/character/91',
      'https://rickandmortyapi.com/api/character/129',
      'https://rickandmortyapi.com/api/character/134',
      'https://rickandmortyapi.com/api/character/136',
      'https://rickandmortyapi.com/api/character/145',
      'https://rickandmortyapi.com/api/character/153',
      'https://rickandmortyapi.com/api/character/157',
      'https://rickandmortyapi.com/api/character/176',
      'https://rickandmortyapi.com/api/character/183',
      'https://rickandmortyapi.com/api/character/184',
      'https://rickandmortyapi.com/api/character/195',
      'https://rickandmortyapi.com/api/character/207',
      'https://rickandmortyapi.com/api/character/214',
      'https://rickandmortyapi.com/api/character/222',
      'https://rickandmortyapi.com/api/character/250',
      'https://rickandmortyapi.com/api/character/266',
      'https://rickandmortyapi.com/api/character/277',
      'https://rickandmortyapi.com/api/character/279',
      'https://rickandmortyapi.com/api/character/314',
      'https://rickandmortyapi.com/api/character/315',
      'https://rickandmortyapi.com/api/character/316',
      'https://rickandmortyapi.com/api/character/317',
      'https://rickandmortyapi.com/api/character/318',
      'https://rickandmortyapi.com/api/character/351',
      'https://rickandmortyapi.com/api/character/358',
      'https://rickandmortyapi.com/api/character/367',
      'https://rickandmortyapi.com/api/character/370',
      'https://rickandmortyapi.com/api/character/373',
      'https://rickandmortyapi.com/api/character/402',
      'https://rickandmortyapi.com/api/character/403',
      'https://rickandmortyapi.com/api/character/404',
      'https://rickandmortyapi.com/api/character/405',
      'https://rickandmortyapi.com/api/character/406',
      'https://rickandmortyapi.com/api/character/407',
      'https://rickandmortyapi.com/api/character/408',
      'https://rickandmortyapi.com/api/character/409',
      'https://rickandmortyapi.com/api/character/410',
      'https://rickandmortyapi.com/api/character/411',
      'https://rickandmortyapi.com/api/character/412',
      'https://rickandmortyapi.com/api/character/413',
      'https://rickandmortyapi.com/api/character/414',
      'https://rickandmortyapi.com/api/character/415',
      'https://rickandmortyapi.com/api/character/416',
      'https://rickandmortyapi.com/api/character/417',
      'https://rickandmortyapi.com/api/character/418',
    ],
    url: 'https://rickandmortyapi.com/api/episode/8',
    created: '2017-11-10T12:56:34.543Z',
  },
  {
    id: 9,
    name: 'Something Ricked This Way Comes',
    airDate: 'March 24, 2014',
    episode: 'S01E09',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/2e/Something_Ricked_This_Way_Comes.png/',
    video: 'https://www.youtube.com/embed/ONfWJ7zpERs',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/88',
      'https://rickandmortyapi.com/api/character/192',
      'https://rickandmortyapi.com/api/character/240',
      'https://rickandmortyapi.com/api/character/243',
      'https://rickandmortyapi.com/api/character/251',
      'https://rickandmortyapi.com/api/character/272',
      'https://rickandmortyapi.com/api/character/307',
      'https://rickandmortyapi.com/api/character/419',
      'https://rickandmortyapi.com/api/character/420',
      'https://rickandmortyapi.com/api/character/421',
      'https://rickandmortyapi.com/api/character/422',
      'https://rickandmortyapi.com/api/character/826',
    ],
    url: 'https://rickandmortyapi.com/api/episode/9',
    created: '2017-11-10T12:56:34.645Z',
  },
  {
    id: 10,
    name: 'Close Rick-counters of the Rick Kind',
    airDate: 'April 7, 2014',
    episode: 'S01E10',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e6/Amfhioopko7i680t2kzx.jpg/',
    video: 'https://www.youtube.com/embed/V_-XAW1rxvc',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/7',
      'https://rickandmortyapi.com/api/character/14',
      'https://rickandmortyapi.com/api/character/15',
      'https://rickandmortyapi.com/api/character/18',
      'https://rickandmortyapi.com/api/character/19',
      'https://rickandmortyapi.com/api/character/21',
      'https://rickandmortyapi.com/api/character/22',
      'https://rickandmortyapi.com/api/character/27',
      'https://rickandmortyapi.com/api/character/39',
      'https://rickandmortyapi.com/api/character/53',
      'https://rickandmortyapi.com/api/character/77',
      'https://rickandmortyapi.com/api/character/78',
      'https://rickandmortyapi.com/api/character/79',
      'https://rickandmortyapi.com/api/character/82',
      'https://rickandmortyapi.com/api/character/83',
      'https://rickandmortyapi.com/api/character/84',
      'https://rickandmortyapi.com/api/character/85',
      'https://rickandmortyapi.com/api/character/86',
      'https://rickandmortyapi.com/api/character/103',
      'https://rickandmortyapi.com/api/character/113',
      'https://rickandmortyapi.com/api/character/118',
      'https://rickandmortyapi.com/api/character/119',
      'https://rickandmortyapi.com/api/character/152',
      'https://rickandmortyapi.com/api/character/164',
      'https://rickandmortyapi.com/api/character/177',
      'https://rickandmortyapi.com/api/character/209',
      'https://rickandmortyapi.com/api/character/215',
      'https://rickandmortyapi.com/api/character/232',
      'https://rickandmortyapi.com/api/character/242',
      'https://rickandmortyapi.com/api/character/274',
      'https://rickandmortyapi.com/api/character/290',
      'https://rickandmortyapi.com/api/character/294',
      'https://rickandmortyapi.com/api/character/295',
      'https://rickandmortyapi.com/api/character/298',
      'https://rickandmortyapi.com/api/character/299',
      'https://rickandmortyapi.com/api/character/329',
      'https://rickandmortyapi.com/api/character/330',
      'https://rickandmortyapi.com/api/character/339',
      'https://rickandmortyapi.com/api/character/349',
      'https://rickandmortyapi.com/api/character/359',
      'https://rickandmortyapi.com/api/character/381',
      'https://rickandmortyapi.com/api/character/389',
      'https://rickandmortyapi.com/api/character/405',
      'https://rickandmortyapi.com/api/character/424',
      'https://rickandmortyapi.com/api/character/425',
      'https://rickandmortyapi.com/api/character/426',
      'https://rickandmortyapi.com/api/character/427',
      'https://rickandmortyapi.com/api/character/428',
      'https://rickandmortyapi.com/api/character/429',
      'https://rickandmortyapi.com/api/character/430',
      'https://rickandmortyapi.com/api/character/431',
      'https://rickandmortyapi.com/api/character/432',
      'https://rickandmortyapi.com/api/character/433',
      'https://rickandmortyapi.com/api/character/434',
      'https://rickandmortyapi.com/api/character/663',
    ],
    url: 'https://rickandmortyapi.com/api/episode/10',
    created: '2017-11-10T12:56:34.747Z',
  },
  {
    id: 11,
    name: 'Ricksy Business',
    airDate: 'April 14, 2014',
    episode: 'S01E11',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/1b/Ricksy_business_screencap.png/',
    video: 'https://www.youtube.com/embed/wHwDWS3Wq_E',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/7',
      'https://rickandmortyapi.com/api/character/35',
      'https://rickandmortyapi.com/api/character/47',
      'https://rickandmortyapi.com/api/character/58',
      'https://rickandmortyapi.com/api/character/88',
      'https://rickandmortyapi.com/api/character/180',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/210',
      'https://rickandmortyapi.com/api/character/216',
      'https://rickandmortyapi.com/api/character/251',
      'https://rickandmortyapi.com/api/character/282',
      'https://rickandmortyapi.com/api/character/295',
      'https://rickandmortyapi.com/api/character/308',
      'https://rickandmortyapi.com/api/character/326',
      'https://rickandmortyapi.com/api/character/327',
      'https://rickandmortyapi.com/api/character/331',
      'https://rickandmortyapi.com/api/character/333',
      'https://rickandmortyapi.com/api/character/344',
      'https://rickandmortyapi.com/api/character/362',
      'https://rickandmortyapi.com/api/character/389',
      'https://rickandmortyapi.com/api/character/395',
      'https://rickandmortyapi.com/api/character/405',
      'https://rickandmortyapi.com/api/character/423',
      'https://rickandmortyapi.com/api/character/435',
      'https://rickandmortyapi.com/api/character/436',
    ],
    url: 'https://rickandmortyapi.com/api/episode/11',
    created: '2017-11-10T12:56:34.850Z',
  },
  {
    id: 12,
    name: 'A Rickle in Time',
    airDate: 'July 26, 2015',
    episode: 'S02E01',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/2/29/A_Rickle_in_Time.png/',
    video: 'https://www.youtube.com/embed/lm2BSWjcYvI',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/11',
      'https://rickandmortyapi.com/api/character/64',
      'https://rickandmortyapi.com/api/character/237',
      'https://rickandmortyapi.com/api/character/313',
      'https://rickandmortyapi.com/api/character/437',
      'https://rickandmortyapi.com/api/character/438',
      'https://rickandmortyapi.com/api/character/439',
      'https://rickandmortyapi.com/api/character/440',
    ],
    url: 'https://rickandmortyapi.com/api/episode/12',
    created: '2017-11-10T12:56:34.953Z',
  },
  {
    id: 13,
    name: 'Mortynight Run',
    airDate: 'August 2, 2015',
    episode: 'S02E02',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e0/Mortynight_Run.png/',
    video: 'https://www.youtube.com/embed/1eQo6BDM-VM',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/23',
      'https://rickandmortyapi.com/api/character/28',
      'https://rickandmortyapi.com/api/character/34',
      'https://rickandmortyapi.com/api/character/106',
      'https://rickandmortyapi.com/api/character/122',
      'https://rickandmortyapi.com/api/character/129',
      'https://rickandmortyapi.com/api/character/131',
      'https://rickandmortyapi.com/api/character/133',
      'https://rickandmortyapi.com/api/character/136',
      'https://rickandmortyapi.com/api/character/174',
      'https://rickandmortyapi.com/api/character/180',
      'https://rickandmortyapi.com/api/character/196',
      'https://rickandmortyapi.com/api/character/207',
      'https://rickandmortyapi.com/api/character/242',
      'https://rickandmortyapi.com/api/character/257',
      'https://rickandmortyapi.com/api/character/282',
      'https://rickandmortyapi.com/api/character/309',
      'https://rickandmortyapi.com/api/character/311',
      'https://rickandmortyapi.com/api/character/362',
      'https://rickandmortyapi.com/api/character/386',
      'https://rickandmortyapi.com/api/character/393',
      'https://rickandmortyapi.com/api/character/436',
      'https://rickandmortyapi.com/api/character/441',
      'https://rickandmortyapi.com/api/character/442',
      'https://rickandmortyapi.com/api/character/443',
      'https://rickandmortyapi.com/api/character/444',
      'https://rickandmortyapi.com/api/character/445',
      'https://rickandmortyapi.com/api/character/446',
      'https://rickandmortyapi.com/api/character/447',
      'https://rickandmortyapi.com/api/character/448',
      'https://rickandmortyapi.com/api/character/449',
      'https://rickandmortyapi.com/api/character/450',
      'https://rickandmortyapi.com/api/character/451',
    ],
    url: 'https://rickandmortyapi.com/api/episode/13',
    created: '2017-11-10T12:56:35.055Z',
  },
  {
    id: 14,
    name: 'Auto Erotic Assimilation',
    airDate: 'August 9, 2015',
    episode: 'S02E03',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/13/Auto_Erotic_Assimilation.png/',
    video: 'https://www.youtube.com/embed/ASjyZwsNAkc',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/36',
      'https://rickandmortyapi.com/api/character/50',
      'https://rickandmortyapi.com/api/character/90',
      'https://rickandmortyapi.com/api/character/188',
      'https://rickandmortyapi.com/api/character/249',
      'https://rickandmortyapi.com/api/character/301',
      'https://rickandmortyapi.com/api/character/336',
      'https://rickandmortyapi.com/api/character/355',
      'https://rickandmortyapi.com/api/character/372',
    ],
    url: 'https://rickandmortyapi.com/api/episode/14',
    created: '2017-11-10T12:56:35.158Z',
  },
  {
    id: 15,
    name: 'Total Rickall',
    airDate: 'August 16, 2015',
    episode: 'S02E04',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/4/49/Total_Rickall.png/',
    video: 'https://www.youtube.com/embed/nFshapJGw34',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/16',
      'https://rickandmortyapi.com/api/character/31',
      'https://rickandmortyapi.com/api/character/32',
      'https://rickandmortyapi.com/api/character/76',
      'https://rickandmortyapi.com/api/character/109',
      'https://rickandmortyapi.com/api/character/128',
      'https://rickandmortyapi.com/api/character/141',
      'https://rickandmortyapi.com/api/character/154',
      'https://rickandmortyapi.com/api/character/169',
      'https://rickandmortyapi.com/api/character/236',
      'https://rickandmortyapi.com/api/character/244',
      'https://rickandmortyapi.com/api/character/248',
      'https://rickandmortyapi.com/api/character/259',
      'https://rickandmortyapi.com/api/character/262',
      'https://rickandmortyapi.com/api/character/280',
      'https://rickandmortyapi.com/api/character/324',
      'https://rickandmortyapi.com/api/character/329',
      'https://rickandmortyapi.com/api/character/352',
      'https://rickandmortyapi.com/api/character/391',
    ],
    url: 'https://rickandmortyapi.com/api/episode/15',
    created: '2017-11-10T12:56:35.261Z',
  },
  {
    id: 16,
    name: 'Get Schwifty',
    airDate: 'August 23, 2015',
    episode: 'S02E05',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/0/08/S2e5_outside_church.png/',
    video: 'https://www.youtube.com/embed/I1188GO4p1E',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/24',
      'https://rickandmortyapi.com/api/character/47',
      'https://rickandmortyapi.com/api/character/115',
      'https://rickandmortyapi.com/api/character/124',
      'https://rickandmortyapi.com/api/character/138',
      'https://rickandmortyapi.com/api/character/161',
      'https://rickandmortyapi.com/api/character/162',
      'https://rickandmortyapi.com/api/character/172',
      'https://rickandmortyapi.com/api/character/182',
      'https://rickandmortyapi.com/api/character/199',
      'https://rickandmortyapi.com/api/character/212',
      'https://rickandmortyapi.com/api/character/213',
      'https://rickandmortyapi.com/api/character/240',
      'https://rickandmortyapi.com/api/character/241',
      'https://rickandmortyapi.com/api/character/253',
      'https://rickandmortyapi.com/api/character/255',
      'https://rickandmortyapi.com/api/character/272',
      'https://rickandmortyapi.com/api/character/309',
      'https://rickandmortyapi.com/api/character/329',
      'https://rickandmortyapi.com/api/character/331',
      'https://rickandmortyapi.com/api/character/344',
      'https://rickandmortyapi.com/api/character/346',
      'https://rickandmortyapi.com/api/character/347',
      'https://rickandmortyapi.com/api/character/395',
      'https://rickandmortyapi.com/api/character/452',
      'https://rickandmortyapi.com/api/character/454',
    ],
    url: 'https://rickandmortyapi.com/api/episode/16',
    created: '2017-11-10T12:56:35.364Z',
  },
  {
    id: 17,
    name: 'The Ricks Must Be Crazy',
    airDate: 'August 30, 2015',
    episode: 'S02E06',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/1/17/The_Ricks_Must_be_Crazy.png/',
    video: 'https://www.youtube.com/embed/2sEbe9gveN4',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/28',
      'https://rickandmortyapi.com/api/character/34',
      'https://rickandmortyapi.com/api/character/65',
      'https://rickandmortyapi.com/api/character/129',
      'https://rickandmortyapi.com/api/character/159',
      'https://rickandmortyapi.com/api/character/160',
      'https://rickandmortyapi.com/api/character/180',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/197',
      'https://rickandmortyapi.com/api/character/207',
      'https://rickandmortyapi.com/api/character/240',
      'https://rickandmortyapi.com/api/character/266',
      'https://rickandmortyapi.com/api/character/348',
      'https://rickandmortyapi.com/api/character/364',
      'https://rickandmortyapi.com/api/character/388',
      'https://rickandmortyapi.com/api/character/753',
    ],
    url: 'https://rickandmortyapi.com/api/episode/17',
    created: '2017-11-10T12:56:35.467Z',
  },
  {
    id: 18,
    name: 'Big Trouble in Little Sanchez',
    airDate: 'September 13, 2015',
    episode: 'S02E07',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e3/Screenshot_2015-09-28_at_8.12.32_AM.png/',
    video: 'https://www.youtube.com/embed/7LhOUoVShhE',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/40',
      'https://rickandmortyapi.com/api/character/55',
      'https://rickandmortyapi.com/api/character/66',
      'https://rickandmortyapi.com/api/character/131',
      'https://rickandmortyapi.com/api/character/132',
      'https://rickandmortyapi.com/api/character/146',
      'https://rickandmortyapi.com/api/character/148',
      'https://rickandmortyapi.com/api/character/163',
      'https://rickandmortyapi.com/api/character/178',
      'https://rickandmortyapi.com/api/character/180',
      'https://rickandmortyapi.com/api/character/181',
      'https://rickandmortyapi.com/api/character/240',
      'https://rickandmortyapi.com/api/character/272',
      'https://rickandmortyapi.com/api/character/310',
      'https://rickandmortyapi.com/api/character/353',
      'https://rickandmortyapi.com/api/character/354',
      'https://rickandmortyapi.com/api/character/358',
      'https://rickandmortyapi.com/api/character/374',
      'https://rickandmortyapi.com/api/character/386',
      'https://rickandmortyapi.com/api/character/387',
      'https://rickandmortyapi.com/api/character/453',
    ],
    url: 'https://rickandmortyapi.com/api/episode/18',
    created: '2017-11-10T12:56:35.569Z',
  },
  {
    id: 19,
    name: 'Interdimensional Cable 2: Tempting Fate',
    airDate: 'September 20, 2015',
    episode: 'S02E08',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/a/a1/S2e8_Interdimensional_Cable_2.png/',
    video: 'https://www.youtube.com/embed/U_U2CFhpPzM',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/23',
      'https://rickandmortyapi.com/api/character/35',
      'https://rickandmortyapi.com/api/character/49',
      'https://rickandmortyapi.com/api/character/51',
      'https://rickandmortyapi.com/api/character/105',
      'https://rickandmortyapi.com/api/character/121',
      'https://rickandmortyapi.com/api/character/126',
      'https://rickandmortyapi.com/api/character/133',
      'https://rickandmortyapi.com/api/character/153',
      'https://rickandmortyapi.com/api/character/173',
      'https://rickandmortyapi.com/api/character/199',
      'https://rickandmortyapi.com/api/character/205',
      'https://rickandmortyapi.com/api/character/223',
      'https://rickandmortyapi.com/api/character/224',
      'https://rickandmortyapi.com/api/character/225',
      'https://rickandmortyapi.com/api/character/254',
      'https://rickandmortyapi.com/api/character/260',
      'https://rickandmortyapi.com/api/character/263',
      'https://rickandmortyapi.com/api/character/264',
      'https://rickandmortyapi.com/api/character/275',
      'https://rickandmortyapi.com/api/character/312',
      'https://rickandmortyapi.com/api/character/321',
      'https://rickandmortyapi.com/api/character/334',
      'https://rickandmortyapi.com/api/character/362',
      'https://rickandmortyapi.com/api/character/371',
      'https://rickandmortyapi.com/api/character/383',
      'https://rickandmortyapi.com/api/character/384',
      'https://rickandmortyapi.com/api/character/435',
      'https://rickandmortyapi.com/api/character/454',
      'https://rickandmortyapi.com/api/character/455',
      'https://rickandmortyapi.com/api/character/456',
      'https://rickandmortyapi.com/api/character/457',
      'https://rickandmortyapi.com/api/character/458',
      'https://rickandmortyapi.com/api/character/459',
      'https://rickandmortyapi.com/api/character/460',
    ],
    url: 'https://rickandmortyapi.com/api/episode/19',
    created: '2017-11-10T12:56:35.669Z',
  },
  {
    id: 20,
    name: "Look Who's Purging Now",
    airDate: 'September 27, 2015',
    episode: 'S02E09',
    image: 'https://static.wikia.nocookie.net/rickandmorty/images/e/e6/Look_who%27s_purging_now_HQ.png/',
    video: 'https://www.youtube.com/embed/77jqLe7lA34',
    characters: [
      'https://rickandmortyapi.com/api/character/1',
      'https://rickandmortyapi.com/api/character/2',
      'https://rickandmortyapi.com/api/character/3',
      'https://rickandmortyapi.com/api/character/4',
      'https://rickandmortyapi.com/api/character/5',
      'https://rickandmortyapi.com/api/character/26',
      'https://rickandmortyapi.com/api/character/139',
      'https://rickandmortyapi.com/api/character/202',
      'https://rickandmortyapi.com/api/character/273',
      'https://rickandmortyapi.com/api/character/341',
    ],
    url: 'https://rickandmortyapi.com/api/episode/20',
    created: '2017-11-10T12:56:35.772Z',
  },
];

export const getEpisodes = () => [...episodeData];
export const epCopy = episodeData.map((ep) => ({
  ...ep,
  characters: ep.characters.map((el) => {
    const onlyNumber = el.replace('https://rickandmortyapi.com/api/character/', '');
    return Number(onlyNumber);
  }),
}));
export const getCopyEp = (id: number) => epCopy.find((ep) => ep.id === id);
export const getEpisode = (id: number) => episodeData.find((ep) => ep.id === id);
