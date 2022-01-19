import { useIsMobile } from 'common/hooks';
import HeaderDesktop from './Header.desktop';
import HeaderMobile from './Header.mobile';

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  return <>{isMobile ? <HeaderMobile /> : <HeaderDesktop />}</>;
};

export default Header;
