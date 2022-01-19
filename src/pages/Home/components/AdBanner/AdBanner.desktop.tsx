import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { useCallback, useEffect, useState } from 'react';
import './AdBanner.css';
import bungalovImg from 'statics/img/bungalov.png';

type stylesType = {
  ratio: number;
};
const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '100%',
    height: (props: stylesType) => props.ratio * 186,
    marginBottom: 70,
    marginTop: 0,
    position: 'relative',
  },
}));

type AdsType = {
  text: string;
  text2: string;
  img: string;
  key: number;
};

const Ads: AdsType[] = [
  {
    text: 'Buraya 1. banner gelecek',
    text2: 'Buraya 1. banner gelecek',
    img: bungalovImg,
    key: 1,
  },
  {
    text: 'Buraya 2. banner gelecek',
    text2: 'Buraya 2. banner gelecek',
    img: bungalovImg,
    key: 2,
  },
  {
    text: 'Buraya 3. banner gelecek',
    text2: 'Buraya 3. banner gelecek',
    img: bungalovImg,
    key: 3,
  },
  {
    text: 'Buraya 4. banner gelecek',
    text2: 'Buraya 4. banner gelecek',
    img: bungalovImg,
    key: 4,
  },
];

const size = 20; // Because in css width for .addItem is 80%

const AdBanner: React.FC = () => {
  const styles = useStyles({ ratio: customTheme.ratio });
  const [adList, setAdList] = useState(Ads);
  const [update, setUpdate] = useState(false);

  const sortFunc = (array: AdsType[]) => {
    return array.sort((a, b) => {
      if (a.key < b.key) return 1;
      return -1;
    });
  };

  useEffect(() => {
    setAdList(sortFunc(adList));
  }, [adList]);

  const handleClick = useCallback(
    (key: number) => {
      let temp = adList;
      const index = temp.findIndex((item) => item.key === key);
      const selected = temp.splice(index, 1);
      temp = sortFunc(temp);
      temp.push(selected[0]);
      setAdList(temp);
      setUpdate(!update);
    },
    [adList, update]
  );
  return (
    <Box className={styles.container}>
      {adList.map(({ text, text2, key, img }, index) => (
        <div
          key={key}
          className={'addItem ' + (index === Ads.length - 1 ? 'current' : '')}
          style={{
            borderRadius: customTheme.borderRadius,
            left:
              index === Ads.length - 1
                ? `${size}%`
                : `${index * (size / (Ads.length - 1))}%`,
            backgroundColor:
              index === Ads.length - 1
                ? customTheme.color.blueLight
                : customTheme.color.orange,
            cursor: index === Ads.length - 1 ? 'initial' : 'pointer',
            opacity: (index + 1) / Ads.length,
          }}
          onClick={() => handleClick(key)}
        >
          <Box width="100%" height="100%" position="relative">
            {Boolean(index === Ads.length - 1) && (
              <Box
                width="100%"
                height="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-center"
              >
                <Box
                  width="30%"
                  height="130%"
                  marginRight={5}
                  marginLeft={5}
                  bgcolor="#A4CDE3"
                  overflow="hidden"
                  style={{
                    borderBottomLeftRadius: '100%',
                    borderTopLeftRadius: '60%',
                    borderBottomRightRadius: '70%',
                    borderTopRightRadius: '80%',
                    position: 'relative',
                  }}
                >
                  <Box
                    width={100}
                    height={100}
                    bgcolor={customTheme.color.orange}
                    borderRadius={50}
                    position="absolute"
                    right={-2}
                    zIndex={0}
                  />
                  <Box
                    width={100}
                    height={100}
                    bgcolor="#58C27D"
                    borderRadius={50}
                    position="absolute"
                    left={-2}
                    bottom={40}
                    zIndex={0}
                  />
                  <Box
                    width={100}
                    height={100}
                    bgcolor={customTheme.color.blueLight}
                    borderRadius={50}
                    position="absolute"
                    right={-20}
                    bottom={40}
                    zIndex={0}
                  />
                  <img
                    width="70%"
                    height="85%"
                    alt=""
                    src={img}
                    style={{
                      position: 'absolute',
                      bottom: -5,
                      left: '12%',
                      borderRadius: 20,
                      border: '5px solid black',
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body1"
                    style={{ fontSize: 25, marginBottom: 10 }}
                  >
                    {text}
                  </Typography>
                  <Typography variant="body1" style={{ fontSize: 25 }}>
                    <b>{text2}</b>
                  </Typography>
                </Box>
              </Box>
            )}
            {!Boolean(index === Ads.length - 1) && (
              <Box
                position="absolute"
                left={0}
                top={0}
                height="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                width={`${size / (Ads.length - 1)}%`}
              >
                <Typography
                  variant="h1"
                  style={{
                    fontSize: 30,
                    color: '#fff',
                    transform: 'rotate(-90deg)',
                  }}
                >
                  0{key}
                </Typography>
              </Box>
            )}
          </Box>
        </div>
      ))}
    </Box>
  );
};

export default AdBanner;
