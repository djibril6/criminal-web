import { makeStyles } from '@mui/styles';
import { Box, Theme, Typography } from '@mui/material';
import { customTheme } from 'common/theme';
import { HotelCard, GridCarousel } from 'components';

const useStyles = makeStyles((theme: Theme) => ({
  hotelCards: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 10,
  },
}));

type SonDakikaProps = {
  hotels: any;
};

const SonDakikaMobile: React.FC<SonDakikaProps> = ({ hotels }) => {
  const styles = useStyles();

  return (
    <Box className={styles.hotelCards}>
      <Typography variant="h1" color="primary" style={{ marginLeft: 20 }}>
        Son Dakika Fırsatları
      </Typography>

      <GridCarousel
        columns={1}
        transitionDelay={3000}
        arrowSize="0px"
        paginateCurrentColor={customTheme.color.orange}
      >
        {hotels?.results.slice(0, 3).map((hotel: any, idx: number) => (
          <GridCarousel.Item key={hotel?.otel_id}>
            <HotelCard
              title={hotel?.otel_adi}
              image={hotel?.hotel_image}
              region="Sapanca / Sakarya"
              price={`${hotel?.prices?.ppsatis || '-'} tl`}
              oldPrice="3500 tl"
              time={idx === 1 ? 0 : (idx + 1) * 10000000}
              note="8,5/10"
              guests={6}
              beds={3}
              shower={2}
              swimming={2}
              bathrooms={0}
              place={25}
              sonDakika
            />
          </GridCarousel.Item>
        ))}
      </GridCarousel>
    </Box>
  );
};

export default SonDakikaMobile;
