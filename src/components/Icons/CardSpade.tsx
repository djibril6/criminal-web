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
      d="M18 14.5c0 1.5-.8 4.2-3.4 4.7-1.8.3-4.1-1.1-4.1-3.9 0-.5-.6-.5-.6.2 0 2.3.7 4.8 1.9 6.9H6.2c1.2-2.1 1.9-4.6 1.9-6.9 0-.7-.6-.7-.6-.2 0 2.8-2.3 4.2-4.1 3.9C.8 18.7 0 16 0 14.5.1 9.7 4.7 6.1 9 0c4.3 6.1 8.9 9.7 9 14.5z"
      fill="#fff"
    />
  </SvgIcon>
);

export default CardA;
