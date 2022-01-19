import { useIsMobile } from 'common/hooks';
import AdBannerDesktop from './AdBanner.desktop';
import AdBannerMobile from './AdBanner.mobile';

const AdBanner: React.FC = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <AdBannerMobile /> : <AdBannerDesktop />}</>;
};

export default AdBanner;
