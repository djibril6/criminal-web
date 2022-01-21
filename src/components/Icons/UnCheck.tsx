import { SvgIconProps, SvgIcon } from '@mui/material';

const UnCheckIcon: React.FC<SvgIconProps & { defaultColor?: string }> = ({
  defaultColor,
  ...props
}) => {
  return (
    <SvgIcon
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 78 78"
      width="78"
      height="78"
      {...props}
    >
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="a">
          <path d="M-297-691h428v844h-428z" />
        </clipPath>
      </defs>
      <g clipPath="url(#a)">
        <path
          fillRule="evenodd"
          d="M78 39c0 21.5-17.5 39-39 39S0 60.5 0 39 17.5 0 39 0s39 17.5 39 39zm-7.5 0C70.5 21.6 56.4 7.5 39 7.5S7.5 21.6 7.5 39 21.6 70.5 39 70.5 70.5 56.4 70.5 39zM55 29.2 45.2 39l9.8 9.8c.7.7.7 1.9 0 2.7L51.5 55c-.8.7-2 .7-2.7 0L39 45.2 29.2 55c-.7.7-1.9.7-2.7 0L23 51.5c-.7-.8-.7-2 0-2.7l9.8-9.8-9.8-9.8c-.7-.7-.7-1.9 0-2.7l3.5-3.5c.8-.7 2-.7 2.7 0l9.8 9.8 9.8-9.8c.7-.7 1.9-.7 2.7 0l3.5 3.5c.7.8.7 2 0 2.7z"
          fill={defaultColor || '#ccc'}
        />
      </g>
    </SvgIcon>
  );
};

export default UnCheckIcon;
