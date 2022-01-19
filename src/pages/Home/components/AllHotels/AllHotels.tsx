import { useIsMobile } from 'common/hooks';
import AllHotelsDesktop from './AllHotels.desktop';
import AllHotelsMobile from './AllHotels.mobile';

type AllHotelsProps = {
  hotels: any;
};
const AllHotels: React.FC<AllHotelsProps> = (props) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <AllHotelsMobile {...props} />
      ) : (
        <AllHotelsDesktop {...props} />
      )}
    </>
  );
};

export default AllHotels;
