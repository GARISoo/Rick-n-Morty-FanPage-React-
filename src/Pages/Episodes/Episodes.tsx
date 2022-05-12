/* eslint-disable max-len */
/* eslint-disable camelcase */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../../Components/Loader/Loader';
import { EpisodeProps, getImages } from '../../Data/EpisodeData/episodes';

const Episodes = () => {
  const [allEpisodes, setAllEpisodes] = useState<EpisodeProps[]>();
  const [filteredEpisodes, setFilteredEpisodes] = useState<EpisodeProps[]>();
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const navigate = useNavigate();

  const getEps = async () => {
    setIsLoading(true);
    try {
      const response1 = await axios.get('https://rickandmortyapi.com/api/episode?page=1');
      const response2 = await axios.get('https://rickandmortyapi.com/api/episode?page=2');
      const response3 = await axios.get('https://rickandmortyapi.com/api/episode?page=3');
      const response = [...response1.data.results, ...response2.data.results, ...response3.data.results];
      setAllEpisodes(response);
      setFilteredEpisodes(response);
    } catch (error) {
      navigate('/404');
    } finally {
      setIsLoading(false);
    }
  };

  const seasons = [
    {
      id: 0,
      name: 'All',
      onClick: () => setFilteredEpisodes(allEpisodes),
    },
    {
      id: 1,
      name: 'Season 1',
      onClick: () => setFilteredEpisodes(allEpisodes?.filter((ep) => ep.episode.includes('S01'))),
    },
    {
      id: 2,
      name: 'Season 2',
      onClick: () => setFilteredEpisodes(allEpisodes?.filter((ep) => ep.episode.includes('S02'))),
    },
    {
      id: 3,
      name: 'Season 3',
      onClick: () => setFilteredEpisodes(allEpisodes?.filter((ep) => ep.episode.includes('S03'))),
    },
    {
      id: 4,
      name: 'Season 4',
      onClick: () => setFilteredEpisodes(allEpisodes?.filter((ep) => ep.episode.includes('S04'))),
    },
    {
      id: 5,
      name: 'Season 5',
      onClick: () => setFilteredEpisodes(allEpisodes?.filter((ep) => ep.episode.includes('S05'))),
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    getEps();
  }, []);

  return (
    isLoading ? <Loader /> : (
      <div className="body">
        <h1 className="body__h1">Episodes</h1>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="episodes__search"
          placeholder="Episode name goes here..."
        />
        <div className="body__actions">
          {seasons.map((el) => (
            <button
              key={el.id}
              onClick={el.onClick}
              className="filter-btn"
            >
              {el.name}
            </button>
          ))}
        </div>
        <div className="episodes">
          {filteredEpisodes && filteredEpisodes.map(({
            id, name, episode, air_date,
          }) => (
            (name.toLowerCase().includes(inputValue.toLowerCase())
          || episode.toLowerCase().includes(inputValue.toLowerCase())) ? (

            <div className="episode" key={id} onClick={() => navigate(`/episodes/${id}`)}>
              <div className="episode__left">
                <img src={getImages(id)?.image} alt="selfie" className="episode__img" />
              </div>
              <div className="episode__middle">
                <span className="episode__title">{name}</span>
                <span className="episode__ep">{episode}</span>
              </div>
              <div className="episode__right">
                {`Released: ${air_date}`}
              </div>
            </div>
              ) : null
          ))}
        </div>
      </div>
    ));
};

export default Episodes;
