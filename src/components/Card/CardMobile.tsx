import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { useIsMobile } from 'common/hooks';
import { customTheme } from 'common/theme';

type StyleType = {
  color: string;
  modal: boolean;
  dropdown: boolean;
};
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '90%',
    [theme.breakpoints.down('tablet')]: {
      height: 150,
      width: '100%',
    },
    [theme.breakpoints.up('tablet')]: {
      height: (props: StyleType) => (props.modal ? '80%' : 250),
    },
    [theme.breakpoints.up('laptop')]: {
      height: (props: StyleType) => {
        if (props.modal) {
          return '80%';
        } else if (props.dropdown) {
          return 150;
        } else {
          return 355;
        }
      },
    },
    borderRadius: 10,
    border: (props: StyleType) => `1px solid ${props.color}`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: customTheme.color.cardBackground,
    cursor: 'pointer',
  },

  cornerText: {
    width: '20%',
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    paddingTop: (props: StyleType) => (props.modal ? 10 : 0),
    color: (props: StyleType) => props.color,
    fontWeight: 500,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('tablet')]: {
      fontSize: (props: StyleType) => (props.modal ? 20 : 25),
    },
    [theme.breakpoints.up('laptop')]: {
      fontSize: (props: StyleType) => {
        if (props.modal) {
          return 20;
        } else if (props.dropdown) {
          return 20;
        } else {
          return 58;
        }
      },
    },
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  BottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    transform: 'rotate(-180deg)',
  },
  middle: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: '60%',
    height: '50%',
    border: (props: StyleType) => `2px solid ${props.color}`,
    borderRadius: 10,
  },
  cardIcon: {
    [theme.breakpoints.down('tablet')]: {
      height: 10,
      width: 10,
    },
    [theme.breakpoints.up('tablet')]: {
      height: 15,
      width: 15,
      marginTop: -5,
    },
    [theme.breakpoints.up('laptop')]: {
      height: (props: StyleType) => {
        if (props.modal) {
          return 15;
        } else if (props.dropdown) {
          return 15;
        } else {
          return 30;
        }
      },
      width: (props: StyleType) => {
        if (props.modal) {
          return 15;
        } else if (props.dropdown) {
          return 15;
        } else {
          return 30;
        }
      },
      marginTop: (props: StyleType) => (props.modal ? -5 : -7),
    },
  },
  cardName: {
    height: (props: StyleType) => (props.modal ? 25 : 40),
    width: (props: StyleType) => (props.modal ? 25 : 40),
    [theme.breakpoints.down('tablet')]: {
      height: 20,
      width: 20,
    },
  },
}));

type CardType = {
  value: JSX.Element;
  color: string;
  icon: JSX.Element;
  person: {
    image: string;
    name: string;
    subtitle: string;
    subtitle2: string;
  };
  modal?: boolean;
  dropdown?: boolean;
  onClick?: VoidFunction;
};

const CardMobile: React.FC<CardType> = ({
  color,
  icon,
  person,
  value,
  modal = false,
  dropdown = false,
  onClick = () => {},
}) => {
  const styles = useStyles({ color, modal, dropdown });
  const isMobile = useIsMobile();

  return (
    <Box className={styles.card} onClick={onClick}>
      <Box className={classNames(styles.topLeft, styles.cornerText)}>
        <Box className={styles.cardName}>{value}</Box>{' '}
        <Box className={styles.cardIcon}>{icon}</Box>
      </Box>
      <Box className={classNames(styles.BottomRight, styles.cornerText)}>
        <Box className={styles.cardName}>{value}</Box>{' '}
        <Box className={styles.cardIcon}>{icon}</Box>
      </Box>
      <Box className={styles.middle}>
        {!isMobile && !modal && (
          <Typography
            variant="h1"
            style={{ color, width: '80%', marginLeft: 40 }}
          >
            {person.name}
          </Typography>
        )}
        {!isMobile && !modal && (
          <Typography
            style={{ color, fontSize: 10, width: '80%', marginLeft: 40 }}
          >
            {person.subtitle}
          </Typography>
        )}
        <img src={person.image} alt={person.name} className={styles.image} />
        {!isMobile && !modal && (
          <Typography
            variant="subtitle2"
            style={{
              color,
              fontSize: 10,
              marginLeft: -10,
              marginTop: 5,
              width: '70%',
            }}
          >
            {person.subtitle2}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CardMobile;
