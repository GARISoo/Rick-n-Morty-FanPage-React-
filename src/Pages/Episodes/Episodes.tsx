import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EpisodeProps, getEpisodes } from '../../Data/EpisodeData/episodes';

const Episodes = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<EpisodeProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const episodes = getEpisodes();
    setVisibleEpisodes(episodes);
  }, []);

  return (
    <div className="body">
      <h1 className="episodes__h1">Episodes</h1>
      <div className="episodes">
        {visibleEpisodes && visibleEpisodes.map(({
          id, name, image, episode, airDate,
        }) => (
          <div className="episode" key={id} onClick={() => navigate(`/episodes/${id}`)}>
            <div className="episode__left">
              <img src={image} alt="selfie" className="episode__img" />
            </div>
            <div className="episode__middle">
              <span className="episode__title">{name}</span>
              <span className="episode__ep">{episode}</span>
            </div>
            <div className="episode__right">
              {`Released: ${airDate}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
