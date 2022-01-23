import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TopLeftCircle, TopRightCircle } from 'components';
import ScoreBar from './ScoreBar';
import styles from './css/Game.module.css';

const GameScore = () => {
  const navigate = useNavigate();

  const [totalCorrectAnswers] = useState(9);
  const [totalAnsweredQuestions] = useState(20);

  const handlePlayAgain = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate('/game');
  };

  const handleEReturnToMain = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <h1 className={styles.title}>score: {totalCorrectAnswers * 10}</h1>
        <ScoreBar
          percentage={Math.floor(
            (totalCorrectAnswers / totalAnsweredQuestions) * 100
          )}
        />
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
