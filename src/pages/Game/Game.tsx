import { CardDetails, TopLeftCircle, TopRightCircle } from 'components';
import { useCallback, useContext, useMemo, useState } from 'react';
import CardBack from './CardBack';
import GuessesList from './GuessesList';
import DropDownList from './DropDownList';
import styles from './css/Game.module.css';
import { EGameStateAction, GameContext } from 'context';
import ConfettiExplosion from 'react-confetti-explosion';
import { Box, Button, Theme, Typography } from '@mui/material';
import CARD_LIST from 'pages/Vote/cardList';
import { EVoteType } from 'pages/Vote/types';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  resultContainer: {
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
    },
    [theme.breakpoints.up('tablet')]: {
      width: '80%',
    },
    [theme.breakpoints.up('laptop')]: {
      width: '30%',
    },
    margin: 'auto',
  },
}));

const Game = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [guess, setGuess] = useState('');
  const [isLastCorrect, setIsLastCorrect] = useState(false);
  const [isOneCorrect, setIsOneCorrect] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [guessed, setGuessed] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { state, dispatch, fetchNewCriminal } = useContext(GameContext);

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
      setGuessed(true);
      if (state.criminal.id === state.selectedCriminalId) {
        setIsSuccess(true);
      }
    }
  }, [
    dispatch,
    guess,
    isCorrectGuess,
    state.criminal.id,
    state.selectedCriminalId,
  ]);

  const handleNextSession = useCallback(() => {
    fetchNewCriminal();
    dispatch({
      type: EGameStateAction.NEW_SESSION,
    });
    if (isSuccess) {
      dispatch({
        type: EGameStateAction.INCREMENT_CORRECT_GUESSES,
      });
    }
    setIsLastCorrect(false);
    setIsOneCorrect(false);
    setIsSuccess(false);
    setGuessed(false);
  }, [dispatch, isSuccess, fetchNewCriminal]);

  const handleEndGame = useCallback(() => {
    if (isSuccess) {
      dispatch({
        type: EGameStateAction.INCREMENT_CORRECT_GUESSES,
      });
    }
    setShowResult(true);
  }, [dispatch, isSuccess]);

  const getScore = useMemo(
    () => (state.correctGuesses / state.sessionCount) * 100,
    [state.correctGuesses, state.sessionCount]
  );

  const onNewGame = useCallback(() => {
    fetchNewCriminal();
    dispatch({
      type: EGameStateAction.CLEAR,
    });
  }, [dispatch, fetchNewCriminal]);

  const goHome = useCallback(() => {
    navigate('/home');
  }, [navigate]);

  return (
    <div className={styles.page}>
      {showResult ? (
        <Box className={classes.resultContainer}>
          <Typography variant="h1" color="primary">
            Score : {getScore}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginBottom: 15 }}
            onClick={onNewGame}
          >
            Play Again
          </Button>
          <Button variant="outlined" color="primary" fullWidth onClick={goHome}>
            Return To Main
          </Button>
        </Box>
      ) : (
        <div className={styles['game-wrapper']}>
          <div>
            {guessed ? (
              <Box>
                <Typography variant="h1" color="primary">
                  Guess
                </Typography>
                <CardDetails
                  value={CARD_LIST[0].value}
                  color={CARD_LIST[0].color}
                  icon={CARD_LIST[0].icon}
                  status={EVoteType.NONE}
                  person={{
                    image: state.criminal.picture!,
                    name: state.criminal.name!,
                  }}
                  rank={10}
                />
                {isSuccess ? (
                  <Typography color="success" variant="h1">
                    Congratulation you guessed right
                  </Typography>
                ) : (
                  <Typography color="error" variant="h1">
                    You were so close
                  </Typography>
                )}
              </Box>
            ) : (
              <CardBack />
            )}
          </div>

          {isSuccess && <ConfettiExplosion duration={5000} />}

          {!guessed && <GuessesList />}

          {/* The user make a guess here*/}
          {guessed ? (
            <Box width="100%">
              <Button
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginBottom: 15 }}
                onClick={handleNextSession}
              >
                Next
              </Button>
              <Button
                variant="outlined"
                color="primary"
                fullWidth
                onClick={handleEndGame}
              >
                End The Game
              </Button>
            </Box>
          ) : (
            <>
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
                    <strong
                      className={isLastCorrect ? styles.correct : styles.wrong}
                    >
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
            </>
          )}
        </div>
      )}
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default Game;
