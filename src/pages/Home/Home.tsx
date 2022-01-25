import { useNavigate } from 'react-router-dom';
import styles from './css/Home.module.css';
import VotingIllustration from '../../statics/assets/illustrations/home/voting_illustration.svg';
import { TopLeftCircle, TopRightCircle } from 'components';
import { useCallback, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';
import { GameContext } from 'context';

const Home = () => {
  const navigate = useNavigate();
  const { fetchNewCriminal } = useContext(GameContext);
  const handleVoteButton = useCallback(() => {
    navigate('/code-verification');
  }, [navigate]);

  const handlePlayButton = useCallback(() => {
    fetchNewCriminal();
    navigate('/game');
  }, [navigate, fetchNewCriminal]);

  return (
    <div className={styles.page}>
      <div className={styles['home-wrapper']}>
        <div className={styles['home-left']}>
          <h1>your voice matter</h1>
          <p>
            The pledgers towards the project will be able to vote up or down a
            person that has committed crimes against humanity or a human
            activity that destroys the environment. By doing so, we hope to keep
            the lists fair and transparent. The pledgers will receive the voting
            code right after making their pledge. Also, you can play and
            challenge your knowledge by trying out our quiz.{' '}
            <FontAwesomeIcon icon={faSmileBeam} />
          </p>

          <div className={styles['btn-wrapper']}>
            <button onClick={handleVoteButton}>vote</button>
            <button onClick={handlePlayButton}>play</button>
          </div>
        </div>
        <div className={styles['home-right']}>
          <img src={VotingIllustration} alt="voting_illustration" />
        </div>
      </div>
      <TopLeftCircle />
      <TopRightCircle />
    </div>
  );
};

export default Home;
