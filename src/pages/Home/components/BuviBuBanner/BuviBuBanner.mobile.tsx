import { makeStyles } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import BuviBuSingleCard from './BuviBuSingleCard';
import { customTheme } from 'common/theme';
import bungalovImg from 'statics/img/bungalov.png';
import villaImg from 'statics/img/villalar.png';
import butikImg from 'statics/img/yilbasi-otelleri.png';
import { BungalovIcon, ButikIcon, VillaIcon } from 'components/Icons';
import { GridCarousel } from 'components';
import { useState } from 'react';

const useStyles = makeStyles({
  containerRoot: {
    width: '100%',
    paddingTop: 10,
    marginTop: 10,
  },

  header: {
    width: '100%',
    boxShadow: `0px 10px 10px -10px ${customTheme.color.shadowColor}`,
    padding: 5,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 18,
  },
});

const TITLES = [
  {
    label: 'Bungalov',
    key: 0,
    icon: <BungalovIcon style={{ width: 25, height: 25 }} />,
    color: 'secondary',
  },

  {
    label: 'Villa',
    key: 1,
    icon: <VillaIcon style={{ width: 25, height: 25 }} />,
    color: 'primary',
  },

  {
    label: 'Butik Otel',
    key: 2,
    icon: <ButikIcon style={{ width: 25, height: 25 }} />,
    color: 'error',
  },
];

const BuviBuBannerDesktop: React.FC = () => {
  const styles = useStyles();

  const [current, setCurrent] = useState(0);

  return (
    <Box className={styles.containerRoot}>
      <Box className={styles.header}>
        {TITLES.map(({ label, key, icon, color }) => (
          <Box
            key={key}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            padding={1}
            borderRadius={10}
            boxShadow={
              current === key
                ? `0px 0px 15px 1px ${customTheme.color.shadowColor}`
                : ''
            }
          >
            {icon}

            <Typography
              variant="h1"
              color={color}
              style={{
                fontSize: 15,

                borderLeft: `2px solid ${customTheme.color.grey}`,

                paddingLeft: 5,

                marginLeft: 5,

                opacity: current === key ? 1 : 0.4,
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      <GridCarousel
        columns={1}
        transitionDelay={3000}
        arrowSize="0px"
        paginateCurrentColor={customTheme.color.orange}
        onChange={setCurrent}
      >
        <GridCarousel.Item>
          <BuviBuSingleCard
            noTitle
            title="Bungalov"
            color="secondary"
            image={bungalovImg}
            link=""
            icon={<BungalovIcon style={{ width: 40, height: 40 }} />}
          />
        </GridCarousel.Item>

        <GridCarousel.Item>
          <BuviBuSingleCard
            noTitle
            title="Villa"
            color="primary"
            image={villaImg}
            link=""
            icon={<VillaIcon style={{ width: 40, height: 40 }} />}
          />
        </GridCarousel.Item>

        <GridCarousel.Item>
          <BuviBuSingleCard
            noTitle
            title="Butik Otel"
            color="error"
            image={butikImg}
            link=""
            icon={<ButikIcon style={{ width: 40, height: 40 }} />}
          />
        </GridCarousel.Item>
      </GridCarousel>
    </Box>
  );
};

export default BuviBuBannerDesktop;
