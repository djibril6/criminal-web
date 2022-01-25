import { TopLeftCircle, TopRightCircle } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';
import CardBack from './CardBack';
import GuessesList from './GuessesList';
import DropDownList from './DropDownList';
import styles from './css/Game.module.css';
import { EGameStateAction, GameContext } from 'context';
import { useNavigate } from 'react-router-dom';
import { ECategory } from 'pages/Vote/types';

const Game = () => {
  const navigate = useNavigate();
  const [guessCounter, setGuessCounter] = useState(0);
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

  const isGuessIncludeIn = useCallback(
    (field: string) =>
      field?.toLowerCase()?.split(' ')?.includes(guess?.toLowerCase()),
    [guess]
  );

  const isCorrectGuess = useMemo(
    () =>
      isGuessIncludeIn(state.criminal.shortDescription!) ||
      isGuessIncludeIn(state.criminal.description!) ||
      isGuessIncludeIn(state.criminal.title!) ||
      isGuessIncludeIn(state.criminal.shortBrief!),
    [
      isGuessIncludeIn,
      state.criminal.description,
      state.criminal.shortBrief,
      state.criminal.shortDescription,
      state.criminal.title,
    ]
  );

  const handleGuessInput = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
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
        setGuessCounter((guessCounter) => guessCounter + 1);
      }
    },
    [dispatch, guess, isCorrectGuess]
  );

  const handleSubmit = useCallback(() => {
    if (state.selectedCriminalId) {
      navigate('/game-answer');
    }
  }, [state.selectedCriminalId, navigate]);

  const handleSkip = () => navigate('/game-answer');

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <div>
          <CardBack category={ECategory.HUMANITY} />
        </div>
        <GuessesList />

        {/* The user make a guess here*/}
        <form className={styles['guess-form']} onSubmit={handleGuessInput}>
          <label htmlFor="guess">
            describe the criminal using <strong>1 keyword</strong>
          </label>
          <input
            className={guessCounter >= 5 ? styles.disabled : ''}
            id="guess"
            name="guess"
            type="text"
            placeholder="E.g: Nazi, Germany, African, Russia"
            value={guess}
            onChange={handleInputChange}
            disabled={guessCounter >= 5 ? true : false}
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
        </form>

        {/* The user submit his answer here*/}
        {(isOneCorrect || guessCounter >= 3) && (
          <div className={styles['answer-form']}>
            {!isOneCorrect && <button onClick={handleSkip}>Skip</button>}
            {isOneCorrect && (
              <>
                <DropDownList />
                <button onClick={handleSubmit}>Submit</button>
              </>
            )}
          </div>
        )}
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default Game;
