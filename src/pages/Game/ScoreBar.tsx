import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './css/ScoreBar.module.css';
import 'react-circular-progressbar/dist/styles.css';

interface IProps {
  percentage: number;
}

const ScoreBar: React.FC<IProps> = ({ percentage }) => {
  return (
    <div className={styles['score-bar-wrapper']}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage} %`}
        styles={buildStyles({
          rotation: 0.5,
          strokeLinecap: 'butt',
          textSize: '18px',
          pathTransitionDuration: 0.5,
          pathColor: '#53BE73',
          textColor: '#53BE73',
          trailColor: '#FC5959',
          backgroundColor: '#FEFEFE',
        })}
      />
      <div className={styles['keys-wrapper']}>
        <ul className={styles.keys}>
          <li className={styles.correct}>
            <i>
              <FontAwesomeIcon icon={faCircle} />
            </i>
            correct guess
          </li>
          <li className={styles.wrong}>
            <i>
              <FontAwesomeIcon icon={faCircle} />
            </i>
            wrong guess
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScoreBar;
