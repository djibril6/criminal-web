import { Box, Button } from '@mui/material';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Menu: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (link: string) => () => {
      navigate(link);
    },
    [navigate]
  );
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="10px"
      height="100%"
    >
      <Button
        fullWidth
        color="primary"
        variant="contained"
        onClick={handleNavigation('/code-verification')}
      >
        Vote
      </Button>
      <Button
        fullWidth
        color="primary"
        variant="contained"
        style={{
          marginTop: 10,
        }}
      >
        Play
      </Button>
    </Box>
  );
};

export default Menu;
