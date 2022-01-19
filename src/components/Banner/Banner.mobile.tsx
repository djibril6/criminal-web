import { Box, Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { SearchInput } from 'components';
import UserGroup from 'components/Icons/UserGroup';

import logo from 'statics/img/logoSoft.png';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    width: '100%',
    height: 300,
    backgroundColor: theme.palette.secondary.light,
    marginBottom: 250,
    marginTop: 20,
  },
  searchArea: {
    width: '80%',
    position: 'absolute',
    bottom: '-60%',
    left: '10%',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  searchAreaContent: {
    padding: 10,
  },
  searchElement: {
    backgroundColor: theme.palette.background.default,
    boxShadow: `0px 0px 15px 0px ${customTheme.color.shadowColor}`,
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,
    height: 60,
    padding: 10,
    display: 'flex',
    justifyContent: 'center',
  },
  searchElementFirst: {
    backgroundColor: theme.palette.background.default,
    boxShadow: `0px 0px 15px 0px ${customTheme.color.shadowColor}`,
    width: '100%',
    borderRadius: 10,
    marginBottom: 5,
    height: 60,
    padding: 10,
    display: 'initial',
  },
  bottomBack: {
    width: '90%',
    height: 200,
    margin: 'auto',
    marginTop: -5,
    backgroundColor: customTheme.color.grey,
    borderBottomLeftRadius: customTheme.borderRadius,
    borderBottomRightRadius: customTheme.borderRadius,
  },
}));

const BannerMobile: React.FC = () => {
  const styles = useStyles();
  return (
    <>
      <Box className={styles.root}>
        <img src={logo} alt="" width="100%" height="100%" />
        <Box className={styles.searchArea}>
          <Box className={styles.searchAreaContent}>
            <Grid container spacing={0} style={{ marginBottom: 10 }}>
              <Grid item xs={6} className={styles.searchElementFirst}>
                <SearchInput
                  placeholder="Lokasyon"
                  label="Yolculuk nerede?"
                  icon={
                    <UserGroup defaultColor={customTheme.color.orangeLight} />
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginBottom: 10 }}>
              <Grid item xs={6} className={styles.searchElement}>
                <SearchInput
                  placeholder="Giriş Tarihi"
                  label="Tarih giriniz"
                  icon={
                    <UserGroup defaultColor={customTheme.color.orangeLight} />
                  }
                />
                <SearchInput
                  placeholder="Çıkış Tarihi"
                  label="Tarih giriniz"
                  icon={
                    <UserGroup defaultColor={customTheme.color.orangeLight} />
                  }
                />
              </Grid>
            </Grid>
            <Grid container spacing={0} style={{ marginBottom: 10 }}>
              <Grid item xs={6} className={styles.searchElement}>
                <SearchInput
                  placeholder="Misafirler"
                  label="Misafir ekleyin"
                  icon={
                    <UserGroup defaultColor={customTheme.color.orangeLight} />
                  }
                />
                <SearchInput
                  placeholder="Ek Seçenekler"
                  label="Seçiniz"
                  icon={
                    <UserGroup defaultColor={customTheme.color.orangeLight} />
                  }
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box className={styles.bottomBack} />
      </Box>
    </>
  );
};

export default BannerMobile;
