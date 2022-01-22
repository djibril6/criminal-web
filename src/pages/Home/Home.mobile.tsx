import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { CardMobile, ModalPage } from 'components';
import { ECategory, PeopleType } from './types';
import CARD_LIST from './cardList';
import VoteCardList from 'components/VoteCardList';
import { useCallback, useState } from 'react';

const tabHeight = 70;
const useStyles = makeStyles((theme: Theme) => ({
  codeLabel: {
    marginBottom: 10,
  },
  noCodeText: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  tabsContent: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('tablet')]: {
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
    },
    [theme.breakpoints.up('laptop')]: {
      width: '40%',
      margin: 'auto',
    },
    backgroundColor: theme.palette.background.default,
    height: tabHeight,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 10,
    overflow: 'hidden',
  },
  tab: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 15,
    fontWeight: 900,
    color: theme.palette.primary.main,
  },
  tabSelected: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
  divider: {
    width: '80%',
    height: 2,
    margin: 'auto',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('tablet')]: {
      marginTop: tabHeight + 20,
    },
    [theme.breakpoints.up('laptop')]: {
      display: 'none',
    },
  },
  criminalList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',

    [theme.breakpoints.down('tablet')]: {
      gap: 10,
    },
    [theme.breakpoints.up('tablet')]: {
      gap: 15,
    },
    [theme.breakpoints.up('laptop')]: {
      gap: 70,
    },
    marginTop: 35,
  },
}));

type HomeMobileType = {
  criminals: PeopleType[];
  onTabSelected: (selected: ECategory) => VoidFunction;
  selectedTab: ECategory;
};

const HomeMobile: React.FC<HomeMobileType> = ({
  criminals,
  selectedTab,
  onTabSelected,
}) => {
  const styles = useStyles();
  const [openCard, setOpenCard] = useState(false);
  const [current, setCurrent] = useState(0);
  // const [selectedTab, setSelectedTab] = useState(ECategory.HUMANITY);

  const handleCloseCard = useCallback(() => {
    setOpenCard(false);
  }, []);

  const onOpenCard = useCallback(
    (index: number) => () => {
      setCurrent(index);
      setOpenCard(true);
    },
    []
  );

  // const onTabSelected = useCallback(
  //   (selected: ECategory) => () => {
  //     setSelectedTab(selected);
  //   },
  //   []
  // );

  return (
    <Box padding="15px">
      <Box className={styles.tabsContent}>
        <Box
          className={classNames(
            styles.tab,
            selectedTab === ECategory.HUMANITY ? styles.tabSelected : ''
          )}
          onClick={onTabSelected(ECategory.HUMANITY)}
        >
          <span style={{ textAlign: 'center' }}>Crime against Humanity</span>
        </Box>
        <Box
          className={classNames(
            styles.tab,
            selectedTab === ECategory.NATURE ? styles.tabSelected : ''
          )}
          onClick={onTabSelected(ECategory.NATURE)}
        >
          <span style={{ textAlign: 'center' }}>Crime against Nature</span>
        </Box>
      </Box>

      <Box className={styles.divider} />

      <Box className={styles.criminalList}>
        {criminals?.map(({ categories, id, name, picture, votes }, idx) => (
          <CardMobile
            key={id}
            value={CARD_LIST[idx]?.value}
            color={CARD_LIST[idx]?.color}
            icon={CARD_LIST[idx]?.icon}
            person={{ image: picture!, name: name! }}
            onClick={onOpenCard(idx)}
          />
        ))}
      </Box>
      <ModalPage open={openCard} onClose={handleCloseCard}>
        <VoteCardList criminals={criminals} initialIndex={current} />
      </ModalPage>
    </Box>
  );
};

export default HomeMobile;
