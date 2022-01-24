import { SvgIcon, SvgIconProps } from '@mui/material';

const CardA: React.FC<SvgIconProps & { defaultColor: string }> = ({
  defaultColor,
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 36"
    width={25}
    height={36}
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
    <use href="#a" x={2} y={6} />
    <path
      d="M5.6 35.3C7.9 23 10.4 13.9 16.9 3.9H3.7v4.3H.2V.1h19.3l2.3 3.8C15 11.4 8.7 35.6 9.8 35.3z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
