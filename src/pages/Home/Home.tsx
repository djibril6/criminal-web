import { useNavigate } from "react-router-dom";
import styles from './css/Home.module.css';
import VotingIllustration from '../../statics/assets/illustrations/home/voting_illustration.svg';
import { TopLeftCircle, TopRightCircle } from 'components';

const Home = () => 
{

  const navigate = useNavigate();
  const handleVoteButton = () => 
  {
    navigate('/code-verification');
  }

  const handlePlayButton = () => 
  {
    navigate('/game');
  }

  return (
    <div className={styles.page}>
        <div className={styles["home-wrapper"]}>
          <div className={styles["home-left"]}>
              <h1>your voice matter</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis velit, perspiciatis magni facere voluptates illo eos maxime pariatur in quibusdam fuga, laudantium odit. Officia recusandae, distinctio omnis voluptas unde obcaecati!
              </p>

              <div className={styles["btn-wrapper"]}>
                <button
                  onClick={handleVoteButton}
                >
                  vote
                </button>
                <button
                  onClick={handlePlayButton}
                >
                  play
                </button>
              </div>
          </div>
          <div className={styles["home-right"]}> 
            <img src={VotingIllustration} alt="voting_illustration" />
          </div>
        </div>
        <TopLeftCircle/>
        <TopRightCircle/>
    </div>
  );
}


export default Home;