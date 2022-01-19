import { SvgIconProps, SvgIcon } from '@mui/material';

const LeftArrowIcon: React.FC<SvgIconProps & { defaultColor?: string }> = (
  props
) => {
  return (
    <SvgIcon
      {...props}
      width="9"
      height="9"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="354 540 9 9"
    >
      <svg
        width="9"
        height="9"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={props.defaultColor || '#30b1cc'}
        x="354"
        y="540"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="9"
          height="9"
          viewBox="0.547 0.154 8.191 8.191"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M4.642.154a4.096 4.096 0 1 0 0 8.192 4.096 4.096 0 0 0 0-8.192zm0 .546A3.55 3.55 0 1 1 4.643 7.8a3.55 3.55 0 0 1 0-7.099z"
          />
        </svg>
      </svg>
      <svg
        width="3"
        height="5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.071 0 2.857 5"
        fill={props.defaultColor || '#30b1cc'}
        x="357"
        y="542"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="5"
          viewBox="0.55 0.339 2.184 3.823"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M2.655 3.695L1.21 2.25 2.655.805a.273.273 0 0 0-.386-.386L.63 2.057a.273.273 0 0 0 0 .386L2.27 4.081a.273.273 0 0 0 .386-.386z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default LeftArrowIcon;
