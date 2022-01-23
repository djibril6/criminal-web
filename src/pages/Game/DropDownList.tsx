import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './css/DropDownList.module.css';
import { CardMobile } from 'components';
import { useCallback, useEffect, useMemo, useState, useContext } from 'react';
import useAxios from 'axios-hooks';
import CARD_LIST from '../../pages/Vote/cardList';
import { ECategory, EVoteType, resultType } from '../../pages/Vote/types';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EGameStateAction, GameContext } from 'context';

const useStyles = makeStyles((theme) => ({
  dropdownContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 10,
    marginTop: 10,
    marginLeft: 10,
  },
  closedDropdown: {
    display: 'none',
  },
}));

const DropDownList = () => {
  const classes = useStyles();
  const { dispatch } = useContext(GameContext);
  const [currentGuess, setCurrentGuess] = useState<{
    id: String;
    name: String;
  }>({ id: '', name: 'make a guess' });

  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  const handleDropdown = useCallback(() => {
    setDropdownOpen(!dropdownOpen);
  }, [dropdownOpen]);

  const onGuess = useCallback(
    (id: string, name: string) => () => {
      setCurrentGuess({ id, name: name! });
      dispatch({
        type: EGameStateAction.PICK_CRIMINAL,
        payload: id,
      });
      handleDropdown();
    },
    [handleDropdown, dispatch]
  );

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn} onClick={handleDropdown}>
        {currentGuess.name}
        <span className={styles.droparrow}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      <Box
        className={
          dropdownOpen ? classes.dropdownContainer : classes.closedDropdown
        }
      >
        {orderedPeople()?.map(
          ({ categories, id, name, picture, votes }, idx) => (
            <CardMobile
              key={id}
              value={CARD_LIST[idx]?.value}
              color={CARD_LIST[idx]?.color}
              icon={CARD_LIST[idx]?.icon}
              person={{ image: picture!, name: name! }}
              onClick={onGuess(id, name!)}
              dropdown
            />
          )
        )}
      </Box>
    </div>
  );
};

export default DropDownList;
