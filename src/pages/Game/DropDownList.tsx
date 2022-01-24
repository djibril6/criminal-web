import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import styles from './css/DropDownList.module.css';
import { CardMobile } from 'components';
import { useCallback, useState, useContext } from 'react';
import CARD_LIST from '../../pages/Vote/cardList';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EGameStateAction, GameContext } from 'context';
import { useOrder } from 'common/helper';
import { ECategory } from 'pages/Vote/types';

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
  const orderedCriminal = useOrder(ECategory.HUMANITY);
  const [currentGuess, setCurrentGuess] = useState<{
    id: String;
    name: String;
  }>({ id: '', name: 'make a guess' });

  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        {orderedCriminal?.map(
          (
            { categories, id, name, picture, votes, title, shortBrief },
            idx
          ) => (
            <CardMobile
              key={id}
              value={CARD_LIST[idx]?.value}
              color={CARD_LIST[idx]?.color}
              icon={CARD_LIST[idx]?.icon}
              person={{
                image: picture!,
                name: name!,
                subtitle: title!,
                subtitle2: shortBrief!,
              }}
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
