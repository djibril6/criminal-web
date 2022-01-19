type TName = string;
type TTel = string;
type TEmail = string;

export type TUser = {
  name: TName;
  tel: TTel;
  email: TEmail;
};

export enum EUserAction {
  SET_USER,
  SET_IS_AUTH,
  CLEAR,
}
