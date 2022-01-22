import {
  Box,
  Theme,
  Typography,
  TextField,
  CircularProgress,
  Snackbar,
  Alert,
} from '@mui/material';
import { makeStyles, styled } from '@mui/styles';
import { CardMobile, ModalPage, Loading, VoteCardList } from 'components';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import useAxios from 'axios-hooks';
import CARD_LIST from './cardList';
import { ECategory, EVoteType, resultType } from './types';
import { CodeDataType, VoteContext } from 'context/VoteContext';
import classNames from 'classnames';
import { customTheme } from 'common/theme';
import {
  DesktopVoteIllustrationIcon,
  DesktopVoteText1Icon,
  DesktopVoteText2Icon,
} from 'components/Icons';

const CodeInput = styled(TextField)({
  '& label.Mui-focused': {
    color: customTheme.color.blue,
  },
  '& .MuiInput-underline:after': {
    borderWidth: 0,
    borderRadius: '10px 0px 0px 10px',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderWidth: 0,
      borderRadius: '10px 0px 0px 10px',
    },
    '&:hover fieldset': {
      borderWidth: 0,
      borderRadius: '10px 0px 0px 10px',
      color: customTheme.color.blue,
    },
    '&.Mui-focused fieldset': {
      borderWidth: 0,
      borderRadius: '10px 0px 0px 10px',
    },
  },
  color: 'red',
});

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
      borderRadius: 10,
    },
    backgroundColor: theme.palette.background.default,
    height: tabHeight,
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
    [theme.breakpoints.up('laptop')]: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
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
}));

function Home() {
  const [selectedTab, setSelectedTab] = useState(ECategory.HUMANITY);
  const [openCard, setOpenCard] = useState(false);
  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const { state, updateCode, updateIsCodeVerified } = useContext(VoteContext);
  const styles = useStyles();
  const [
    {
      data: criminalsList = {} as resultType,
      // error: criminalError,
      loading: criminalsLoading,
    },
    fetchCriminals,
  ] = useAxios<resultType>({}, { manual: true });

  const [{ loading }, verifyCode] = useAxios<CodeDataType>(
    {},
    { manual: true }
  );

  const onTabSelected = useCallback(
    (selected: ECategory) => () => {
      setSelectedTab(selected);
    },
    []
  );

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

  useEffect(() => {
    fetchCriminals({
      url: `/criminals?limit=52&page=1&categories=${selectedTab}`,
    });
  }, [fetchCriminals, selectedTab]);

  const handleSubmit = useCallback(() => {
    if (code) {
      verifyCode({ url: `/codes/verify/${code}` })
        .then((res) => {
          updateCode(res.data);
          updateIsCodeVerified(true);
        })
        .catch((error) => {
          setError('This code is not valid');
          updateIsCodeVerified(false);
          setOpen(true);
        });
    } else {
      setError("Let' fill the code first");
      setOpen(true);
    }
  }, [code, verifyCode, updateCode, updateIsCodeVerified]);

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

  const codeChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCode(e.target.value);
      updateIsCodeVerified(state.code.code === e.target.value);
    },
    [state.code.code, updateIsCodeVerified]
  );

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  if (criminalsLoading) return <Loading />;

  return (
    <>
      <Box className={styles.header}>
        <Box className={styles.rightCircle}>
          <DesktopVoteIllustrationIcon
            style={{
              width: 500,
              height: 500,
              marginLeft: -250,
              marginBottom: -110,
            }}
          />
        </Box>
        <Box className={styles.topCircle}>
          <Typography variant="subtitle1" style={{ color: '#fff' }}>
            Your Voice Matter
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            overflow="auto"
            style={{ marginBottom: 40, marginTop: 20, color: '#fff' }}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            officia exercitationem ex? Asperiores tempora reprehenderit ipsam
            magni pariatur tempore assumenda incidunt, similique. Asperiores
            tempora reprehenderit ipsam magni pariatur tempore assumenda
            incidunt, similique.
          </Typography>
        </Box>
        <DesktopVoteText1Icon
          style={{
            width: 600,
            height: 300,
            position: 'absolute',
            bottom: 200,
            left: -100,
          }}
        />
        <DesktopVoteText2Icon
          style={{
            width: 600,
            height: 300,
            position: 'absolute',
            bottom: 50,
            right: -100,
          }}
        />
      </Box>
      <Box className={styles.banner}>
        <Typography variant="h1" style={{ color: '#fff' }}>
          Your voting code goes here
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          marginTop={2}
        >
          <CodeInput
            fullWidth
            id="outlined-basic"
            variant="outlined"
            size="small"
            color="primary"
            placeholder="* * * * * * * * *  *"
            style={{
              marginRight: 3,
              backgroundColor: '#fff',
              borderRadius: '10px 0px 0px 10px',
            }}
            onChange={codeChange}
          />
          {Boolean(state.isCodeVerified) ? (
            <Box className={styles.verifiedBtn}>Verified</Box>
          ) : (
            <Box className={styles.codeBtn} onClick={handleSubmit}>
              {loading ? <CircularProgress /> : 'Verify'}
            </Box>
          )}
        </Box>
      </Box>
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
          {orderedPeople()?.map(
            ({ categories, id, name, picture, votes }, idx) => (
              <CardMobile
                key={id}
                value={CARD_LIST[idx]?.value}
                color={CARD_LIST[idx]?.color}
                icon={CARD_LIST[idx]?.icon}
                person={{ image: picture!, name: name! }}
                onClick={onOpenCard(idx)}
              />
            )
          )}
        </Box>
        <ModalPage open={openCard} onClose={handleCloseCard}>
          <VoteCardList
            criminals={orderedPeople()!}
            initialIndex={current}
            onCloseModal={handleCloseCard}
          />
        </ModalPage>
      </Box>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </>
  );
}

export default Home;
