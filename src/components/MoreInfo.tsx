import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useIsMobile } from 'common/hooks';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '90%',
    height: '95%',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

type VoteCardType = {
  title: String;
  details: String;
};
const VoteCard: React.FC<VoteCardType> = ({ title, details }) => {
  const isMobile = useIsMobile();
  const styles = useStyles();

  return isMobile ? (
    <Box width="90%" margin="auto">
      <Box marginTop={1} maxHeight={window.innerHeight / 4} overflow="auto">
        <Typography variant="h1">{title}</Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: 'justify',
            color: '#000',
          }}
        >
          {details}
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box className={styles.container}>
      <Box width="65%" marginLeft={4} paddingTop={2}>
        <Typography
          variant="h1"
          component="h1"
          style={{
            fontSize: '2rem',
            marginBottom: '.5rem',
            textTransform: 'capitalize',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: 'justify',
            color: '#000',
            textTransform: 'capitalize',
            fontSize: '1rem',
          }}
        >
          {details}
        </Typography>
      </Box>
    </Box>
  );
};

export default VoteCard;
