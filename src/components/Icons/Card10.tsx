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
      d="M.7 35.3V.1h3.4v35.2zM16.1.1c3.3 0 6 3 6 6.7v21.8c0 3.7-2.7 6.7-6 6.7h-1.9c-3.3 0-5.9-3-5.9-6.7V6.8c0-3.7 2.6-6.7 5.9-6.7zm-4.4 6.7v22c0 1.9 1.5 3.4 3.5 3.4 1.9 0 3.5-1.5 3.5-3.4v-22c0-1.9-1.6-3.4-3.5-3.4-2 0-3.5 1.5-3.5 3.4z"
      fill={defaultColor}
    />
  </SvgIcon>
);

export default CardA;
