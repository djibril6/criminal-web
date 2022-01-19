import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import './AdBanner.css';
import bungalovImg from 'statics/img/bungalov.png';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: 250,
    marginBottom: 120,
    marginTop: 50,
    position: 'relative',
    backgroundColor: theme.palette.primary.light,
  },
}));

const AdBanner: React.FC = () => {
  const styles = useStyles();

  return (
    <Box className={styles.container}>
      <Box
        width="90%"
        height="130%"
        marginLeft={2}
        top="-10%"
        bgcolor="#A4CDE3"
        overflow="hidden"
        style={{
          borderBottomLeftRadius: '100%',
          borderTopLeftRadius: '60%',
          borderBottomRightRadius: '70%',
          borderTopRightRadius: '80%',
          position: 'relative',
        }}
      >
        <Box
          width={100}
          height={100}
          bgcolor={customTheme.color.orange}
          borderRadius={50}
          position="absolute"
          right={-2}
          zIndex={0}
        />
        <Box
          width={100}
          height={100}
          bgcolor="#58C27D"
          borderRadius={50}
          position="absolute"
          left={-2}
          bottom={40}
          zIndex={0}
        />
        <Box
          width={100}
          height={100}
          bgcolor={customTheme.color.blueLight}
          borderRadius={50}
          position="absolute"
          right={-20}
          bottom={40}
          zIndex={0}
        />
        <img
          width="70%"
          height="85%"
          alt=""
          src={bungalovImg}
          style={{
            position: 'absolute',
            bottom: -5,
            left: '12%',
            borderRadius: 20,
            border: '5px solid black',
          }}
        />
      </Box>
    </Box>
  );
};

export default AdBanner;
