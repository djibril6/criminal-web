import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { EVoteType } from 'pages/Home/types';
import { StatusType } from './card.type';

type StyleType = {
  color: string;
};
const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: 450,
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
    fontSize: 63,
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
    fontSize: 63,
    color: (props: StyleType) => props.color,
  },
  middle: {
    width: '60%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  middleImage: {
    border: (props: StyleType) => `2px solid ${props.color}`,
    width: '100%',
    height: '60%',
    marginTop: 10,
    marginBottom: 10,
  },
  image: {
    width: '99%',
    height: '99%',
  },
  cardIcon: {
    height: 32,
    width: 32,
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
  status?: StatusType;
  rank: number;
};

const CardDetails: React.FC<CardType> = ({
  color,
  icon,
  person,
  value,
  status = EVoteType.NONE,
  rank,
}) => {
  const styles = useStyles({ color });

  return (
    <Box className={styles.card}>
      <Box className={styles.topLeft}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={styles.BottomRight}>
        {value} <img src={icon} alt={value} className={styles.cardIcon} />
      </Box>
      <Box className={styles.middle}>
        <Typography variant="h1" style={{ color }}>
          {person.name}
        </Typography>
        <Box className={styles.middleImage}>
          <img src={person.image} alt={person.name} className={styles.image} />
        </Box>
        <Typography variant="h1" style={{ color }}>
          Rank : {rank}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardDetails;
