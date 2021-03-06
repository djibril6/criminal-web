import { Modal, Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const style = {
  width: '95%',
  // height: 40,
  fontSize: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  cursor: 'pointer',
  position: 'absolute',
  right: '20px',
  top: '20px',
};

const useStyles = makeStyles((theme: Theme) => ({
  modalContentRoot: {
    position: 'relative',
    paddingTop: 30,
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
    },
    [theme.breakpoints.up('tablet')]: {
      width: '100%',
      height: '80%',
      backgroundColor: '#fff',
    },
    [theme.breakpoints.up('laptop')]: {
      width: '70%',
      height: '70%',
      margin: 'auto',
      marginTop: '5%',
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

type ModalType = {
  children: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
};
const ModalPage: React.FC<ModalType> = ({ children, onClose, open }) => {
  const styles = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
    >
      <Box className={styles.modalContentRoot}>
        <Box sx={style} onClick={onClose}>
          <FontAwesomeIcon icon={faTimesCircle} />
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalPage;
