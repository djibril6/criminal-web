import { Box, Button, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { LogoIcon } from 'components/Icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useCallback, useState } from 'react';
import userIcon from 'statics/img/userIcon.png';
import notifIcon from 'statics/img/notifIcon.png';

const HEADER_HEIGHT = 70;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },
  logoIcon: {
    width: 46 * 2,
    height: 13 * 2,
  },
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 50,
  },
  menuItem: {
    color: theme.palette.common.black,
    marginRight: 10,
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  rightMenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  tesisButton: {
    borderWidth: 0,
  },
  userSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 10,
  },
  user: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 25px 15px 25px',
    height: 31,
    borderRadius: HEADER_HEIGHT,
    marginRight: 10,
    boxShadow: '0px 3px 10px 0px #c4c4c4',
    cursor: 'pointer',
  },
  userTextContainer: {
    marginLeft: 12,
    display: 'flex',
    flexDirection: 'column',
  },
  userText: {
    fontSize: 12,
    marginBottom: -10,
  },
  dropDown: {
    position: 'absolute',
    width: '100%',
    top: HEADER_HEIGHT,
    backgroundColor: theme.palette.background.default,
    borderRadius: customTheme.borderRadius,
    boxShadow: `0px 5px 8px 0px ${customTheme.color.shadowColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    zIndex: 1,
  },
  showDropDown: {
    display: 'flex',
  },
  hideDropDown: {
    display: 'none',
  },
  dropDownText: {
    cursor: 'pointer',
  },
}));

const MENU_LIST = [
  { label: 'BUNGALOV', link: '/hotels/list' },
  { label: 'VİLLALAR', link: '/hotels/list' },
  { label: 'BUTİL OKTEL', link: '/hotels/list' },
  { label: 'KAMPANYALAR', link: '/hotels/list' },
];

const HeaderDesktop: React.FC = () => {
  const styles = useStyles();
  const [dropDown, setDropDown] = useState(false);

  const onDropDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setDropDown(!dropDown);
    },
    [dropDown]
  );
  return (
    <Box className={styles.container}>
      <LogoIcon />
      <nav className={styles.nav}>
        {MENU_LIST.map(({ label, link }) => (
          <Typography key={label}>
            <Link className={styles.menuItem} to={link}>
              {label}
            </Link>
          </Typography>
        ))}
      </nav>
      <Box className={styles.rightMenu}>
        {/* HARDCODE */}
        <Button
          className={styles.tesisButton}
          variant="text"
          startIcon={
            <span
              style={{
                backgroundColor: customTheme.color.blue,
                width: 20,
                height: 20,
                borderRadius: 5,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 'bold',
                padding: 0.4,
                color: '#fff',
              }}
            >
              +
            </span>
          }
        >
          TESIS EKLE
        </Button>
        <Box className={styles.userSection}>
          <Box className={styles.user} onClick={onDropDown}>
            <img src={userIcon} alt="user" width={20} height={20} />
            <Box className={styles.userTextContainer}>
              <Typography className={styles.userText}>
                <b>OTURUM AÇ</b>
              </Typography>
              <Typography className={styles.userText}>VEYA KAYDOL</Typography>
            </Box>
          </Box>
          {/* HARDCODE */}
          <img src={notifIcon} alt="user" width={20} height={20} />
          <Box
            className={classNames(
              styles.dropDown,
              dropDown ? styles.showDropDown : styles.hideDropDown
            )}
          >
            <Box
              padding={1}
              width="100%"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingLeft={2}
            >
              <Typography className={styles.dropDownText} variant="body1">
                Kaydolun
              </Typography>
              <Typography
                className={styles.dropDownText}
                variant="body1"
                style={{ color: customTheme.color.grey }}
              >
                Oturum Açin
              </Typography>
            </Box>
            <Box
              borderTop={`1px solid ${customTheme.color.grey}`}
              paddingBottom={3}
              paddingTop={1}
              paddingLeft={2}
              marginTop={1}
              width="100%"
              display="flex"
              justifyContent="flex-start"
            >
              <Typography
                className={styles.dropDownText}
                variant="body1"
                style={{ color: customTheme.color.grey }}
              >
                Yardım Alın
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderDesktop;
