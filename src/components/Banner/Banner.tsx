import { useIsMobile } from 'common/hooks';
import BannerDesktop from './Banner.desktop';
import BannerMobile from './Banner.mobile';

const Banner: React.FC = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <BannerMobile /> : <BannerDesktop />}</>;
};

export default Banner;
