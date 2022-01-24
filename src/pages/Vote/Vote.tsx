import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardMobile, ModalPage, VoteCardList, Tabs } from 'components';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CARD_LIST from './cardList';
import { ECategory } from './types';
import { tabHeight } from 'components/Tabs';
import { useOrder } from 'common/helper';
import CoversHumanity from 'statics/img/Covers-Humanity.png';
import CoversNature from 'statics/img/Covers-Nature.png';
import JokerHumanityRed from 'statics/img/Joker-Humanity-Red.png';
import JokerHumanityWhite from 'statics/img/Joker-Humanity-White.png';
import JokerNatureWhite from 'statics/img/Joker-Nature-White.png';
import JokerNatureRed from 'statics/img/Joker-Nature-Red.png';

const useStyles = makeStyles((theme: Theme) => ({
  codeLabel: {
    marginBottom: 10,
  },
  noCodeText: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
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
  banner: {
    width: '100%',
    padding: '15px',
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('tablet')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    [theme.breakpoints.down('tablet')]: {
      display: 'none',
    },
  },
  codeBtn: {
    backgroundColor: '#fff',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    width: 100,
    height: 37,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px 10px 10px 0px',
    fontWeight: 600,
  },
  verifiedBtn: {
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    cursor: 'pointer',
    width: 100,
    height: 37,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0px 10px 10px 0px',
    fontWeight: 600,
  },
  header: {
    position: 'relative',
    height: 1000,
    [theme.breakpoints.down('tablet')]: {
      display: 'none',
    },
  },
  topCircle: {
    width: 640,
    height: 640,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10%',
    position: 'absolute',
    top: -470,
  },
  rightCircle: {
    width: 500,
    height: 500,
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.main,
    position: 'absolute',
    right: -250,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  top: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
      flexDirection: 'row',
    },
    [theme.breakpoints.up('tablet')]: {
      flexDirection: 'column',
    },
    [theme.breakpoints.up('laptop')]: {
      flexDirection: 'column',
    },
    marginTop: 20,
  },
  bottom: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    width: '50%',
    [theme.breakpoints.down('tablet')]: {
      width: 'fit-content',
      justifyContent: 'center',
    },
  },
  images: {
    [theme.breakpoints.down('tablet')]: {
      width: '100px',
      height: '150px',
      marginLeft: 15,
    },
  },
}));

function Vote() {
  const [selectedTab, setSelectedTab] = useState(ECategory.HUMANITY);
  const [openCard, setOpenCard] = useState(false);
  const [current, setCurrent] = useState(0);
  const styles = useStyles();

  const navigate = useNavigate();
  const orderedCriminal = useOrder(selectedTab);

  const onTabSelected = useCallback((selected: ECategory) => {
    setSelectedTab(selected);
  }, []);

  const onOpenCard = useCallback(
    (index: number) => () => {
      setCurrent(index);
      setOpenCard(true);
    },
    []
  );

  const handleCloseCard = useCallback(() => {
    setOpenCard(false);
  }, []);

  const handleVerify = () => {
    navigate('/code-verification');
  };

  return (
    <>
      <Box padding="20px">
        <Tabs
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
          mobileFixed
        />

        <Box className={styles.divider} />

        {selectedTab === ECategory.HUMANITY ? (
          <Box className={styles.top}>
            <img className={styles.images} src={CoversHumanity} alt="" />
            <Box className={styles.bottom}>
              <img className={styles.images} src={JokerHumanityWhite} alt="" />
              <img className={styles.images} src={JokerHumanityRed} alt="" />
            </Box>
          </Box>
        ) : (
          <Box className={styles.top}>
            <img className={styles.images} src={CoversNature} alt="" />
            <Box className={styles.bottom}>
              <img className={styles.images} src={JokerNatureWhite} alt="" />
              <img className={styles.images} src={JokerNatureRed} alt="" />
            </Box>
          </Box>
        )}

        <Box className={styles.criminalList}>
          {orderedCriminal?.map(
            (
              { categories, id, name, picture, shortBrief, title, votes },
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
                  subtitle: title,
                  subtitle2: shortBrief,
                }}
                onClick={onOpenCard(idx)}
              />
            )
          )}
        </Box>
        <ModalPage open={openCard} onClose={handleCloseCard}>
          <VoteCardList
            criminals={orderedCriminal!}
            initialIndex={current}
            onCloseModal={handleVerify}
          />
        </ModalPage>
      </Box>
    </>
  );
}

export default Vote;
