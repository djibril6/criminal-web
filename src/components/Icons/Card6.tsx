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
      fillRule="evenodd"
      d="M.6 24.5c-.5-3-.4-10.7-.1-12.9C1.6 4.6 4.3 1.4 8.7.4c4.3-1 10.4.1 11.7 5.9l-3.6.1c-2-3.9-6.9-2.9-9.7-1.2-2.2 1.4-3.2 7.1-2.8 7.4 0 0 4.2-3.1 7.5-2.9 7.1.8 10 6.9 9.8 12.7-.3 6.9-2.5 12.5-10 12.9C4.5 35 1.3 31.1.6 24.5zm17.5-1.9c.1-4.8-2.1-8.4-6.3-8.8-4.1-.4-8.3 3.6-8 8.5.3 5 2.2 9.1 7.2 9.1 5.4 0 7.1-5.4 7.1-8.8z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
