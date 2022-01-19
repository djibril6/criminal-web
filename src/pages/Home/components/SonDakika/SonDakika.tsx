import { useIsMobile } from 'common/hooks';
import SonDakikaDesktop from './SonDakika.desktop';
import SonDakikaMobile from './SonDakika.mobile';

type SonDakikaProps = {
  hotels: any;
};
const SonDakika: React.FC<SonDakikaProps> = (props) => {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? (
        <SonDakikaMobile {...props} />
      ) : (
        <SonDakikaDesktop {...props} />
      )}
    </>
  );
};

export default SonDakika;
