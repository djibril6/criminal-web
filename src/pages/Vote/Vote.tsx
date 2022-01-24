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
import { CardMobile, ModalPage, VoteCardList, Tabs } from 'components';
import { useCallback, useContext, useState } from 'react';
import useAxios from 'axios-hooks';
import CARD_LIST from './cardList';
import { ECategory } from './types';
import { CodeDataType, VoteContext } from 'context/VoteContext';
import { customTheme } from 'common/theme';
import { tabHeight } from 'components/Tabs';
import { useOrder } from 'common/helper';

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
}));

function Vote() {
  const [selectedTab, setSelectedTab] = useState(ECategory.HUMANITY);
  const [openCard, setOpenCard] = useState(false);
  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const { state, updateCode, updateIsCodeVerified } = useContext(VoteContext);
  const styles = useStyles();

  const orderedCriminal = useOrder();

  const [{ loading }, verifyCode] = useAxios<CodeDataType>(
    {},
    { manual: true }
  );

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

  // if (criminalsLoading) return <Loading />;

  return (
    <>
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
        <Tabs
          selectedTab={selectedTab}
          onTabSelected={onTabSelected}
          mobileFixed
        />

        <Box className={styles.divider} />

        <Box className={styles.criminalList}>
          {orderedCriminal?.map(
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
            criminals={orderedCriminal!}
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

export default Vote;
