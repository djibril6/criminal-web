import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './css/DropDownList.module.css';
import { CardMobile } from 'components';
import { useEffect, useMemo, useState } from 'react';
import useAxios from 'axios-hooks';
import CARD_LIST from '../../pages/Vote/cardList';
import { ECategory, EVoteType, resultType } from '../../pages/Vote/types';

const DropDownList = () => {
  const [currentGuess, setCurrentGuess] = useState<{
    id: String;
    name: String;
  }>({ id: '', name: 'make a guess' });

  const [
    {
      data: criminalsList = {} as resultType,
      // error: criminalError,
      //   loading: criminalsLoading,
    },
    fetchCriminals,
  ] = useAxios<resultType>({}, { manual: true });

  useEffect(() => {
    fetchCriminals({
      url: `/criminals?limit=52&page=1&categories=${ECategory.HUMANITY}`,
    });
  }, [fetchCriminals]);

  const orderedPeople = useMemo(
    () => () => {
      return criminalsList.results?.sort((a, b) => {
        const votesA = a.votes!.filter(
          (vote) => vote.voteType === EVoteType.THUMB_UP
        ).length;
        const votesB = b.votes!.filter(
          (vote) => vote.voteType === EVoteType.THUMB_UP
        ).length;
        if (votesA < votesB) {
          return 1;
        } else if (votesA > votesB) {
          return -1;
        }
        return 0;
      });
    },
    [criminalsList]
  );

  return (
    <div className={styles.dropdown}>
      <button
        className={styles.dropbtn}
        onClick={(event) => event.preventDefault()}
      >
        {currentGuess.name}
        <span className={styles.droparrow}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <div className={styles['dropdown-content']}>
        {orderedPeople()?.map(
          ({ categories, id, name, picture, votes }, idx) => (
            <div key={id}>
              <CardMobile
                value={CARD_LIST[idx]?.value}
                color={CARD_LIST[idx]?.color}
                icon={CARD_LIST[idx]?.icon}
                person={{ image: picture!, name: name! }}
                onClick={() => {
                  setCurrentGuess({ id, name: name! });
                }}
              />
              <span className={styles.vspace}></span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default DropDownList;
