import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

type StyleType = {
  color: string;
};
const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    border: (props: StyleType) => `1px solid ${props.color}`,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
  topLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '20%',
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    color: (props: StyleType) => props.color,
    fontWeight: 500,
    fontSize: 20,
  },
  BottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '20%',
    height: '20%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    transform: 'rotate(-180deg)',
    fontWeight: 500,
    fontSize: 20,
    color: (props: StyleType) => props.color,
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
    height: 10,
    width: 10,
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
  onClick?: VoidFunction;
};

const CardMobile: React.FC<CardType> = ({
  color,
  icon,
  person,
  value,
  onClick = () => {},
}) => {
  const styles = useStyles({ color });

  return (
    <Box className={styles.card} onClick={onClick}>
      <Box className={styles.topLeft}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={styles.BottomRight}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={styles.middle}>
        <img src={person.image} alt={person.name} className={styles.image} />
      </Box>
    </Box>
  );
};

export default CardMobile;
