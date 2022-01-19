import { SvgIconProps, SvgIcon } from '@mui/material';

const Shower: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="6"
      height="8"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0.071 6 7.858"
      fill={props.defaultColor || '#30b1cc'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="8"
        viewBox="0.758 0.904 4.879 6.389"
      >
        <path
          fill={props.defaultColor || '#30b1cc'}
          paintOrder="stroke fill markers"
          fillRule="evenodd"
          d="M3.589 2.403c-.728.132-1.279.646-1.314 1.27a.06.06 0 0 0 .016.045.06.06 0 0 0 .044.019h3.242a.06.06 0 0 0 .06-.064C5.6 3.031 5.02 2.506 4.26 2.393a1.764 1.764 0 0 0-1.74-1.49C1.55.904.758 1.696.758 2.668v4.297a.329.329 0 0 0 .657 0V2.667c0-.61.497-1.106 1.106-1.106.515 0 .945.355 1.068.842z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Shower;
