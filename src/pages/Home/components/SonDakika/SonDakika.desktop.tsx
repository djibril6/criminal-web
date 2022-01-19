import { makeStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import { customTheme } from 'common/theme';
import { HotelCard, GridCarousel } from 'components';
import HomePageSection from '../HomePageSection';
import { useMemo } from 'react';
import { LeftArrowIcon, RightArrowIcon } from 'components/Icons';

const useStyles = makeStyles((theme: Theme) => ({
  hotelCards: {
    width: '100%',
    // display: 'grid',
    // [theme.breakpoints.down('tablet')]: {
    //   gridTemplateColumns: 'repeat(2, 1fr)',
    // },
    // [theme.breakpoints.up('tablet')]: {
    //   gridTemplateColumns: 'repeat(3, 1fr)',
    // },
    // [theme.breakpoints.up('laptop')]: {
    //   gridTemplateColumns: 'repeat(4, 1fr)',
    // },
    // gap: 30,
  },
}));

type SonDakikaProps = {
  hotels: any;
};

const SonDakikaDesktop: React.FC<SonDakikaProps> = ({ hotels }) => {
  const styles = useStyles();
  const renderArrows = useMemo(
    () => (
      <Box display="flex" flexDirection="row" alignItems="center">
        <LeftArrowIcon
          style={{ width: 15, height: 15, marginRight: 4 }}
          defaultColor={customTheme.color.orange}
          cursor="pointer"
        />
        <RightArrowIcon
          style={{ width: 25, height: 25 }}
          defaultColor={customTheme.color.blue}
          cursor="pointer"
        />
      </Box>
    ),
    []
  );
  return (
    <HomePageSection title="Son Dakika Fırsatları" headerEnd={renderArrows}>
      <Box className={styles.hotelCards}>
        <GridCarousel
          columns={4}
          transitionDelay={3000}
          arrowSize="0px"
          paginateCurrentColor={customTheme.color.orange}
        >
          {hotels?.results.slice(0, 6).map((hotel: any, idx: number) => (
            <GridCarousel.Item key={hotel?.otel_id}>
              <HotelCard
                disabled={idx === 1}
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
    </HomePageSection>
  );
};

export default SonDakikaDesktop;
