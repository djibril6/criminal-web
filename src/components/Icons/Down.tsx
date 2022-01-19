import { SvgIconProps, SvgIcon } from '@mui/material';

const DownIcon: React.FC<SvgIconProps & { defaultColor?: string }> = (
  props
) => {
  return (
    <SvgIcon
      {...props}
      width="4"
      height="3"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0.357 4 2.286"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="4"
        height="3"
        viewBox="0.174 0.875 3.651 2.086"
      >
        <path
          paintOrder="stroke fill markers"
          fillRule="evenodd"
          fill={props.defaultColor || '#30b1cc'}
          d="M3.38.951L2 2.331.62.952a.26.26 0 1 0-.37.37l1.566 1.564a.26.26 0 0 0 .368 0L3.75 1.32A.26.26 0 1 0 3.38.951z"
        />
      </svg>
    </SvgIcon>
  );
};

export default DownIcon;
