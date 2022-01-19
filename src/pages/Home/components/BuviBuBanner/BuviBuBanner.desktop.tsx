import { makeStyles } from '@mui/styles';
import { Box } from '@mui/material';
import BuviBuSingleCard from './BuviBuSingleCard';
import { customTheme } from 'common/theme';
import bungalovImg from 'statics/img/bungalov.png';
import villaImg from 'statics/img/villalar.png';
import butikImg from 'statics/img/yilbasi-otelleri.png';
import { BungalovIcon, ButikIcon, VillaIcon } from 'components/Icons';

type stylesType = {
  ratio: number;
};
const useStyles = makeStyles({
  containerRoot: {
    height: (props: stylesType) => 357 * props.ratio,
    width: '100%',
    // paddingTop: 10,
    borderRadius: customTheme.borderRadius,
    backgroundColor: '#f7921e2a',
    marginBottom: 150,
    marginTop: 10,
    position: 'relative',
  },
  container: {
    position: 'relative',
    height: 357 * customTheme.ratio,
    width: '99%',
    margin: 'auto',
    borderRadius: customTheme.borderRadius,
    backgroundColor: customTheme.color.blueLight,
  },
  subContainer: {
    position: 'absolute',
    top: '7%',
    left: '2%',
    width: '96%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 30,
  },
});

const BuviBuBannerDesktop: React.FC = () => {
  const styles = useStyles({ ratio: customTheme.ratio });
  return (
    <Box className={styles.containerRoot}>
      <Box
        width="100%"
        height={357}
        margin="auto"
        position="absolute"
        top={10}
        left={0}
        borderRadius="inherit"
      >
        <Box className={styles.container}>
          <Box className={styles.subContainer}>
            <BuviBuSingleCard
              title="Bungalov"
              color="secondary"
              image={bungalovImg}
              link=""
              icon={<BungalovIcon style={{ width: 40, height: 40 }} />}
            />
            <BuviBuSingleCard
              title="Villa"
              color="primary"
              image={villaImg}
              link=""
              icon={<VillaIcon style={{ width: 40, height: 40 }} />}
            />
            <BuviBuSingleCard
              title="Butik Otel"
              color="error"
              image={butikImg}
              link=""
              icon={<ButikIcon style={{ width: 40, height: 40 }} />}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuviBuBannerDesktop;
