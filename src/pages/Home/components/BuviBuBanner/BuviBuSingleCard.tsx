import { Typography, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useIsMobile } from 'common/hooks';
import { customTheme } from 'common/theme';

// import Slider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/custom-animations/fall-animation.css';
import './styles.css';

// const AutoplaySlider = withAutoplay(Slider);

type stylesType = {
  isMobile: boolean;
  ratio: number;
};

const useStyles = makeStyles({
  container: {},
  image: {
    height: (props: stylesType) => (props.isMobile ? 350 : 317) * props.ratio,
    width: (props: stylesType) => (props.isMobile ? '95%' : 250 * props.ratio),
    margin: 'auto',
    borderRadius: customTheme.borderRadius,
    overflow: 'hidden',
    position: 'relative',
  },
  title: {
    padding: 1,
    fontSize: 18,
    fontWeight: 600,
  },
  titleIcon: {
    borderRight: `1px solid ${customTheme.color.grey}`,
    marginRight: 8,
    paddingRight: 8,
  },
  linkButtons: {
    position: 'absolute',
    bottom: 15,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
  linkButton: {
    color: '#fff !important',
    borderRadius: '40px !important',
    paddingRight: '15px !important',
    paddingLeft: '15px !important',
  },
});

type TProps = {
  title: string;
  icon: JSX.Element;
  image: string;
  link: string;
  color: 'primary' | 'secondary' | 'error';
  noTitle?: boolean;
};

const BuviBuSingleCard: React.FC<TProps> = ({
  color,
  image,
  link,
  icon,
  title,
  noTitle,
}) => {
  const isMobile = useIsMobile();
  const styles = useStyles({ isMobile, ratio: customTheme.ratio });
  return (
    <Box className={styles.container}>
      {!noTitle && (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          padding={2}
        >
          <Box className={styles.titleIcon}>{icon}</Box>
          <Typography
            color={color}
            className={styles.title}
            style={{ fontSize: 18 }}
          >
            {title}
          </Typography>
        </Box>
      )}
      <Box className={styles.image}>
        <img src={image} alt={`${title} oteller`} width="100%" height="100%" />
        <Box className={styles.linkButtons}>
          <Button
            variant="contained"
            color={color}
            size="small"
            className={styles.linkButton}
            startIcon={<span style={{ marginRight: 10 }}>+</span>}
          >
            Tesisleri İncele
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BuviBuSingleCard;
