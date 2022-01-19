import { SvgIconProps, SvgIcon } from '@mui/material';

const Bed: React.FC<SvgIconProps & { defaultColor?: string }> = (props) => {
  return (
    <SvgIcon
      {...props}
      width="10"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="160 1058 10 7"
    >
      <svg
        width="8"
        height="3"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0.543 8 1.915"
        fill={props.defaultColor || '#30b1cc'}
        x="161"
        y="1058"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="8"
          height="3"
          viewBox="0.187 0.316 7.48 1.79"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M.403 2.066c0-.476.388-.863.864-.863h1.939c.3 0 .566.155.72.389a.863.863 0 0 1 .722-.39h1.939c.476 0 .863.388.863.864v.04h.217v-.842a.949.949 0 0 0-.948-.948H1.135a.949.949 0 0 0-.948.948v.842h.216v-.04z"
          />
        </svg>
      </svg>
      <svg
        width="10"
        height="5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0.524 10 3.952"
        fill={props.defaultColor || '#30b1cc'}
        x="160"
        y="1060"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="10"
          height="5"
          viewBox="0.364 0.509 9.125 3.606"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M9.126.51H.727c-.2 0-.363.162-.363.362V2.98c0 .2.163.363.363.363H.88l-.18.504a.202.202 0 0 0 .381.134l.226-.638h7.241l.226.638a.202.202 0 0 0 .38-.134l-.178-.504h.151c.2 0 .363-.163.363-.363V.872c0-.2-.163-.363-.363-.363z"
          />
        </svg>
      </svg>
      <svg
        width="4"
        height="2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0.65 4 0.7"
        fill={props.defaultColor || '#30b1cc'}
        x="165"
        y="1059"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="4"
          height="2"
          viewBox="0.188 0.606 2.859 0.5"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M.648.606a.46.46 0 0 0-.46.46v.04h2.86v-.04a.46.46 0 0 0-.461-.46H.647z"
          />
        </svg>
      </svg>
      <svg
        width="4"
        height="2"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0.65 4 0.7"
        fill={props.defaultColor || '#30b1cc'}
        x="161"
        y="1059"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="4"
          height="2"
          viewBox="0.807 0.606 2.859 0.5"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M1.267.606a.46.46 0 0 0-.46.46v.04h2.859v-.04a.46.46 0 0 0-.46-.46h-1.94z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default Bed;
