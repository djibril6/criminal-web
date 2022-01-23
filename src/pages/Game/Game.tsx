import { TopLeftCircle, TopRightCircle } from 'components';
import { useState } from 'react';
import CardBack from './CardBack';
import GuessesList from './GuessesList';
import DropDownList from './DropDownList';
import styles from './css/Game.module.css';

const Game = () => {
  const [guess, setGuess] = useState<boolean>(true);
  const [guesses, setGuesses] = useState<{ value: String; state: boolean }[]>(
    []
  );

  const handleGuessInput = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = event.currentTarget.guess.value;
    if (value === '') return;
    event.currentTarget.guess.value = '';

    /* check if the guess is correct or note */

    setGuess(!guess);

    /* add the new guess to the list of the old guesses*/
    setGuesses([...guesses, { value, state: guess }]);
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  return (
    <div className={styles.page}>
      <div className={styles['game-wrapper']}>
        <div>
          <CardBack />
        </div>

        <GuessesList guesses={guesses} />

        {/* The user make a guess here*/}
        <form className={styles['guess-form']} onSubmit={handleGuessInput}>
          <label htmlFor="guess">
            describe the criminal using <strong>1 keyword</strong>
          </label>
          <input
            id="guess"
            name="guess"
            type="text"
            placeholder="E.g: Nazi, Germany, African, Russia"
          />
          <span>
            your guess is
            <strong className={guess ? styles.correct : styles.wrong}>
              {' '}
              {guess ? 'correct' : 'wrong'}
            </strong>
          </span>
        </form>

        {/* The user submit his answer here*/}
        {
            guess &&
            <form className={styles['answer-form']}>
                <DropDownList />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        }
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default Game;
