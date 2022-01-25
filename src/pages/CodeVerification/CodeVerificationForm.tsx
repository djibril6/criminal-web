import { useCallback, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CodeDataType, VoteContext } from 'context/VoteContext';
import { TopLeftCircle, TopRightCircle, ModalPage, MoreInfo } from 'components';
import useAxios from 'axios-hooks';
import styles from './css/CodeVerificationForm.module.css';
import { Snackbar, Alert, CircularProgress } from '@mui/material';

const CodeVerificationForm = () => {
  const navigate = useNavigate();
  const { updateCode, updateIsCodeVerified } = useContext(VoteContext);
  const [code, setCode] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string>('');
  const [openCard, setOpenCard] = useState(false);

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

  const onOpenCard = useCallback(() => {
    setOpenCard(true);
  }, []);

  const handleCloseCard = useCallback(() => {
    setOpenCard(false);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles['form-wrapper']}>
        <form className={styles.form}>
          <h1>your voting code goes here</h1>
          <input type="text" placeholder="*****" onChange={codeChange} />
          <span onClick={onOpenCard}>I don't have a voting code</span>
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
      <ModalPage open={openCard} onClose={handleCloseCard}>
        <MoreInfo
          title="Coming Soon!"
          details="This feature will be available right after the Kickstarter campaign"
        />
      </ModalPage>
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
