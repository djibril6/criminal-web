import { SvgIconProps, SvgIcon } from '@mui/material';

const UserGroup: React.FC<SvgIconProps & { defaultColor?: string }> = (
  props
) => {
  return (
    <SvgIcon
      {...props}
      width="9"
      height="8"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="304 449 9 8"
    >
      <svg
        width="7"
        height="8"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.155 0 6.691 8"
        fill={props.defaultColor || '#30b1cc'}
        x="304"
        y="449"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="7"
          height="8"
          viewBox="0.861 0.182 5.852 6.997"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M6.079 5.638L4.864 5.03a.334.334 0 0 1-.186-.3V4.3a2.902 2.902 0 0 0 .467-.859.505.505 0 0 0 .296-.46v-.51a.507.507 0 0 0-.127-.333V1.46a1.14 1.14 0 0 0-.267-.83c-.26-.298-.685-.45-1.26-.45s-1 .152-1.26.45c-.302.343-.274.76-.267.83v.677a.507.507 0 0 0-.127.334v.509c0 .154.07.299.19.395.117.462.361.81.446.92v.422a.336.336 0 0 1-.175.295l-1.135.619c-.369.201-.598.587-.598 1.008v.539h5.852v-.514c0-.438-.243-.831-.634-1.027z"
          />
        </svg>
      </svg>
      <svg
        width="5"
        height="8"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0.214 0 4.573 8"
        fill={props.defaultColor || '#30b1cc'}
        x="308"
        y="449"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="8"
          viewBox="0.868 0.835 3.626 6.344"
        >
          <path
            paintOrder="stroke fill markers"
            fillRule="evenodd"
            d="M3.917 5.783L2.68 5.247a.254.254 0 0 1-.089-.098h.83s.048.004.123.004c.136 0 .335-.015.508-.09A.378.378 0 0 0 4.21 4.5c-.237-.338-.79-1.22-.808-2.115 0-.015-.05-1.537-1.553-1.55-.151.002-.294.02-.43.053.101.266.092.505.085.582v.602a.695.695 0 0 1 .128.4v.509a.7.7 0 0 1-.332.593 3.096 3.096 0 0 1-.432.792v.364c0 .056.03.104.08.13l1.216.607c.456.228.74.687.74 1.197v.515h1.59v-.47c0-.394-.218-.747-.577-.926z"
          />
        </svg>
      </svg>
    </SvgIcon>
  );
};

export default UserGroup;
