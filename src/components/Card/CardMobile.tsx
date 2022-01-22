import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';

type StyleType = {
  color: string;
  modal: boolean;
};
const useStyles = makeStyles((theme: Theme) => ({
  card: {
    width: '100%',
    [theme.breakpoints.down('tablet')]: {
      height: 150,
    },
    [theme.breakpoints.up('tablet')]: {
      height: (props: StyleType) => (props.modal ? '80%' : 250),
    },
    [theme.breakpoints.up('laptop')]: {
      height: (props: StyleType) => (props.modal ? '80%' : 355),
    },
    borderRadius: 10,
    border: (props: StyleType) => `1px solid ${props.color}`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },

  cornerText: {
    width: '20%',
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    color: (props: StyleType) => props.color,
    fontWeight: 500,
    [theme.breakpoints.down('tablet')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('tablet')]: {
      fontSize: (props: StyleType) => (props.modal ? 20 : 25),
    },
    [theme.breakpoints.up('laptop')]: {
      fontSize: (props: StyleType) => (props.modal ? 20 : 58),
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
    width: '60%',
    height: '60%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    border: (props: StyleType) => `2px solid ${props.color}`,
  },
  image: {
    width: '99%',
    height: '99%',
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
      height: (props: StyleType) => (props.modal ? 15 : 30),
      width: (props: StyleType) => (props.modal ? 15 : 30),
      marginTop: (props: StyleType) => (props.modal ? -5 : -10),
    },
  },
}));

type CardType = {
  value: string;
  color: string;
  icon: string;
  person: {
    image: string;
    name: string;
  };
  modal?: boolean;
  onClick?: VoidFunction;
};

const CardMobile: React.FC<CardType> = ({
  color,
  icon,
  person,
  value,
  modal = false,
  onClick = () => {},
}) => {
  const styles = useStyles({ color, modal });

  return (
    <Box className={styles.card} onClick={onClick}>
      <Box className={classNames(styles.topLeft, styles.cornerText)}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={classNames(styles.BottomRight, styles.cornerText)}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={styles.middle}>
        <img src={person.image} alt={person.name} className={styles.image} />
      </Box>
    </Box>
  );
};

export default CardMobile;
