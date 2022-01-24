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
      d="M8.5 23C6 18.9 3.3 14.9 0 11.5 3.3 8.1 6 4.1 8.5 0 11 4.1 13.7 8.1 17 11.5c-3.3 3.4-6 7.4-8.5 11.5z"
      fill="#d40000"
    />
  </SvgIcon>
);

export default CardA;
