import { SvgIconProps, SvgIcon } from '@mui/material';

const Star: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="6"
      height="6"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0.147 6 5.706"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="6"
        height="6"
        viewBox="0.939 0.625 4.621 4.395"
      >
        <path
          paintOrder="stroke fill markers"
          fill={props.defaultColor || '#000'}
          fillRule="evenodd"
          d="M3.25.625l.714 1.447 1.596.232L4.405 3.43l.273 1.59-1.428-.75-1.428.75.273-1.59L.939 2.304l1.597-.232L3.25.625z"
        />
      </svg>
    </SvgIcon>
  );
};

export default Star;
