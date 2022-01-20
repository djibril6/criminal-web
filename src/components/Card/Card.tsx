import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import acceptBlack from 'statics/img/accept-black.png';
import acceptGreen from 'statics/img/accept-green.png';
import rejectBlack from 'statics/img/reject-black.png';
import rejectRed from 'statics/img/reject-red.png';

type StyleType = {
  color: string;
};
const useStyles = makeStyles((theme) => ({
  card: {
    width: 200,
    height: 250,
    borderRadius: 10,
    boxShadow: '0px 0px 15px 4px #000',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
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
    fontWeight: 700,
    fontSize: 17,
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
    fontWeight: 700,
    fontSize: 17,
    color: (props: StyleType) => props.color,
  },
  middle: {
    width: '70%',
    height: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
    boxShadow: (props: StyleType) => `0px 0px 15px 0px ${props.color}`,
  },
  title: {
    color: (props: StyleType) => props.color,
  },
  cardIcon: {
    height: 20,
    width: 20,
  },
}));

export type StatusType = 'none' | 'up' | 'down';

type CardType = {
  value: string;
  color: string;
  icon: string;
  person: {
    image: string;
    name: string;
  };
  status?: StatusType;
  onVote?: (type: StatusType) => void;
};

const Card: React.FC<CardType> = ({
  color,
  icon,
  person,
  value,
  status = 'none',
  onVote = (type: StatusType) => {},
}) => {
  const styles = useStyles({ color });

  return (
    <Box className={styles.card}>
      <Box className={styles.topLeft}>
        {value} <img src={icon} alt="hitler" className={styles.cardIcon} />
      </Box>
      <Box className={styles.BottomRight}>
        {value} <img src={icon} alt="hitler" className={styles.cardIcon} />
      </Box>
      <Box className={styles.middle}>
        <img src={person.image} alt={person.name} className={styles.image} />
        <h1 className={styles.title}>{person.name}</h1>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
        >
          <img
            src={Boolean(status === 'up') ? acceptGreen : acceptBlack}
            alt="up"
            width={25}
            height={25}
            style={{ marginRight: 20, cursor: 'pointer' }}
            onClick={() => {
              onVote(status === 'up' ? 'none' : 'up');
            }}
          />
          <img
            src={Boolean(status === 'down') ? rejectRed : rejectBlack}
            alt="down"
            width={25}
            height={25}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onVote(status === 'down' ? 'none' : 'down');
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
