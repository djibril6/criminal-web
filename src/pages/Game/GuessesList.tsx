import styles from './css/GuessesList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
import { GameContext } from 'context';
import { useContext } from 'react';

const GuessesList: React.FC = () => {
  const { state } = useContext(GameContext);
  return (
    <ul className={styles.guesses}>
      {state.guesses?.map(({ guess, status }, index) => {
        return (
          <li key={index} className={status ? styles.correct : styles.wrong}>
            <i>
              <FontAwesomeIcon icon={status ? faCheckCircle : faTimesCircle} />
            </i>
            {`guess ${index + 1}`} : {guess}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessesList;
