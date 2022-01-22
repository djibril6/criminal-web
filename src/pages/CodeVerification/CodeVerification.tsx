import {
  Box,
  Button,
  Typography,
  TextField,
  Snackbar,
  Alert,
  CircularProgress,
} from '@mui/material';
import { styled } from '@mui/styles';
import { customTheme } from 'common/theme';
import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeDataType, VoteContext } from 'context/VoteContext';
import useAxios from 'axios-hooks';

const CodeInput = styled(TextField)({
  '& label.Mui-focused': {
    color: customTheme.color.blue,
  },
  '& .MuiInput-underline:after': {
    borderColor: customTheme.color.blue,
    borderWidth: 2,
    borderRadius: 10,
    color: customTheme.color.blue,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: customTheme.color.blue,
      borderWidth: 2,
      borderRadius: 10,
      color: customTheme.color.blue,
    },
    '&:hover fieldset': {
      borderColor: customTheme.color.blue,
      borderWidth: 2,
      borderRadius: 10,
      color: customTheme.color.blue,
    },
    '&.Mui-focused fieldset': {
      borderColor: customTheme.color.blue,
      borderWidth: 2,
      borderRadius: 10,
      color: customTheme.color.blue,
    },
  },
});

const CodeVerification: React.FC = () => {
  const navigate = useNavigate();
  const { updateCode, updateIsCodeVerified } = useContext(VoteContext);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');

  const [{ loading }, verifyCode] = useAxios<CodeDataType>(
    {},
    { manual: true }
  );

  const handleNavigation = useCallback(
    (link: string) => () => {
      updateIsCodeVerified(false);
      navigate(link);
    },
    [navigate, updateIsCodeVerified]
  );

  const codeChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCode(e.target.value);
    },
    []
  );

  const handleSubmit = useCallback(() => {
    if (code) {
      verifyCode({ url: `/codes/verify/${code}` })
        .then((res) => {
          updateCode(res.data);
          updateIsCodeVerified(true);
          navigate('/home');
        })
        .catch((error) => {
          setError('This code is not valid');
          updateIsCodeVerified(false);
          setOpen(true);
        });
    } else {
      setError("Let' fill the code first");
      setOpen(true);
    }
  }, [code, verifyCode, updateCode, updateIsCodeVerified, navigate]);

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="10px"
      height="95%"
    >
      <Typography
        color="primary"
        variant="h5"
        style={{ padding: 20, textAlign: 'center' }}
      >
        Your voting code goes here
      </Typography>
      <CodeInput
        fullWidth
        id="outlined-basic"
        variant="outlined"
        size="small"
        color="primary"
        placeholder="* * * * * * * * *  *"
        style={{ borderRadius: 30, marginTop: 30 }}
        onChange={codeChange}
      />
      <Box
        display="flex"
        justifyContent="flex-end"
        marginBottom="30px"
        marginTop="10px"
        width="100%"
      >
        <Typography
          color="primary"
          variant="body2"
          style={{ textDecoration: 'underline' }}
        >
          I don't have a voting code
        </Typography>
      </Box>

      <Button
        fullWidth
        color="success"
        variant="contained"
        style={{
          marginTop: 10,
          color: '#fff',
        }}
        onClick={handleSubmit}
      >
        Verify {loading && <CircularProgress />}
      </Button>

      <Button
        fullWidth
        color="error"
        variant="contained"
        style={{
          marginTop: 10,
        }}
        onClick={handleNavigation('/home')}
      >
        Ignore
      </Button>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
    </Box>
  );
};

export default CodeVerification;
