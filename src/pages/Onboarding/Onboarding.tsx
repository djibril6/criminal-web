import { Box, Button, Typography } from '@mui/material';
import { customTheme } from 'common/theme';
import {
  BackIllustrationIcon,
  VoteText1Icon,
  VoteText2Icon,
  VoteIllustrationIcon,
} from 'components/Icons';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (link: string) => () => {
      navigate(link);
    },
    [navigate]
  );
  return (
    <Box height="100%" overflow="hidden" bgcolor={customTheme.color.blue}>
      <Box display="flex" justifyContent="flex-end" padding="10px">
        <Button
          variant="contained"
          size="small"
          color="secondary"
          onClick={handleNavigation('/menu')}
        >
          Start
        </Button>
      </Box>
      <Box
        bgcolor="#fff"
        borderRadius="50px 50px 0px 0px"
        height="100%"
        marginTop={5}
        position="relative"
        display="flex"
        justifyContent="flex-end"
        flexDirection="column"
        alignItems="center"
      >
        <Typography color="primary" variant="subtitle1">
          App Name
        </Typography>

        <Box width="100%" marginTop={20} marginBottom={10}>
          <Box width={390} height={450} position="relative" margin="auto">
            <VoteText1Icon
              style={{
                width: 147,
                height: 103,
                position: 'absolute',
                zIndex: 2,
                left: 30,
                top: -30,
                backgroundColor: '#fff',
              }}
            />
            <VoteText2Icon
              style={{
                width: 147,
                height: 89,
                position: 'absolute',
                zIndex: 2,
                right: 30,
                bottom: 110,
              }}
            />
            <VoteIllustrationIcon
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: 1,
                bottom: 0,
              }}
            />
            <BackIllustrationIcon
              style={{
                width: 168,
                height: 128,
                position: 'absolute',
                left: -50,
                top: 50,
                zIndex: 0,
              }}
            />
            <BackIllustrationIcon
              style={{
                width: 168,
                height: 128,
                position: 'absolute',
                right: -50,
                zIndex: 0,
              }}
            />
            <BackIllustrationIcon
              style={{
                width: 168,
                height: 128,
                position: 'absolute',
                right: -50,
                bottom: 20,
                zIndex: 0,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Onboarding;
