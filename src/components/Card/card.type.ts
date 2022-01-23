import { EVoteType } from 'pages/Vote/types';

export type StatusType =
  | EVoteType.NONE
  | EVoteType.THUMB_UP
  | EVoteType.THUMB_DOWN;
