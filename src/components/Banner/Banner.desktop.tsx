import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { BasicInput } from 'components';
import UserGroup from 'components/Icons/UserGroup';
import { useCallback } from 'react';

import backCold from '../../statics/img/banner-cold.png';
import backHot from '../../statics/img/banner-hot.png';

type stylesType = {
  ratio: number;
};
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: (props: stylesType) => 289 * props.ratio,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 20,
    marginBottom: 100,
    marginTop: 20,
  },
  searchArea: {
    width: '100%',
    position: 'absolute',
    bottom: -50,
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  searchAreaContent: {
    backgroundColor: theme.palette.background.default,
    borderRadius: 10,
    boxShadow: `0px 0px 15px 0px ${customTheme.color.shadowColor}`,
    height: (props: stylesType) => 82 * props.ratio - 13,
    width: '85%',
    margin: 'auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: 0,
  },
  searchElement: {
    borderRight: `1px solid ${customTheme.color.grey}`,
    height: '84%',
    marginTop: '5%',
    // padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

type InputContentProps = {
  children: React.ReactNode;
  title: string;
  placeholder: string;
};
const InputContent: React.FC<InputContentProps> = ({
  children,
  title,
  placeholder,
}) => {
  return (
    <>
      {children}
      <Box marginLeft={1} marginTop={-1}>
        <h2 style={{ marginBottom: -5 }}>{title}</h2>
        <BasicInput placeholder={placeholder} />
      </Box>
    </>
  );
};

const Banner: React.FC = () => {
  const styles = useStyles({ ratio: customTheme.ratio });
  const handleBannerContainer = useCallback((el: HTMLDivElement) => {
    if (el) {
      const todayMonth = new Date().getMonth() + 1;
      if ([12, 1, 2].includes(todayMonth)) {
        el.style.backgroundImage = `url('${backCold}')`;
      } else {
        el.style.backgroundImage = `url('${backHot}')`;
      }
      el.style.backgroundSize = '100% 150%';
      el.style.backgroundPosition = '0% 100%';
    }
  }, []);
  return (
    <Box className={styles.root} ref={handleBannerContainer}>
      {/* <img
        style={{ borderRadius: 20 }}
        src={logo}
        alt=""
        width="100%"
        height="100%"
      /> */}
      <Box className={styles.searchArea}>
        <Box className={styles.searchAreaContent}>
          <Box className={styles.searchElement}>
            <InputContent title="Lokasyon" placeholder="Yolculuk nerede?">
              <UserGroup defaultColor={customTheme.color.orangeLight} />
            </InputContent>
          </Box>
          <Box className={styles.searchElement}>
            <InputContent title="Giriş Tarihi" placeholder="Tarih giriniz">
              <UserGroup defaultColor={customTheme.color.orangeLight} />
            </InputContent>
          </Box>
          <Box className={styles.searchElement}>
            <InputContent title="Çıkış Tarihi" placeholder="Tarih giriniz">
              <UserGroup defaultColor={customTheme.color.orangeLight} />
            </InputContent>
          </Box>
          <Box className={styles.searchElement}>
            <InputContent title="Misafirler" placeholder="Misafir ekleyin">
              <UserGroup defaultColor={customTheme.color.orangeLight} />
            </InputContent>
          </Box>
          <Box className={styles.searchElement}>
            <InputContent title="Ek Seçenekler" placeholder="Seçiniz">
              <UserGroup defaultColor={customTheme.color.orangeLight} />
            </InputContent>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Banner;
