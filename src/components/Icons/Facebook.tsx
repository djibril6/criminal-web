import { SvgIconProps, SvgIcon } from '@mui/material';

const FacebookIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 38 38"
    width={38}
    height={38}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="a">
        <path d="M-1494-4652H426V306h-1920z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="M37.1 5.6v27.8c0 2.1-1.7 3.8-3.8 3.8H22.5v-12h4.6l.8-5.7h-5.4v-3.7c0-1.5.8-3 3.2-3h2.5V7.9s-2.3-.3-4.4-.3c-4.5 0-7.4 2.7-7.4 7.6v4.3h-5v5.7h5v12H5.5c-2.1 0-3.8-1.7-3.8-3.8V5.6c0-2.1 1.7-3.8 3.8-3.8h27.8c2.1 0 3.8 1.7 3.8 3.8z"
        style={{
          fill: '#000',
        }}
      />
    </g>
  </SvgIcon>
);

export default FacebookIcon;
