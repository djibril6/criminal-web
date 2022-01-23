import styles from './css/GuessesList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimesCircle,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';

interface IProps {
  guesses: { value: String; state: boolean }[];
}

const GuessesList: React.FC<IProps> = ({ guesses }) => {
  return (
    <ul className={styles.guesses}>
      {guesses.map((guess, index) => {
        return (
          <li
            key={index}
            className={guess.state ? styles.correct : styles.wrong}
          >
            <i>
              <FontAwesomeIcon
                icon={guess.state ? faCheckCircle : faTimesCircle}
              />
            </i>
            {`guess ${index + 1}`} : {guess.value}
          </li>
        );
      })}
    </ul>
  );
};

export default GuessesList;
