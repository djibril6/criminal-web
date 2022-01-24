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
      d="M10 0c4.4.1 6.3 5 3.1 8.8-.5.6-.5.9.3.4 2.2-1.5 6.4-.5 6.6 3.9.3 5.5-7.4 7.1-8.8 1.2-.1-.6-.6-.6-.5.3.1 2.4.9 4.6 1.9 6.7H7.4c1-2.1 1.8-4.3 1.9-6.7.1-.9-.4-.9-.5-.3-1.4 5.9-9.1 4.3-8.8-1.2.2-4.4 4.4-5.4 6.6-3.9.8.5.8.2.3-.4C3.7 5 5.6.1 10 0z"
      fill="#fff"
    />
  </SvgIcon>
);

export default CardA;
