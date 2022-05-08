import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CharacterProps, getCharacters } from '../../Data/CharacterData/characters';

const Characters = () => {
  const [visibleChars, setVisibleChars] = useState<CharacterProps[]>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    const characters = getCharacters();
    setVisibleChars(characters);
  }, []);

  return (
    <div className="body">
      <h1 className="body__h1">Characters</h1>
      <div className="cards">
        {visibleChars && visibleChars.map(({
          id, name, image, species,
        }) => (
          <div className="card" key={id} onClick={() => navigate(`/characters/${id}`)}>
            <div className="card__top">
              <img src={image} alt="selfie" className="card__img" />
            </div>
            <div className="card__bottom">
              <span className="card__name">{name}</span>
              <span className="card__species">{`Species: ${species}`}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
