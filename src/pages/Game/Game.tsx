import { TopLeftCircle, TopRightCircle } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';
import CardBack from './CardBack';
import GuessesList from './GuessesList';
import DropDownList from './DropDownList';
import styles from './css/Game.module.css';
import { EGameStateAction, GameContext } from 'context';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const navigate = useNavigate();
  const [guess, setGuess] = useState('');
  const [isLastCorrect, setIsLastCorrect] = useState(false);
  const [isOneCorrect, setIsOneCorrect] = useState(false);
  const { state, dispatch } = useContext(GameContext);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setGuess(e.target.value);
    },
    []
  );

  const isCorrectGuess = useMemo(
    () => state.criminal.tags?.includes(guess),
    [guess, state.criminal.tags]
  );

  const handleSubmit = useCallback(() => {
    if (guess) {
      dispatch({
        type: EGameStateAction.ADD_GUESS,
        payload: {
          guess,
          status: isCorrectGuess,
        },
      });
      if (isCorrectGuess) {
        setIsOneCorrect(true);
      }
      setIsLastCorrect(isCorrectGuess);
      setGuess('');
    }

    if (state.selectedCriminalId) {
      navigate('/game-answer');
    }
  }, [dispatch, guess, isCorrectGuess, state.selectedCriminalId, navigate]);

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <div>
          <CardBack />
        </div>
        <GuessesList />

        {/* The user make a guess here*/}
        <div className={styles['guess-form']}>
          <label htmlFor="guess">
            describe the criminal using <strong>1 keyword</strong>
          </label>
          <input
            id="guess"
            name="guess"
            type="text"
            placeholder="E.g: Nazi, Germany, African, Russia"
            value={guess}
            onChange={handleInputChange}
          />
          {Boolean(state.guesses.length > 0) && (
            <span>
              your guess is
              <strong className={isLastCorrect ? styles.correct : styles.wrong}>
                {' '}
                {isLastCorrect ? 'correct' : 'wrong'}
              </strong>
            </span>
          )}
        </div>

        {/* The user submit his answer here*/}
        {Boolean(guess || isOneCorrect) && (
          <div className={styles['answer-form']}>
            <DropDownList />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        )}
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default Game;
