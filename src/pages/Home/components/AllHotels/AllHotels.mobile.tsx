import { makeStyles } from '@mui/styles';
import { Box, Theme, Typography } from '@mui/material';
import bungalovImg from 'statics/img/bungalov.png';
import { HotelCard } from 'components';
import { customTheme } from 'common/theme';
import { DownIcon } from 'components/Icons';

const useStyles = makeStyles((theme: Theme) => ({
  hotelCards: {
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: 5,
  },
  showAllSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
    width: '100%',
  },
  showAll: {
    padding: '5px 15px 5px 15px',
    border: `1px solid ${customTheme.color.grey}`,
    borderRadius: 15,
    fontSize: 12,
    fontWeight: 600,
    cursor: 'pointer',
  },
}));

const HotelList: any = [];

for (let index = 0; index < 8; index++) {
  HotelList.push({
    title: 'SAPANCA ALA HOUSE',
    region: 'Sapanca / Sakarya',
    image: bungalovImg,
  });
}

type AllHotelsProps = {
  hotels: any;
};
const AllHotelsMobile: React.FC<AllHotelsProps> = ({ hotels }) => {
  const styles = useStyles();
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      alignItems="flex-start"
    >
      <Typography variant="h1" color="primary" style={{ marginLeft: 30 }}>
        Tüm Oteller
      </Typography>
      <Box className={styles.hotelCards}>
        {hotels?.results.map((hotel: any, idx: number) => (
          <HotelCard
            key={hotel?.otel_id}
            title={hotel?.otel_adi}
            image={hotel?.hotel_image}
            region="Sapanca / Sakarya"
            price={`${hotel?.prices?.ppsatis || '-'} tl`}
            oldPrice="3500 tl"
            note="8,5/10"
            guests={6}
            beds={3}
            shower={2}
            swimming={2}
            bathrooms={0}
            place={25}
          />
        ))}
      </Box>
      <Box className={styles.showAllSection}>
        <Box className={styles.showAll}> DAHA FAZLA GÖSTER</Box>
        <Box
          display="flex"
          flexDirection="column"
          style={{ cursor: 'pointer' }}
        >
          <DownIcon
            defaultColor="#000"
            style={{ width: 10, height: 10, marginBottom: -5 }}
          />
          <DownIcon
            defaultColor="#979696"
            style={{ width: 10, height: 10, marginBottom: -5 }}
          />
          <DownIcon
            defaultColor="#929292ad"
            style={{ width: 10, height: 10 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AllHotelsMobile;
