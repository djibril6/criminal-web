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
      d="M.5 35.2.6 33c.6-6.7 2-8.9 10.2-15.9 4-3.4 5.3-5.1 5.4-7.1.6-4.5-3.5-6-6.1-6-3.5 0-7.3 2.1-5.5 6.9L.8 12.1C0 7.5.8 3.3 4.4 1.4 9.2-1 15.3-.1 18.5 3.8c2 2.6 2.5 6.2 1.4 9-3.3 7.1-14.4 10.3-15.3 18.6h12.3v-4.6h3.6v8.5l-20-.1z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
