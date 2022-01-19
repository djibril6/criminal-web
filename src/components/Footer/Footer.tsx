import { Alert, Snackbar } from '@mui/material';
import { useIsMobile } from 'common/hooks';
import { useState, useCallback } from 'react';
import FooterDesktop from './Footer.desktop';
import FooterMobile from './Footer.mobile';

const Footer: React.FC = () => {
  const isMobile = useIsMobile();

  const [contact, setContact] = useState('');
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);

  const handleClose = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleSendContact = useCallback(() => {
    if (!contact) {
      setError(true);
    } else {
      setError(false);
    }
    handleClose();
  }, [handleClose, contact]);

  const handleContactChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setContact(e.target.value);
    },
    []
  );

  return (
    <>
      {isMobile ? (
        <FooterMobile
          contact={contact}
          contactChange={handleContactChange}
          onSendContact={handleSendContact}
        />
      ) : (
        <FooterDesktop
          contact={contact}
          contactChange={handleContactChange}
          onSendContact={handleSendContact}
        />
      )}

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={error ? 'error' : 'success'}
          sx={{ width: '30%' }}
        >
          {error
            ? 'Hata olmuş: Telefon yada email doldurmalısın'
            : 'telefonunuz alınmış'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Footer;
