import { SvgIconProps, SvgIcon } from '@mui/material';

const Horloge: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="7"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="354 505 7 7"
    >
      <svg
        width="7"
        height="7"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        fill={props.defaultColor || '#FFF'}
        x="354"
        y="505"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="7"
          height="7"
          viewBox="0.642 0.37 5.713 5.714"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M3.499.37A2.86 2.86 0 0 0 .642 3.227 2.86 2.86 0 0 0 3.5 6.084a2.86 2.86 0 0 0 2.857-2.857A2.86 2.86 0 0 0 3.499.37zm0 5.3a2.446 2.446 0 0 1-2.444-2.443A2.446 2.446 0 0 1 3.5.783a2.446 2.446 0 0 1 2.444 2.444A2.446 2.446 0 0 1 3.499 5.67z"
          />
        </svg>
      </svg>
      <svg
        width="2"
        height="3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.169 0 1.662 3"
        fill={props.defaultColor || '#FFF'}
        x="357"
        y="506"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height="3"
          viewBox="0.292 0.678 1.239 2.237"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M1.325 2.49h-.003l-.617.01V.883a.207.207 0 1 0-.413 0V2.712l.003.024.002.015c.002.01.005.018.008.026l.004.013.013.024.006.01a.213.213 0 0 0 .018.022l.007.01a.204.204 0 0 0 .022.017l.009.007c.008.006.017.01.026.014l.009.005c.01.004.021.008.032.01l.006.002a.208.208 0 0 0 .042.004h.003l.826-.012a.206.206 0 0 0-.003-.413z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default Horloge;
