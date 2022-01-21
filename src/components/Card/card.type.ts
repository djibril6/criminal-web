import { EVoteType } from 'pages/Home/types';

export type StatusType =
  | EVoteType.NONE
  | EVoteType.THUMB_UP
  | EVoteType.THUMB_DOWN;
