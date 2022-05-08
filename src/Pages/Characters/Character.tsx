import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CharacterProps, getCharacter } from '../../Data/CharacterData/characters';

const Character = () => {
  const [currentChar, setCurrentChar] = useState<CharacterProps>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));
    window.scrollTo(0, 0);
    if (character) {
      setCurrentChar(character);
    } else {
      navigate('/users');
    }
  }, []);

  return (
    <div className="cards column">
      <button className="back-btn" onClick={() => navigate('/characters')}>Go Back!</button>
      <div className="single-card">
        <div className="single-card__header">
          <h1 className="single-card__h1">Identification Card</h1>
        </div>
        <div className="single-card__main">
          <div className="single-card__left">
            <img src={currentChar?.image} alt="selfie" className="single-card__img" />
          </div>
          <div className="single-card__right">
            <div className="single-card__about">
              <span className="single-card__name">{currentChar?.name}</span>
              <span className="single-card__desc">{`Currently: ${currentChar?.status}`}</span>
              <span className="single-card__desc">{`Gender: ${currentChar?.gender}`}</span>
              <span className="single-card__desc">{`Species: ${currentChar?.species}`}</span>
              <span className="single-card__desc">{`Origin: ${currentChar?.origin.name}`}</span>
            </div>
            <div className="single-card__appearance">
              <span className="single-card__desc">{`Appearance: ${currentChar?.episode.length} episodes`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Character;
