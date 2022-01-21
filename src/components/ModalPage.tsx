import { Modal, Box } from '@mui/material';

const style = {
  width: '95%',
  // height: 40,
  fontSize: 28,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

type ModalType = {
  children: React.ReactNode;
  open: boolean;
  onClose: VoidFunction;
};
const ModalPage: React.FC<ModalType> = ({ children, onClose, open }) => {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={onClose}
    >
      <Box bgcolor="#fff" height="100%">
        <Box sx={style} onClick={onClose}>
          x
        </Box>
        {children}
      </Box>
    </Modal>
  );
};

export default ModalPage;
