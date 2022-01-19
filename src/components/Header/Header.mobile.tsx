import {
  Box,
  Button,
  MenuItem,
  MenuList,
  SwipeableDrawer,
  Theme,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { LogoIcon } from 'components/Icons';
import { useNavigate } from 'react-router-dom';
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
    paddingLeft: 2,
    paddingRight: 2,
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

  userText: {
    fontSize: 12,
    marginBottom: -10,
  },
  dropDown: {
    position: 'absolute',
    width: '50%',
    top: HEADER_HEIGHT,
    backgroundColor: theme.palette.background.default,
    borderRadius: customTheme.borderRadius,
    boxShadow: `0px 5px 8px 0px ${customTheme.color.shadowColor}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    overflow: 'hidden',
    zIndex: 2,
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
  threeDots: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '30px',
    height: '40px',
  },
}));

const MENU_LIST = [
  { label: 'BUNGALOV', link: '/hotels/list' },
  { label: 'VİLLALAR', link: '/hotels/list' },
  { label: 'BUTİL OKTEL', link: '/hotels/list' },
  { label: 'KAMPANYALAR', link: '/hotels/list' },
];

const HeaderMobile: React.FC = () => {
  const styles = useStyles();
  const [dropDown, setDropDown] = useState(false);
  const [menuOpened, setMenuOpened] = useState(false);
  const navigate = useNavigate();

  const onDropDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      setDropDown(!dropDown);
    },
    [dropDown]
  );

  const toggleDrawer = useCallback(() => {
    setMenuOpened(!menuOpened);
  }, [menuOpened]);

  const navigateTo = useCallback(
    (link: string) => {
      navigate(link);
    },
    [navigate]
  );
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.threeDots} onClick={toggleDrawer}>
          {Array.from<number>({ length: 3 }).map((_, index) => (
            <Box
              key={index}
              width={2}
              height={2}
              borderRadius={5}
              marginRight={0.3}
              border={`2px solid ${customTheme.color.orange}`}
            />
          ))}
        </Box>
        <LogoIcon noText onClick={() => navigateTo('/')} />
        <Box className={styles.rightMenu}>
          <img
            onClick={onDropDown}
            src={userIcon}
            alt=""
            width={30}
            height={25}
            style={{ marginRight: 8 }}
          />
          <img
            src={notifIcon}
            alt=""
            width={30}
            height={30}
            style={{ marginRight: 8 }}
          />
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
      <SwipeableDrawer
        anchor="left"
        open={menuOpened}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
      >
        <Box minWidth={300} paddingTop={5}>
          <LogoIcon noText />
          <MenuList>
            {MENU_LIST.map(({ label, link }) => (
              <MenuItem key={label} onClick={() => navigateTo(link)}>
                <Typography color="secondary">{label}</Typography>
              </MenuItem>
            ))}
          </MenuList>
          <Button
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
        </Box>
      </SwipeableDrawer>
    </>
  );
};

export default HeaderMobile;
