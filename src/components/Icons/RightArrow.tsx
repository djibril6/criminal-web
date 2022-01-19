import { SvgIconProps, SvgIcon } from '@mui/material';

const RightArrowIcon: React.FC<SvgIconProps & { defaultColor?: string }> = (
  props
) => {
  return (
    <SvgIcon
      {...props}
      width="11"
      height="11"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="427 469 11 11"
    >
      <svg
        width="11"
        height="11"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={props.defaultColor || '#30b1cc'}
        x="427"
        y="469"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="11"
          height="11"
          viewBox="0.413 0.435 10.315 10.315"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M5.57 10.75a5.158 5.158 0 1 0 0-10.315 5.158 5.158 0 0 0 0 10.315zm0-.688a4.47 4.47 0 1 1 0-8.94 4.47 4.47 0 0 1 0 8.94z"
          />
        </svg>
      </svg>
      <svg
        width="3"
        height="5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.071 0 2.857 5"
        fill={props.defaultColor || '#30b1cc'}
        x="431"
        y="472"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3"
          height="5"
          viewBox="0.195 0.185 2.751 4.814"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M.296.772l1.82 1.82-1.82 1.82a.344.344 0 1 0 .486.487l2.063-2.064a.344.344 0 0 0 0-.486L.782.286a.344.344 0 0 0-.486.486z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default RightArrowIcon;
