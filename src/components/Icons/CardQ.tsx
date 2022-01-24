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
      d="M3.3 23.6h-3v-4h3s0-2.1.1-6c.2-8.1.4-9.3 2.7-11.6 4.7-4.4 12.4-.8 12.4 5.9-.2 9.3-.1 18.3-.4 19.5-.4 2.3-.5 2.4-.3 2.8.4.8 3.9 1.2 3.9 1v3.9c-2.7.2-3.8 0-5.9-1.6-1.4 1.3-5.4 2.6-8.7 1.1-2.5-1.2-4.3-4.2-3.8-11zm9.9 7c-1.4-2.1-3.9-4.9-6.2-6-.1 2.5.1 4.5.9 5.6 1.4 1.7 3.6 2.1 5.3.4zm1.2-23.1c-1.1-3.1-3.8-4.1-5.9-2.2C7.3 6.5 7.1 7.7 7 14.5v6c4 1.3 7.7 5.9 7.6 5.9l.1-12.8q.1-3.1-.3-6.1z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
