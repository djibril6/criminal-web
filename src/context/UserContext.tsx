import { createContext, Dispatch, useReducer } from 'react';
import { TUser, EUserAction } from 'common/types';

type TUserState = {
  user?: TUser;
  isAuth: boolean;
  token?: string;
};

type TUserAction =
  | { type: EUserAction.SET_USER; payload: TUser }
  | {
      type: EUserAction.SET_IS_AUTH;
      payload: boolean;
    }
  | { type: EUserAction.CLEAR };

type TContext = {
  state: TUserState;
  dispatch: Dispatch<TUserAction>;
};

const initialState: TUserState = { isAuth: false };
const resetedState: TUserState = {
  isAuth: false,
  token: '',
  user: {} as TUser,
};

export const UserContext = createContext({} as TContext);

function userReducer(state: TUserState, action: TUserAction): TUserState {
  switch (action.type) {
    case EUserAction.SET_IS_AUTH:
      return { ...state, isAuth: action.payload };
    case EUserAction.SET_USER:
      return { ...state, user: action.payload };
    case EUserAction.CLEAR:
      return resetedState;

    default:
      throw Error('Wrong value');
  }
}

type TUserContextProviderProps = {
  children: React.ReactNode;
};
const UserContextProvider: React.FC<TUserContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
