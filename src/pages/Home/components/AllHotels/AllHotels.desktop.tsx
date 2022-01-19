import { makeStyles } from '@mui/styles';
import { Box, Theme } from '@mui/material';
import bungalovImg from 'statics/img/bungalov.png';
import { HotelCard } from 'components';
import HomePageSection from '../HomePageSection';
import { customTheme } from 'common/theme';
import { DownIcon } from 'components/Icons';
import { useCallback, useContext, useState } from 'react';
import { FooterPositionContext } from 'context/FooterPositionContext';
import { EFooterPositionAction } from 'common/types';

const useStyles = makeStyles((theme: Theme) => ({
  hotelCards: {
    width: '100%',
    display: 'grid',
    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 5,
    },
    [theme.breakpoints.up('tablet')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 10,
    },
    [theme.breakpoints.up('laptop')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    gap: 30,
  },
  showAllSection: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
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
const AllHotelsDesktop: React.FC<AllHotelsProps> = ({ hotels }) => {
  const styles = useStyles();
  const [total, setTotal] = useState(8);
  const { dispatch: footerDispatch } = useContext(FooterPositionContext);

  const handleShowMore = useCallback(() => {
    setTotal(hotels?.results.length);
    footerDispatch({
      type: EFooterPositionAction.SET_BOTTOM,
      payload: -1200 * customTheme.ratio,
    });
  }, [hotels?.results.length, footerDispatch]);
  return (
    <HomePageSection title="Tüm Oteller" color="secondary">
      <Box className={styles.hotelCards}>
        {hotels?.results.slice(0, total).map((hotel: any, idx: number) => (
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
      <Box className={styles.showAllSection} onClick={handleShowMore}>
        <Box className={styles.showAll}>
          {' '}
          {Boolean(total <= 8) ? 'DAHA FAZLA GÖSTER' : 'TÜM GÖSTER'}
        </Box>
        {Boolean(total <= 8) && (
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
        )}
      </Box>
    </HomePageSection>
  );
};

export default AllHotelsDesktop;
