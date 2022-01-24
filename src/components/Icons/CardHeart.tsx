import { SvgIcon, SvgIconProps } from '@mui/material';

const CardA: React.FC<SvgIconProps> = (props) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 23"
    width={20}
    height={23}
    {...props}
  >
    <defs>
      <image
        width={20}
        height={23}
        id="a"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAXAQMAAAAx0/3gAAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAAMSURBVHicY2CgHQAAAFwAAWOhsYEAAAAASUVORK5CYII="
      />
    </defs>
    <use href="#a" />
    <path
      d="M9 22.9s-2.2-3.7-5.2-8C1.8 12.1.2 9 0 6.3-.2 3.2 1.5.2 4.4 0 7.3-.1 8.5 2.4 9 4.4c.5-2 1.7-4.5 4.6-4.4 2.9.2 4.6 3.2 4.4 6.3-.2 2.7-1.8 5.8-3.8 8.6-3 4.3-5.2 8-5.2 8z"
      fill="#d40000"
    />
  </SvgIcon>
);

export default CardA;
