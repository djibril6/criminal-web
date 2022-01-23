import { Alert, Snackbar } from '@mui/material';
import useAxios from 'axios-hooks';
import { ECategory, EVoteType } from 'pages/Vote/types';
import { createContext, useCallback, useState } from 'react';

export type CodeDataType = {
  code: string;
  categories: ECategory[];
  id: string;
};

type StateType = {
  code: CodeDataType;
  isCodeVerified: boolean;
};
type VoteContextType = {
  state: StateType;
  updadeVote: (newStatus: EVoteType, id: string) => boolean;
  updateCode: (newCode: CodeDataType) => void;
  updateIsCodeVerified: (status: boolean) => void;
};

export const VoteContext = createContext({} as VoteContextType);

type VoteContextProviderProps = {
  children: React.ReactNode;
};
const VoteContextProvider: React.FC<VoteContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<StateType>({
    code: {} as CodeDataType,
    isCodeVerified: false,
  });
  const [error, setError] = useState<string>('');
  const [open, setOpen] = useState(false);
  const [, update] = useAxios(
    {
      method: 'PATCH',
    },
    { manual: true }
  );
  const updadeVote = useCallback(
    (newStatus: EVoteType, id: string) => {
      if (state.code) {
        update({
          url: `/criminals/${id}`,
          data: {
            voter: state.code,
            voteType: newStatus,
          },
        });
        setError('');
        return true;
      } else {
        setError('You must fill a code to give your vote');
        setOpen(true);
        return false;
      }
    },
    [state.code, update]
  );

  const updateCode = useCallback(
    (newCode: CodeDataType) => {
      setState({ ...state, code: newCode });
    },
    [state]
  );

  const updateIsCodeVerified = useCallback(
    (status: boolean) => {
      setState({ ...state, isCodeVerified: status });
    },
    [state]
  );

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);
  return (
    <VoteContext.Provider
      value={{ updadeVote, updateCode, updateIsCodeVerified, state }}
    >
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      {children}
    </VoteContext.Provider>
  );
};

export default VoteContextProvider;
