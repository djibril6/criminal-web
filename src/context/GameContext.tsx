import useAxios from 'axios-hooks';
import { Loading } from 'components';
import { PeopleType } from 'pages/Vote/types';
import { createContext, Dispatch, useCallback, useReducer } from 'react';

type GuessType = {
  guess: string;
  status: boolean;
};
type GameStateType = {
  guesses: GuessType[];
  criminal: PeopleType;
  selectedCriminalId?: string | null;
  sessionCount: number;
  correctGuesses: number;
};

export enum EGameStateAction {
  SET_CRIMINAL,
  ADD_GUESS,
  INCREMENT_CORRECT_GUESSES,
  NEW_SESSION,
  PICK_CRIMINAL,
  CLEAR,
}
type GameStateAction =
  | { type: EGameStateAction.SET_CRIMINAL; payload: PeopleType }
  | { type: EGameStateAction.PICK_CRIMINAL; payload: string }
  | { type: EGameStateAction.ADD_GUESS; payload: GuessType }
  | { type: EGameStateAction.INCREMENT_CORRECT_GUESSES }
  | { type: EGameStateAction.NEW_SESSION }
  | { type: EGameStateAction.CLEAR };

type GameContextType = {
  state: GameStateType;
  dispatch: Dispatch<GameStateAction>;
  fetchNewCriminal: VoidFunction;
};

const initialState = {
  guesses: [] as GuessType[],
  criminal: {} as PeopleType,
  sessionCount: 1,
  correctGuesses: 0,
};

export const GameContext = createContext({} as GameContextType);

function reducer(state: GameStateType, action: GameStateAction): GameStateType {
  switch (action.type) {
    case EGameStateAction.INCREMENT_CORRECT_GUESSES:
      return { ...state, correctGuesses: state.correctGuesses + 1 };
    case EGameStateAction.NEW_SESSION:
      return {
        ...state,
        guesses: [],
        criminal: {} as PeopleType,
        selectedCriminalId: null,
        sessionCount: state.sessionCount + 1,
      };
    case EGameStateAction.ADD_GUESS:
      return { ...state, guesses: [...state.guesses, action.payload] };
    case EGameStateAction.SET_CRIMINAL:
      return { ...state, criminal: action.payload };
    case EGameStateAction.PICK_CRIMINAL:
      return { ...state, selectedCriminalId: action.payload };
    case EGameStateAction.CLEAR:
      return initialState;

    default:
      throw Error('unknown action type');
  }
}

type GameContextProps = {
  children: React.ReactNode;
};
const GameContextProvider: React.FC<GameContextProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [
    {
      // data: criminal = {} as PeopleType,
      // error: criminalError,
      loading: criminalLoading,
    },
    fetchRandomCriminal,
  ] = useAxios<PeopleType>(
    { url: '/criminals?shuffle=true' },
    { manual: true }
  );

  const fetchNewCriminal = useCallback(() => {
    fetchRandomCriminal().then((res) => {
      dispatch({
        type: EGameStateAction.SET_CRIMINAL,
        payload: res.data,
      });
    });
  }, [fetchRandomCriminal]);

  if (criminalLoading) return <Loading />;

  return (
    <GameContext.Provider value={{ state, dispatch, fetchNewCriminal }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
