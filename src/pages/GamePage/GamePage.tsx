import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { ModalPage, Tabs } from 'components';
import { QuestionMarkIcon } from 'components/Icons';
import { ECategory } from 'pages/Home/types';
import { useCallback, useEffect, useState } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  unKnownCard: {
    width: 138,
    height: 206,
    backgroundColor: theme.palette.primary.main,
    margin: 'auto',
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    margin: 'auto',
    borderRadius: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}));

const GamePage: React.FC = () => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = useState(ECategory.HUMANITY);
  const [openCard, setOpenCard] = useState(false);

  const handleCloseCard = useCallback(() => {
    setOpenCard(false);
  }, []);

  const onTabSelected = useCallback((selected: ECategory) => {
    setSelectedTab(selected);
  }, []);

  useEffect(() => {
    setOpenCard(true);
  }, []);

  return (
    <>
      <Box>
        <Tabs selectedTab={selectedTab} onTabSelected={onTabSelected} />
        <Box className={styles.unKnownCard}>
          <QuestionMarkIcon
            style={{
              width: 47,
              height: 90,
            }}
          />
        </Box>
      </Box>
      <ModalPage open={openCard} onClose={handleCloseCard}>
        <Box className={styles.modalContent}>
          <QuestionMarkIcon
            defaultColor={customTheme.color.blue}
            style={{
              width: 47,
              height: 90,
            }}
          />
          <Typography variant="h1" color="primary">
            Game Rules
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            style={{ padding: 10, textAlign: 'justify' }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aspernatur cumque impedit, laudantium distinctio error sit quae
            labore recusandae mollitia inventore quam, aliquid suscipit officia
            iusto similique sunt, ipsum eos!
          </Typography>
        </Box>
      </ModalPage>
    </>
  );
};

export default GamePage;
