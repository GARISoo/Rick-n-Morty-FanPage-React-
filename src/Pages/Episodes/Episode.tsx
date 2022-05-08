import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterProps, getCharacters } from '../../Data/CharacterData/characters';
import { EpisodeProps, getEpisode, getCopyEp } from '../../Data/EpisodeData/episodes';

const Episode = () => {
  const [visibleChars, setVisibleChars] = useState<CharacterProps[]>();
  const [currentEp, setCurrentEp] = useState<EpisodeProps>();
  const [currentCopyEp, setCurrentCopyEp] = useState<EpisodeProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const episode = getEpisode(Number(id));
    const copyEp = getCopyEp(Number(id));
    window.scrollTo(0, 0);
    if (episode) {
      setCurrentEp(episode);
      setCurrentCopyEp(copyEp);
    } else {
      navigate('/episodes');
    }
  }, []);

  useEffect(() => {
    const characters = getCharacters();
    setVisibleChars(characters);
  }, []);

  return (
    <div className="episode-page">

      <div className="episode__title">
        <span>{`Preview of ${currentEp?.name}`}</span>
      </div>

      <div className="episode__video">
        <iframe
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="ep__video"
          src={currentEp?.video}
        />
      </div>

      <div className="episode__appearance">
        <span>{`Total of ${currentEp?.characters.length} characters appear in this episode`}</span>
      </div>

      <div>
        <div className="episode__stars gap">
          <span>Stars of The Episode:</span>
        </div>
        <div className="cards">
          {visibleChars && visibleChars.map((char) => (
            currentCopyEp?.characters.includes(char.id) && (
              <div className="card" key={id} onClick={() => navigate(`/characters/${char.id}`)}>
                <div className="card__top">
                  <img src={char.image} alt="selfie" className="card__img" />
                </div>
                <div className="card__bottom">
                  <span className="card__name">{char.name}</span>
                  <span className="card__species">{`Species: ${char.species}`}</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default Episode;
