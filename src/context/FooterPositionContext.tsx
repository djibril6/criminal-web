import { createContext, Dispatch, useReducer } from 'react';
import { EFooterPositionAction } from 'common/types';
import { customTheme } from 'common/theme';

type TState = {
  bottom: number;
};

type TUserAction =
  | { type: EFooterPositionAction.SET_BOTTOM; payload: number }
  | { type: EFooterPositionAction.CLEAR };

type TContext = {
  state: TState;
  dispatch: Dispatch<TUserAction>;
};

const initialState: TState = { bottom: -700 * customTheme.ratio };

export const FooterPositionContext = createContext({} as TContext);

function userReducer(state: TState, action: TUserAction): TState {
  switch (action.type) {
    case EFooterPositionAction.SET_BOTTOM:
      return { ...state, bottom: action.payload };

    case EFooterPositionAction.CLEAR:
      return initialState;

    default:
      throw Error('Wrong value');
  }
}

type TFooterPositionContextProviderProps = {
  children: React.ReactNode;
};
const FooterPositionContextProvider: React.FC<
  TFooterPositionContextProviderProps
> = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <FooterPositionContext.Provider value={{ state, dispatch }}>
      {children}
    </FooterPositionContext.Provider>
  );
};

export default FooterPositionContextProvider;
