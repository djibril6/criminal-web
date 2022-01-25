import { useNavigate } from 'react-router-dom';
import { CardDetails, TopLeftCircle, TopRightCircle } from 'components';
import { useContext, useEffect, useMemo } from 'react';
import styles from './css/Game.module.css';

import CARD_LIST from '../../pages/Vote/cardList';
import { EGameStateAction, GameContext } from 'context';
import { useOrder } from 'common/helper';
import { ECategory } from 'pages/Vote/types';

const GameAnswer = () => {
  const { state, dispatch, fetchNewCriminal } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (state.guesses.length === 0) navigate('/home');
  }, [state.guesses.length, navigate]);

  const handleNext = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    fetchNewCriminal();
    dispatch({
      type: EGameStateAction.NEW_SESSION,
    });
    // if (state.criminal.id === state.selectedCriminalId) {
    //   dispatch({
    //     type: EGameStateAction.INCREMENT_CORRECT_GUESSES,
    //   });
    // }
    navigate('/game');
  };

  const handleEndGame = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate('/game-score');
  };

  const orderedCriminal = useOrder(ECategory.HUMANITY);

  const getRank = useMemo(
    () => orderedCriminal?.findIndex(({ id }) => id === state.criminal.id) + 1,
    [orderedCriminal, state.criminal.id]
  );

  useEffect(() => {
    if (state.criminal.id === state.selectedCriminalId) {
      dispatch({
        type: EGameStateAction.INCREMENT_CORRECT_GUESSES,
      });
    }
  }, [dispatch, state.criminal.id, state.selectedCriminalId]);

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <h1 className={styles.title}>guess</h1>
        <div className={styles['answer-card']}>
          <CardDetails
            value={CARD_LIST[getRank]?.value}
            color={CARD_LIST[getRank]?.color}
            icon={CARD_LIST[getRank]?.icon}
            person={{
              image: state.criminal.picture!,
              name: state.criminal.name!,
            }}
            rank={getRank}
          />
        </div>
        <h3
          className={`${styles['answer-message']} ${
            state.criminal.id === state.selectedCriminalId
              ? styles.correct
              : styles.wrong
          }`}
        >
          {state.criminal.id === state.selectedCriminalId
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
