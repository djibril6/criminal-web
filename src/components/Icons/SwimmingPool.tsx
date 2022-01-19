import { SvgIconProps, SvgIcon } from '@mui/material';

const SwimmingPool: React.FC<SvgIconProps & { defaultColor?: string }> = (
  props
) => {
  return (
    <SvgIcon
      {...props}
      width="9"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="292 1058 9 6"
    >
      <svg
        width="9"
        height="5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.259 0 8.481 5"
        fill={props.defaultColor || '#30b1cc'}
        x="292"
        y="1058"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="9"
          height="5"
          viewBox="0.098 0.083 8.175 4.82"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M.375 4.903c.523 0 .8-.097 1.043-.181.232-.081.432-.15.862-.15s.63.069.863.15c.243.084.52.18 1.043.18.523 0 .8-.096 1.044-.18.232-.081.432-.15.862-.15s.63.069.862.15c.244.084.52.18 1.043.18a.276.276 0 1 0 0-.552c-.43 0-.63-.07-.862-.15a2.775 2.775 0 0 0-1.043-.181c-.095 0-.182.003-.263.009V1.316a.68.68 0 0 1 1.36 0 .276.276 0 1 0 .553 0c0-.68-.553-1.233-1.232-1.233-.68 0-1.233.553-1.233 1.233v1.046H3.095V1.316a.68.68 0 0 1 1.36 0 .276.276 0 1 0 .553 0 1.234 1.234 0 0 0-2.465 0v2.712a3.72 3.72 0 0 0-.263-.01c-.523 0-.8.097-1.043.182-.232.08-.433.15-.862.15a.276.276 0 0 0 0 .553zm4.902-1.989v.359H3.095v-.359h2.182zm-2.182.912h2.182v.299c-.083.024-.157.05-.229.075-.232.08-.432.15-.862.15s-.63-.07-.862-.15a4.737 4.737 0 0 0-.229-.075v-.3z"
          />
        </svg>
      </svg>
      <svg
        width="9"
        height="2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0.514 9 0.973"
        fill={props.defaultColor || '#30b1cc'}
        x="292"
        y="1062"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="2"
          viewBox="0.098 0.93 8.175 0.884"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M7.997 1.262c-.43 0-.63-.07-.862-.15A2.774 2.774 0 0 0 6.092.93c-.523 0-.8.096-1.044.181-.232.08-.432.15-.862.15s-.63-.07-.862-.15A2.774 2.774 0 0 0 2.28.931c-.523 0-.8.095-1.043.18-.232.08-.433.15-.862.15a.276.276 0 0 0 0 .553c.523 0 .8-.096 1.043-.18.232-.082.432-.151.862-.151s.63.07.863.15c.243.085.52.181 1.043.181.523 0 .8-.096 1.044-.18.232-.082.432-.151.862-.151s.63.07.862.15c.244.085.52.181 1.043.181a.276.276 0 1 0 0-.552z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default SwimmingPool;
