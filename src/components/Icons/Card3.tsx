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
      d="m.2 27.6 2.7-2c2.3 3.8 5 6.3 9 5.9 6-.4 8.5-6.8 7.3-11.5-1.3-4.3-6.3-6.4-10.2-4.1-1 .5-1.9 1-2.1 1-.4 0-1.3-1.9-1.2-2.5 2.7-3.9 9.1-10.7 9.1-10.7H4.7v4.6H.8V.1h19.8v2.8s-5.3 5.5-7 8.5c4.3.1 7.8 2.9 9 7.2.7 2.3.4 7.5-.5 9.7-1.6 3.7-6 6.8-10 7-6.6.4-10.2-4.3-11.9-7.7z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
