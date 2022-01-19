import { makeStyles } from '@mui/styles';
import { Box, Theme, Typography } from '@mui/material';
import { customTheme } from 'common/theme';
import { useEffect, useRef } from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    height: (props: any) => props.ratio * 294,
    width: '100%',
    margin: 'auto',
    paddingTop: 10,
    borderRadius: customTheme.borderRadius,
    backgroundColor: '#2eb2cc28',
    marginBottom: 150,
  },
  subContainer: {
    width: '96%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 150,
    marginTop: 10,
    backgroundColor: theme.palette.background.default,
    padding: 15,
    borderRadius: 'inherit',
  },
  hotelCards: {
    width: '100%',
    display: 'grid',
    [theme.breakpoints.down('tablet')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.up('tablet')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.up('laptop')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    gap: 30,
  },
  cardsHeader: {
    borderBottom: `1px solid ${customTheme.color.grey}`,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    margin: 'auto',
    marginBottom: 20,
    paddingBottom: 10,
  },
}));

type HomePageSectionProps = {
  children: React.ReactNode;
  headerEnd?: JSX.Element;
  color?: 'primary' | 'secondary';
  title: string;
};
const HomePageSection: React.FC<HomePageSectionProps> = ({
  children,
  color = 'primary',
  headerEnd = <></>,
  title,
}) => {
  const styles = useStyles({ ratio: customTheme.ratio });
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (box.current) {
      box.current.style.backgroundColor =
        color === 'primary' ? '#2eb2cc28' : '#f7921e31';
    }
  }, [color]);
  return (
    <Box className={styles.container} ref={box}>
      <Box className={styles.subContainer}>
        <Box className={styles.cardsHeader}>
          <Typography variant="h1" color={color}>
            {title}
          </Typography>
          {headerEnd}
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default HomePageSection;
