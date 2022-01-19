import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Footer from './Footer/Footer';
import Header from './Header/Header';

const padding = 50;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    [theme.breakpoints.down('tablet')]: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    [theme.breakpoints.up('tablet')]: {
      paddingLeft: padding / 2,
      paddingRight: padding / 2,
    },
    [theme.breakpoints.up('laptop')]: {
      paddingLeft: padding,
      paddingRight: padding,
    },
    position: 'relative',
  },
}));

type TPageContainer = {
  children: React.ReactNode;
};

const PageContainer: React.FC<TPageContainer> = ({ children }) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <Header />
      {children}
      <Footer />
    </Box>
  );
};

export default PageContainer;
