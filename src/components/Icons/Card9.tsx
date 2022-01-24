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
      d="m.4 28.5 3.2-1c1.2 3.2 3.7 4.2 6.3 4 4.7-.4 6.2-5.6 6.6-10.2-1.9 1.9-4.6 2.9-6.9 2.8C2.2 23.7.3 17.7.2 11.5 0 6.3 2.2 2.5 5.9.7c1.9-.9 6.5-.9 8.4.2 4.6 2.4 6.3 6.5 6 16.4 0 8.2-1.7 17.7-10.5 17.9-5 .7-8.9-3.2-9.4-6.7zm12.7-8.9c1.5-1 2.3-1.9 3-3.2.6-1.2.8-1.7.6-4-.4-5.9-3.5-9.3-8-8.6-2.5.4-3.9 1.8-4.7 4.4-1.4 4.8.4 10.4 3.9 11.7 1.5.6 3.9.4 5.2-.3z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
