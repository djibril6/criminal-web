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
      >
        <Box
          position="absolute"
          top="0%"
          width="100%"
          height="60%"
          padding="15px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Typography color="primary" variant="subtitle1">
            Your voice matter
          </Typography>

          <Typography
            variant="body1"
            color="primary"
            maxHeight={120}
            overflow="auto"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
            officia exercitationem ex? Asperiores tempora reprehenderit ipsam
            magni pariatur tempore assumenda incidunt, similique. Asperiores
            tempora reprehenderit ipsam magni pariatur tempore assumenda
            incidunt, similique.
          </Typography>
        </Box>
        <Box position="absolute" bottom="12%" width="100%" height="40%">
          <Box width={390} height={350} position="relative" margin="auto">
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
