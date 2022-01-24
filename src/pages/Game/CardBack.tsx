import styles from './css/CardBack.module.css';
import { QuestionMarkIcon } from 'components/Icons';
import CoversHumanity from 'statics/img/Covers-Humanity.png';
import CoversNature from 'statics/img/Covers-Nature.png';
import { ECategory } from 'pages/Vote/types';

const CardBack = ({ category }: { category: ECategory }) => {
  return (
    <div className={styles.card}>
      <QuestionMarkIcon
        style={{ width: '50%', height: '50%', position: 'absolute' }}
      />
      <img
        src={category === ECategory.HUMANITY ? CoversHumanity : CoversNature}
        alt=""
        style={{ width: '95%', height: '95%' }}
      />
    </div>
  );
};

export default CardBack;
