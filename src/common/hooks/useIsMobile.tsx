import { useMediaQuery, useTheme } from '@mui/material';

export const useIsMobile = () => {
  const theme = useTheme();
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;

  const isAndroid = Boolean(userAgent.match(/Android/i));
  const isIos = Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = Boolean(userAgent.match(/IEMobile/i));
  const media = useMediaQuery(theme.breakpoints.down('mobile'));

  return isAndroid || isIos || isOpera || isWindows || media;
};
