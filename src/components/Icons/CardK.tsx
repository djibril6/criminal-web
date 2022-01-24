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
      d="M12.6 31.2h3.5l-5.2-13-4 5.5v7.5h2.8v3.9H-.1v-3.9h3.2V3.3H-.1V-.1h10v3.5H7.1V17l8.7-13.7h-3.1V-.1h10.6v3.4h-2.8l-7.2 11.2 7.1 16.7h3.1v3.9H12.6v-3.9z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
