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
      d="m.7 26.2 3.5-.1c.6 2.2 2.1 4.3 4.1 4.9 5.5 1.4 9.1-1.8 10.3-5.5 1.5-4.4 0-10.7-3.9-12.9-3.1-1.8-7.9-.3-10.1 3.6l-2.4-1.5L3.5.1h15.8v3.4H6.5l-.2 6.1c2.8-1.9 7-1.9 9.8-.5 5.2 2.5 7.6 8.3 6.6 15.1-1.4 6.7-4.5 10.5-11.5 11.1C3.4 35.4.7 29.9.7 26.2z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
