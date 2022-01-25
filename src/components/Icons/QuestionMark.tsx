import { SvgIcon, SvgIconProps } from '@mui/material';

const QuestionMarkIcon: React.FC<SvgIconProps & { defaultColor?: string }> = ({
  defaultColor = '#000',
  ...props
}) => (
  <SvgIcon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47 90"
    width={47}
    height={90}
    {...props}
  >
    <defs>
      <clipPath clipPathUnits="userSpaceOnUse" id="a">
        <path d="M-452-215h960v630h-960z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        d="M8.5 89.5c-4.2-1-6.9-5.3-5.9-9.6 1-4.2 5.2-6.9 9.5-5.9s7 5.2 6 9.5-5.3 6.9-9.6 6zm34-78.5c3.3 5.1 4.3 11.4 3 17.3q-.4 1.6-1.2 3.1c-2.3 4.8-6.2 8.6-11 10.9-4.1 2.1-9.3 5.5-10.3 9.8-.1.4-1.2 5.1-2.1 9.2-.4 1.6-1.3 2.9-2.7 3.8-1.3.8-3 1.1-4.5.7-3.2-.7-5.2-3.9-4.5-7.1.9-4.4 2.1-9.9 2.3-10.5q.5-2.3 1.7-4.4c4.1-6.6 13.4-9.9 13.4-9.9 5-1.8 8-6.9 7.2-12.1-.8-5.2-5.3-9.1-10.5-9.3-5.3-.2-10 3.4-11.2 8.5 0 0-.1.5-.3 1.2-.7 3.2-3.8 5.1-7 4.4-3.1-.7-5.1-3.9-4.3-7 .2-1 .4-1.8.4-1.9C3.9 5.6 16-1.9 28.1.8c6 1.3 11.2 5 14.4 10.2z"
        fill={defaultColor}
        stroke="#651919"
      />
    </g>
  </SvgIcon>
);

export default QuestionMarkIcon;
