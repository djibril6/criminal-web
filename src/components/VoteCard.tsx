import { Box, Button, Typography } from '@mui/material';
import { customTheme } from 'common/theme';
import { EVoteType, PeopleType } from 'pages/Home/types';
import { useContext, useMemo, useState } from 'react';
import { StatusType } from './Card/card.type';
import CardDetails from './Card/CardDetails';
import { CheckIcon, UnCheckIcon, ExclamationIcon } from './Icons';
import { VoteContext } from 'context/VoteContext';

type VoteCardType = {
  // criminals: PeopleType[];
  onVote?: (type: StatusType) => void;
  status?: EVoteType;
  card: {
    value: string;
    color: string;
    icon: string;
  };
  criminal: PeopleType;
  rank: number;
};
const VoteCard: React.FC<VoteCardType> = ({
  onVote = (type: StatusType) => {},
  status = EVoteType.NONE,
  card,
  criminal,
  rank,
}) => {
  const [tempState, setTempState] = useState<EVoteType>();
  const { state } = useContext(VoteContext);

  const getState = useMemo(() => {
    return tempState || status;
  }, [status, tempState]);
  return (
    <Box width="90%" margin="auto">
      <CardDetails
        value={card.value}
        color={card.color}
        icon={card.icon}
        status={EVoteType.NONE}
        person={{ image: criminal.picture!, name: criminal.name! }}
        rank={rank}
      />
      <Box marginTop={1}>
        <Typography variant="h1">Crimes</Typography>
        <Typography
          variant="body1"
          style={{
            textAlign: 'justify',
            color: '#000',
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          nesciunt ab magnam nam ipsum! Explicabo id quibusdam, odio corrupti
          quos nam sequi?
        </Typography>
      </Box>

      {state.isCodeVerified ? (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginTop={2}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CheckIcon
              defaultColor={
                Boolean(getState === EVoteType.THUMB_UP)
                  ? customTheme.color.green
                  : customTheme.color.grey
              }
              style={{
                width: 78,
                height: 78,
                cursor: 'pointer',
              }}
              onClick={() => {
                setTempState(
                  getState === EVoteType.THUMB_UP
                    ? EVoteType.NONE
                    : EVoteType.THUMB_UP
                );
                onVote(
                  status === EVoteType.THUMB_UP
                    ? EVoteType.NONE
                    : EVoteType.THUMB_UP
                );
              }}
            />
            <Typography
              variant="h1"
              style={{
                color: Boolean(getState === EVoteType.THUMB_UP)
                  ? customTheme.color.green
                  : customTheme.color.grey,
              }}
            >
              Agree
            </Typography>
          </Box>

          <Typography variant="body1">Swipe to skip</Typography>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <UnCheckIcon
              defaultColor={
                Boolean(getState === EVoteType.THUMB_DOWN)
                  ? customTheme.color.red
                  : customTheme.color.grey
              }
              style={{
                width: 78,
                height: 78,
                cursor: 'pointer',
              }}
              onClick={() => {
                setTempState(
                  getState === EVoteType.THUMB_DOWN
                    ? EVoteType.NONE
                    : EVoteType.THUMB_DOWN
                );
                onVote(
                  status === EVoteType.THUMB_DOWN
                    ? EVoteType.NONE
                    : EVoteType.THUMB_DOWN
                );
              }}
            />
            <Typography
              variant="h1"
              style={{
                color: Boolean(getState === EVoteType.THUMB_DOWN)
                  ? customTheme.color.red
                  : customTheme.color.grey,
              }}
            >
              Agree
            </Typography>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          marginTop="15px"
        >
          <ExclamationIcon
            style={{ width: 50, height: 50, marginBottom: 10 }}
          />
          <Typography variant="h2" color="error">
            You should verify your voting code first
          </Typography>
          <Button
            size="large"
            color="error"
            variant="contained"
            style={{ borderRadius: 5, marginTop: 7 }}
          >
            Verify
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default VoteCard;
