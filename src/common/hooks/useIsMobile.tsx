import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

export const useIsMobile = () => {
  const [isSmallWidth, setIsSmallWidth] = useState(false);
  const theme = useTheme();
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const media = useMediaQuery(theme.breakpoints.down('mobile'));

  useEffect(() => {
    const checkIsSmall = () => {
      if (window.innerWidth <= 450) {
        setIsSmallWidth(true);
      } else {
        setIsSmallWidth(false);
      }
    };
    window.addEventListener('resize', checkIsSmall);
    return () => {
      window.removeEventListener('resize', checkIsSmall);
    };
  }, []);

  return isAndroid || isIos || isOpera || isWindows || media || isSmallWidth;
};
