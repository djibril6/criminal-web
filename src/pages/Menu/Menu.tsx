import { Box, Button, Typography } from '@mui/material';
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
      justifyContent="flex-start"
      padding="10px"
      height="100%"
    >
      <Box width="102%" marginBottom={2}>
        <Typography color="primary" variant="subtitle1">
          Your
        </Typography>
        <Typography color="primary" variant="subtitle1">
          voice matter
        </Typography>
      </Box>

      <Typography
        variant="body1"
        color="primary"
        overflow="auto"
        style={{ marginBottom: 40 }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim officia
        exercitationem ex? Asperiores tempora reprehenderit ipsam magni pariatur
        tempore assumenda incidunt, similique. Asperiores tempora reprehenderit
        ipsam magni pariatur tempore assumenda incidunt, similique.
      </Typography>

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
        variant="outlined"
        style={{
          marginTop: 10,
          borderWidth: 3,
        }}
      >
        Play
      </Button>
    </Box>
  );
};

export default Menu;
