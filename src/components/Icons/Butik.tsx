import { SvgIconProps, SvgIcon } from '@mui/material';

const Butik: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="21"
      height="17"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="344 250 21 17"
    >
      <svg
        width="10"
        height="17"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.061 0 9.878 17"
        fill={props.defaultColor || '#e44200'}
        x="344"
        y="250"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="10"
          height="17"
          viewBox="0.479 0.25 9.508 16.364"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M6.125 14.072a3.108 3.108 0 0 1-3.104-3.104V1.521a1.271 1.271 0 0 0-2.542 0v9.447a5.652 5.652 0 0 0 5.646 5.646 5.623 5.623 0 0 0 3.863-1.534 6.38 6.38 0 0 1-1.271-2.407 3.103 3.103 0 0 1-2.592 1.399z"
          />
        </svg>
      </svg>
      <svg
        width="18"
        height="12"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.097 0 17.806 12"
        fill={props.defaultColor || '#e44200'}
        x="347"
        y="255"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="12"
          viewBox="0.767 0.322 16.754 11.291"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M16.25.322a1.27 1.27 0 0 0-1.271 1.271v4.375a3.108 3.108 0 0 1-3.104 3.104A3.108 3.108 0 0 1 8.77 5.968 5.652 5.652 0 0 0 3.125.322c-.842 0-1.64.187-2.358.519v3.113a3.098 3.098 0 0 1 2.358-1.09A3.108 3.108 0 0 1 6.23 5.968a5.652 5.652 0 0 0 5.646 5.646 5.652 5.652 0 0 0 5.645-5.646V1.593c0-.702-.569-1.27-1.27-1.27z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default Butik;
