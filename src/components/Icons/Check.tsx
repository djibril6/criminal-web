import { SvgIconProps, SvgIcon } from '@mui/material';

const CheckIcon: React.FC<SvgIconProps & { defaultColor?: string }> = ({
  defaultColor,
  ...props
}) => {
  return (
    <SvgIcon
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 79 79"
      width="79"
      height="79"
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M-54-691h428v844H-54z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          d="M78 39c0 21.5-17.5 39-39 39S0 60.5 0 39 17.5 0 39 0s39 17.5 39 39zM7.5 39c0 17.4 14.1 31.5 31.5 31.5S70.5 56.4 70.5 39 56.4 7.5 39 7.5 7.5 21.6 7.5 39zM61 30.7 33.9 57.6c-.7.8-1.9.8-2.7 0L17 43.2c-.8-.7-.8-1.9 0-2.6l3.5-3.6c.8-.7 2-.7 2.7 0l9.4 9.5 22.2-22c.8-.8 2-.8 2.7 0L61 28c.8.8.8 2 0 2.7z"
          fill={defaultColor || '#59fc69'}
        />
      </g>
    </SvgIcon>
  );
};

export default CheckIcon;
