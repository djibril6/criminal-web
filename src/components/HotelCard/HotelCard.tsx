import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useIsMobile } from 'common/hooks';
import { customTheme } from 'common/theme';
import { Timer } from 'components';
import {
  BedIcon,
  ShowerIcon,
  SwimmingPoolIcon,
  BathRoomIcon,
  FirePlaceIcon,
  StarIcon,
  HorlogeIcon,
  LeftArrowIcon,
  RightArrowIcon,
} from 'components/Icons';
import UserGroup from 'components/Icons/UserGroup';
import { useMemo } from 'react';

type stylesType = {
  ratio: number;
  isMobile: boolean;
};
const useStyles = makeStyles({
  container: {
    minHeight: (props: stylesType) => 255 * props.ratio,
    width: '100%',
    borderRadius: customTheme.borderRadius / 2,
    border: `1px solid ${customTheme.color.grey}`,
    position: 'relative',
    marginTop: (props: stylesType) => (props.isMobile ? 20 : 0),
    marginLeft: (props: stylesType) => (props.isMobile ? 0 : 0),
  },
  content: {
    width: '90%',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    marginTop: 15,
  },
  imagesContainer: {
    position: 'relative',
    width: '100%',
    height: (props: stylesType) => 169 * props.ratio,
    borderRadius: customTheme.borderRadius / 2,
    overflow: 'hidden',
    cursor: 'pointer',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: (props: stylesType) => 30 * props.ratio,
    borderTop: `1px solid ${customTheme.color.grey}`,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  body: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  oldPrice: {
    textDecoration: 'line-through',
    fontSize: 10,
  },
  disabledText: {
    color: customTheme.color.darkGrey,
  },
});

type HotelCardProps = {
  disabled?: boolean;
  image: string;
  title: string;
  region: string;
  price: string;
  oldPrice: string;
  guests: number;
  beds: number;
  shower: number;
  swimming: number;
  bathrooms: number;
  place: number;
  time?: number;
  note: string;
  sonDakika?: boolean;
};

const HotelCard: React.FC<HotelCardProps> = ({
  disabled,
  bathrooms,
  beds,
  guests,
  image,
  oldPrice,
  place,
  price,
  region,
  shower,
  swimming,
  title,
  note,
  time = 0,
  sonDakika,
}) => {
  const isMobile = useIsMobile();
  const ratio = customTheme.ratio;
  const styles = useStyles({ isMobile, ratio });
  const getImageStyle = useMemo(
    () => (disabled ? { filter: 'grayscale(100%)' } : {}),
    [disabled]
  );
  return (
    <Box className={styles.container}>
      <Box className={styles.content}>
        <Box className={styles.imagesContainer}>
          <img
            src={image}
            alt=""
            width="100%"
            height="100%"
            style={getImageStyle}
          />
          {/* Right Tags */}
          <Box
            position="absolute"
            top={5}
            width="100%"
            display="flex"
            justifyContent={sonDakika ? 'space-between' : 'flex-end'}
          >
            {sonDakika && (
              <Box
                padding="2px 7px 5px 7px"
                borderRadius={1.6}
                bgcolor={
                  disabled ? customTheme.color.darkGrey : customTheme.color.red
                }
                marginLeft={1}
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                color="#fff"
              >
                <HorlogeIcon
                  defaultColor="#fff"
                  style={{ width: 12, height: 12, marginRight: 3 }}
                />
                <Box>
                  <Box fontSize={12} fontWeight="bold">
                    <Timer duration={time} />
                  </Box>
                  <Box fontSize={8}>Saat Dakika Saniye</Box>
                </Box>
              </Box>
            )}

            {/* Left Tags */}
            <Box
              padding="2px 7px 2px 7px"
              borderRadius={1.6}
              bgcolor={
                disabled ? customTheme.color.darkGrey : customTheme.color.yellow
              }
              marginRight={1}
              fontWeight="bold"
              fontSize={12}
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              color={disabled ? '#fff' : '#000'}
            >
              <StarIcon
                defaultColor={disabled ? '#fff' : '#000'}
                style={{ width: 12, height: 12, marginRight: 3 }}
              />
              {note}
            </Box>
          </Box>

          {/* Left Arrow */}
          {!disabled && (
            <>
              <Box position="absolute" left={2} bottom="38%">
                <LeftArrowIcon
                  defaultColor="#FFF"
                  cursor="pointer"
                  style={{ width: 25, height: 25 }}
                />
              </Box>
              {/* Right Arrow */}
              <Box position="absolute" right={2} bottom="38%">
                <RightArrowIcon
                  defaultColor="#FFF"
                  cursor="pointer"
                  style={{ width: 25, height: 25 }}
                />
              </Box>
            </>
          )}

          {disabled && (
            <Box
              position="absolute"
              bottom="35%"
              width="100%"
              display="flex"
              justifyContent="center"
            >
              <Box
                padding={1}
                borderRadius={2}
                bgcolor={customTheme.color.darkGrey}
                color="#fff"
              >
                SÜRESİ DOLDU
              </Box>
            </Box>
          )}
        </Box>
        <Box className={styles.body}>
          <Box>
            <Box
              style={{
                fontSize: 6,
                marginBottom: -5,
                marginTop: 5,
                marginLeft: 9,
              }}
            >
              <b
                style={{
                  fontSize: 8 * ratio,
                }}
              >
                {title.toUpperCase()}
              </b>
            </Box>
            <Typography
              style={{
                fontSize: 8 * ratio,
                marginLeft: 9,
                color: customTheme.color.darkGrey,
              }}
            >
              {region}
            </Typography>
          </Box>
          <Box
            width="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box
              className={styles.oldPrice}
              color={disabled ? '' : customTheme.color.red}
              style={{ fontSize: 10, fontWeight: '600' }}
            >
              {oldPrice}
            </Box>
            <Box
              color={disabled ? '' : customTheme.color.red}
              style={{ fontSize: 14, fontWeight: 800 }}
            >
              {price}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.bottom}>
        <BottomItem
          Icon={UserGroup}
          value={guests}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />

        <BottomItem
          Icon={BedIcon}
          value={beds}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />

        <BottomItem
          Icon={ShowerIcon}
          value={shower}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />

        <BottomItem
          Icon={SwimmingPoolIcon}
          value={swimming}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />

        <BottomItem
          Icon={BathRoomIcon}
          value={bathrooms}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />

        <BottomItem
          Icon={FirePlaceIcon}
          value={place}
          isMobile={isMobile}
          ratio={ratio}
          disabled={disabled!}
        />
      </Box>
    </Box>
  );
};

type BottomItemType = {
  value: number;
  Icon: any;
  disabled: boolean;
  isMobile: boolean;
  ratio: number;
};
function BottomItem({
  value,
  Icon,
  disabled,
  isMobile,
  ratio,
}: BottomItemType) {
  const styles = useStyles({ isMobile, ratio });
  return (
    <Box display="flex" flexDirection="row">
      <Icon
        defaultColor={
          Boolean(disabled || value <= 0)
            ? customTheme.color.darkGrey
            : customTheme.color.blue
        }
        style={{ width: 20, height: 20 }}
      />
      <Typography
        className={Boolean(disabled || value <= 0) ? styles.disabledText : ''}
        color={Boolean(disabled || value <= 0) ? '' : 'primary'}
        style={{ fontSize: 10 }}
      >
        {value}
      </Typography>
    </Box>
  );
}

export default HotelCard;
