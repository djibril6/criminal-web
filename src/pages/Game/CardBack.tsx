import styles from './css/CardBack.module.css';
import QuestionMarkIllustration from '../../statics/assets/illustrations/game/question_mark_illustration.svg';

const CardBack = () => {
  return (
    <div className={styles.card}>
      <img src={QuestionMarkIllustration} alt="question_mark_illustration" />
    </div>
  );
};

export default CardBack;
