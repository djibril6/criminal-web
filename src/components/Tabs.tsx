import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { ECategory } from 'pages/Home/types';
import { useCallback } from 'react';

export const tabHeight = 39;

const useStyles = makeStyles((theme: Theme) => ({
  tabsContent: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('tablet')]: {
      position: (props: { mobileFixed: boolean }) =>
        props.mobileFixed ? 'fixed' : 'flex',
      left: 0,
      top: 0,
      zIndex: 1,
      width: '100%',
    },
    [theme.breakpoints.up('laptop')]: {
      width: '30%',
      margin: 'auto',
      borderRadius: 10,
    },
    backgroundColor: theme.palette.background.default,
    height: tabHeight,
  },
  tab: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: 13,
    fontWeight: 900,
    color: theme.palette.primary.main,
    [theme.breakpoints.up('laptop')]: {
      border: `1px solid ${theme.palette.primary.main}`,
    },
  },
  tabSelected: {
    color: '#fff',
    backgroundColor: theme.palette.primary.main,
  },
}));

type TapsProps = {
  selectedTab: ECategory;
  onTabSelected: (category: ECategory) => void;
  mobileFixed?: boolean;
};
const Tabs: React.FC<TapsProps> = ({
  selectedTab,
  mobileFixed = false,
  onTabSelected,
}) => {
  const styles = useStyles({ mobileFixed: mobileFixed });

  const onSelected = useCallback(
    (select: ECategory) => () => {
      onTabSelected(select);
    },
    [onTabSelected]
  );

  return (
    <Box className={styles.tabsContent}>
      <Box
        className={classNames(
          styles.tab,
          selectedTab === ECategory.HUMANITY ? styles.tabSelected : ''
        )}
        onClick={onSelected(ECategory.HUMANITY)}
      >
        <span style={{ textAlign: 'center' }}>Crime against Humanity</span>
      </Box>
      <Box
        className={classNames(
          styles.tab,
          selectedTab === ECategory.NATURE ? styles.tabSelected : ''
        )}
        onClick={onSelected(ECategory.NATURE)}
      >
        <span style={{ textAlign: 'center' }}>Crime against Nature</span>
      </Box>
    </Box>
  );
};

export default Tabs;
