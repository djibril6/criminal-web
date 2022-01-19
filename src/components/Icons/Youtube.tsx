import { SvgIconProps, SvgIcon } from '@mui/material';

const YoutubeIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 46 38"
    width={46}
    height={38}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="cp1">
        <path d="m-1438-4652h1920v4958h-1920z" />
      </clipPath>
    </defs>
    <style>{'.s0{fill:#000000}'}</style>
    <g clipPath="url(#cp1)">
      <path
        fillRule="evenodd"
        className="s0"
        d="m45.7 19.5c0 0 0 8.3-0.9 12.2c-0.5 2.2-2 3.8-3.9 4.4c-3.5 1.1-17.5 1.1-17.5 1.1c0 0-14 0-17.5-1.1c-2-0.6-3.5-2.2-4-4.4c-0.9-3.9-0.9-12.2-0.9-12.2c0 0 0-8.2 0.9-12.2c0.5-2.1 2-3.9 4-4.4c3.5-1.1 17.5-1.1 17.5-1.1c0 0 14 0 17.5 1.1c1.9 0.5 3.4 2.3 3.9 4.4c0.9 4 0.9 12.2 0.9 12.2zm-15.2 0l-11.7-7.5v15z"
      />
    </g>
  </SvgIcon>
);

export default YoutubeIcon;
