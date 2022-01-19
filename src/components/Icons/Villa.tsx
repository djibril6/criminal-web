import { SvgIconProps, SvgIcon } from '@mui/material';

const Vi: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="19"
      height="19"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="211 248 19 19"
    >
      <svg
        width="4"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.312 0 3.376 15"
        fill={props.defaultColor || '#30b1cc'}
        x="226"
        y="252"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="4"
          height="15"
          viewBox="0.833 0.924 3.081 13.69"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M2.373.924c-.85 0-1.54.69-1.54 1.54v10.609a1.54 1.54 0 1 0 3.08 0V2.465c0-.851-.689-1.54-1.54-1.54z"
          />
        </svg>
      </svg>
      <svg
        width="19"
        height="19"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="211 248 19 19"
        x="211"
        y="248"
      >
        <svg
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0.059 0 14.882 15"
          fill={props.defaultColor || '#30b1cc'}
          x="211"
          y="252"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="15"
            height="15"
            viewBox="0.612 0.815 13.69 13.799"
          >
            <path
              paintOrder="stroke fill markers"
              fillRule="evenodd"
              d="M13.45 1.087a1.54 1.54 0 0 0-2.067.689L7.464 9.614l-3.93-7.941A1.54 1.54 0 1 0 .772 3.04l5.304 10.716c.26.524.793.857 1.378.858h.003a1.54 1.54 0 0 0 1.378-.852L14.14 3.154a1.54 1.54 0 0 0-.69-2.067z"
            />
          </svg>
        </svg>
        <svg
          width="4"
          height="4"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill={props.defaultColor || '#30b1cc'}
          x="226"
          y="248"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4"
            height="4"
            viewBox="0.833 0.638 3.081 3.082"
          >
            <path
              paintOrder="stroke fill markers"
              fillRule="evenodd"
              d="M2.373.638a1.54 1.54 0 1 0 0 3.081 1.54 1.54 0 0 0 0-3.081z"
            />
          </svg>
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default Vi;
