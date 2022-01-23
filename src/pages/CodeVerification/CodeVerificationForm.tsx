import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeDataType, VoteContext } from 'context/VoteContext';
import { TopLeftCircle, TopRightCircle } from 'components';
import useAxios from 'axios-hooks';
import styles from './css/CodeVerificationForm.module.css';
import { Snackbar, Alert, CircularProgress } from '@mui/material';

const CodeVerificationForm = () => {
  const navigate = useNavigate();
  const { updateCode, updateIsCodeVerified } = useContext(VoteContext);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');

  const [{ loading }, verifyCode] = useAxios<CodeDataType>(
    {},
    { manual: true }
  );

  const codeChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCode(e.target.value);
    },
    []
  );

  const handleNavigation = useCallback(
    (link: string) => () => {
      updateIsCodeVerified(false);
      navigate(link);
    },
    [navigate, updateIsCodeVerified]
  );

  const handleSubmit = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event?.preventDefault();

      if (code) {
        verifyCode({ url: `/codes/verify/${code}` })
          .then((res) => {
            updateCode(res.data);
            updateIsCodeVerified(true);
            navigate('/vote');
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
    },
    [code, verifyCode, updateCode, updateIsCodeVerified, navigate]
  );

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <div className={styles.page}>
      <div className={styles['form-wrapper']}>
        <form className={styles.form}>
          <h1>your voting code goes here</h1>
          <input type="text" placeholder="*****" onChange={codeChange} />
          <a href="https://www.cr34.com" target="_blank" rel="noreferrer">
            I don't have a voting code
          </a>
          <button className={styles['verify-btn']} onClick={handleSubmit}>
            verify {loading && <CircularProgress size={15} />}
          </button>
          <button
            className={styles['ignore-btn']}
            onClick={handleNavigation('/vote')}
          >
            ignore
          </button>
        </form>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
      </Snackbar>
      <TopRightCircle />
      <TopLeftCircle />
    </div>
  );
};

export default CodeVerificationForm;
