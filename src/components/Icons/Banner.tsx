import { SvgIconProps, SvgIcon } from '@mui/material';

const BannerIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1712 578"
    width={1712}
    height={578}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="m-104-142h1920v4958h-1920z" />
      </clipPath>
    </defs>
    <style />
    <g clipPath="url(#cp1)">
      <path d="m1 21c0-11 9-20 20-20h1671c11 0 20 9 20 20v536c0 11-9 20-20 20h-1671c-11 0-20-9-20-20z" />
    </g>
  </SvgIcon>
);

export default BannerIcon;
