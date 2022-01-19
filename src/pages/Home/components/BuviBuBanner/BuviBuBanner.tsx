import { useIsMobile } from 'common/hooks';
import BuviBuBannerDesktop from './BuviBuBanner.desktop';
import BuviBuBannerMobile from './BuviBuBanner.mobile';

const BuviBuBanner: React.FC = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <BuviBuBannerMobile /> : <BuviBuBannerDesktop />}</>;
};

export default BuviBuBanner;
