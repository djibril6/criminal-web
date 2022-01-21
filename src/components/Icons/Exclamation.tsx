import { SvgIconProps, SvgIcon } from '@mui/material';

const ExclamationIcon: React.FC<SvgIconProps & { defaultColor?: string }> = ({
  defaultColor,
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    width={50}
    height={50}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="a">
        <path d="M-189-668h428v844h-428z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        fill={defaultColor || '#fc5959'}
        d="M50 25c0 13.8-11.2 25-25 25S0 38.8 0 25 11.2 0 25 0s25 11.2 25 25zm-25 5c-2.6 0-4.6 2.1-4.6 4.7 0 2.5 2 4.6 4.6 4.6 2.6 0 4.6-2.1 4.6-4.6 0-2.6-2-4.7-4.6-4.7zm-4.4-16.6.7 13.7c.1.6.6 1.1 1.3 1.1h4.8c.7 0 1.2-.5 1.3-1.1l.7-13.7c0-.7-.5-1.3-1.2-1.3h-6.4c-.7 0-1.2.6-1.2 1.3z"
      />
    </g>
  </SvgIcon>
);

export default ExclamationIcon;
