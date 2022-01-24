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
      d="M21.7.1v3.7h-3.3s-.1 3.5-.1 11.9c-.1 12.7.1 12.8-1 14.9-1.8 3.7-6.8 5.5-11.1 4.3-4.2-1-6-3.6-6-9 0-1.2-.1-2.2-.1-2.2H4c0 2-.2 3.5.6 5.6 1.4 3.4 8.4 3.4 9.6-1.4.5-2.1.3-5.7.3-13 0-7.6-.1-11.1-.1-11.1h-3.6V.1z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
