import { Box, SvgIconProps, SvgIcon } from '@mui/material';
import { makeStyles } from '@mui/styles';

const WIDTH = 46 * 2;

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoIcon: {
    width: WIDTH,
    height: 13 * 2,
  },
  textIcon: {
    width: WIDTH,
    height: 13,
    marginTop: 5,
  },
  text: {
    fontSize: 60,
    color: '#000000',
  },
});

const LogoIcon: React.FC<
  SvgIconProps & { width?: number; height?: number; noText?: boolean }
> = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container}>
      <SvgIcon
        className={styles.logoIcon}
        style={{ width: props.width || 46 * 2, height: props.height || 13 * 2 }}
        {...props}
        width="46"
        height="13"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="46 11 46 13"
      >
        <svg
          width="46"
          height="13"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="46 11 46 13"
          x="46"
          y="11"
        >
          <svg
            width="9"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0.723 0 7.554 13"
            fill="#f7901e"
            x="46"
            y="11"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="9"
              height="13"
              viewBox="0.705 0 7.386 12.712"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M5.09 10.737a2.414 2.414 0 0 1-2.41-2.41V.986a.987.987 0 1 0-1.975 0v7.34a4.39 4.39 0 0 0 4.386 4.385c1.16 0 2.215-.453 3-1.191a4.955 4.955 0 0 1-.987-1.87 2.411 2.411 0 0 1-2.013 1.086z"
              />
            </svg>
          </svg>
          <svg
            width="14"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0.282 14 9.435"
            fill="#f7901e"
            x="49"
            y="14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14"
              height="10"
              viewBox="0.259 0.94 13.015 8.772"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M12.286.94a.987.987 0 0 0-.987.988v3.398a2.414 2.414 0 0 1-2.411 2.411 2.414 2.414 0 0 1-2.411-2.41A4.39 4.39 0 0 0 2.09.94c-.654 0-1.274.145-1.832.403v2.418a2.407 2.407 0 0 1 1.832-.846 2.414 2.414 0 0 1 2.411 2.411 4.39 4.39 0 0 0 4.386 4.386 4.39 4.39 0 0 0 4.386-4.386V1.928a.987.987 0 0 0-.988-.988z"
              />
            </svg>
          </svg>
          <svg
            width="9"
            height="13"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0.723 0 7.554 13"
            fill="#e44200"
            x="75"
            y="11"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="9"
              height="13"
              viewBox="0.931 0 7.386 12.712"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M5.317 10.737a2.414 2.414 0 0 1-2.411-2.41V.986a.987.987 0 1 0-1.975 0v7.34a4.39 4.39 0 0 0 4.386 4.385 4.37 4.37 0 0 0 3-1.191 4.955 4.955 0 0 1-.987-1.87 2.411 2.411 0 0 1-2.013 1.086z"
              />
            </svg>
          </svg>
          <svg
            width="14"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0.282 14 9.435"
            fill="#e44200"
            x="78"
            y="14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="14"
              height="10"
              viewBox="0.485 0.94 13.015 8.772"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M12.513.94a.987.987 0 0 0-.988.988v3.398a2.414 2.414 0 0 1-2.411 2.411 2.414 2.414 0 0 1-2.411-2.41A4.39 4.39 0 0 0 2.317.94c-.654 0-1.274.145-1.832.403v2.418a2.406 2.406 0 0 1 1.832-.846 2.414 2.414 0 0 1 2.411 2.411 4.39 4.39 0 0 0 4.386 4.386A4.39 4.39 0 0 0 13.5 5.326V1.928a.987.987 0 0 0-.987-.988z"
              />
            </svg>
          </svg>
          <svg
            width="3"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0.375 0 2.251 10"
            fill="#2eb1cc"
            x="72"
            y="14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="3"
              height="10"
              viewBox="0.798 0.94 1.974 8.772"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M1.786.94a.987.987 0 0 0-.988.988v6.797a.987.987 0 0 0 1.975 0V1.928A.987.987 0 0 0 1.786.94z"
              />
            </svg>
          </svg>
          <svg
            width="9"
            height="10"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0.464 9 9.071"
            fill="#2eb1cc"
            x="63"
            y="14"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="9"
              height="10"
              viewBox="0.046 0.871 8.772 8.841"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M8.272 1.045a.987.987 0 0 0-1.324.441L4.436 6.508 1.918 1.42a.987.987 0 1 0-1.77.876l3.4 6.867a.988.988 0 0 0 .882.55h.002a.987.987 0 0 0 .883-.547L8.714 2.37a.987.987 0 0 0-.442-1.324z"
              />
            </svg>
          </svg>
          <svg
            width="3"
            height="3"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            fill="#2eb1cc"
            x="72"
            y="12"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3"
              height="3"
              viewBox="0.798 0.194 1.974 1.975"
            >
              <path
                paintOrder="stroke fill markers"
                fillRule="evenodd"
                d="M1.786.194a.987.987 0 1 0 0 1.974.987.987 0 0 0 0-1.974z"
              />
            </svg>
          </svg>
        </svg>
      </SvgIcon>
      {!props.noText && (
        <SvgIcon
          className={styles.textIcon}
          viewBox="0 0 240 80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: props.width || 46 * 2, height: props.height || 13 }}
        >
          <text x="-70" y="50" className={styles.text} fill="#000">
            Yeni Nesil Tatil
          </text>
        </SvgIcon>
      )}
    </Box>
  );
};

export default LogoIcon;
