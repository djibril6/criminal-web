import { TopLeftCircle, TopRightCircle } from 'components';
import { useState } from 'react';
import styles from './css/Game.module.css';
import { CardMobile } from 'components';

import CARD_LIST from '../../pages/Vote/cardList';

const GameAnswer = () => {
  const [isCorrectAnswer] = useState(false);

  const handleNext = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  const handleEndGame = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <div className={styles['answer-card']}>
          <CardMobile
            value={CARD_LIST[0]?.value}
            color={CARD_LIST[0]?.color}
            icon={CARD_LIST[0]?.icon}
            person={{ image: '', name: 'hitler' }}
            onClick={() => {}}
          />
        </div>
        <h3
          className={`${styles['answer-message']} ${
            isCorrectAnswer ? styles.correct : styles.wrong
          }`}
        >
          {isCorrectAnswer
            ? 'congratulation you guessed it right'
            : 'you were so close!'}
        </h3>
        {/* The user submit his answer here*/}
        <form className={styles['next-form']}>
          <button onClick={handleNext}>next</button>
          <button onClick={handleEndGame}>end the game</button>
        </form>
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default GameAnswer;
