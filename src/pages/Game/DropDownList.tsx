import styles from './css/DropDownList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DropDownList = () => {
  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropbtn}
        onClick={(event) => event.preventDefault()}
      >
        make a guess
        <span className={styles.droparrow}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <div className={styles['dropdown-content']}>
        <span>Link 1</span>
        <span>Link 2</span>
        <span>Link 3</span>
      </div>
    </div>
  );
};

export default DropDownList;
