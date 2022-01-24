import { useNavigate } from 'react-router-dom';
import { useMemo, useContext } from 'react';
import { TopLeftCircle, TopRightCircle } from 'components';
import ScoreBar from './ScoreBar';
import styles from './css/Game.module.css';
import { EGameStateAction, GameContext } from 'context';
import ConfettiExplosion from 'react-confetti-explosion';

const GameScore = () => {
  const navigate = useNavigate();
  const { state, dispatch, fetchNewCriminal } = useContext(GameContext);

  const handlePlayAgain = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    fetchNewCriminal();
    dispatch({
      type: EGameStateAction.CLEAR,
    });
    navigate('/game');
  };

  const handleEReturnToMain = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    dispatch({
      type: EGameStateAction.CLEAR,
    });
    navigate('/home');
  };

  const getScore = useMemo(
    () => (state.correctGuesses / state.sessionCount) * 100,
    [state.correctGuesses, state.sessionCount]
  );

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        {Boolean(getScore >= 50) && <ConfettiExplosion duration={5000} />}
        <h1 className={styles.title}>
          score: {state.correctGuesses * 10} points
        </h1>
        <ScoreBar percentage={Math.floor(getScore)} />
        {/* The user submit his answer here*/}
        <span className={styles.vspace}></span>
        <form className={styles['next-form']}>
          <button onClick={handlePlayAgain}>play again</button>
          <button onClick={handleEReturnToMain}>return to main</button>
        </form>
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default GameScore;
