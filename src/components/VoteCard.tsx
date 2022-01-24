import { Box, Button, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { customTheme } from 'common/theme';
import { EVoteType, PeopleType } from 'pages/Vote/types';
import { useCallback, useContext, useMemo, useState } from 'react';
import { StatusType } from './Card/card.type';
import CardDetails from './Card/CardDetails';
import { CheckIcon, UnCheckIcon, ExclamationIcon } from './Icons';
import { VoteContext } from 'context/VoteContext';
import { useIsMobile } from 'common/hooks';
import CardMobile from './Card/CardMobile';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    width: '90%',
    height: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row',
  },
}));

type VoteCardType = {
  // criminals: PeopleType[];
  onVote?: (type: StatusType) => void;
  status?: EVoteType;
  card: {
    value: JSX.Element;
    color: string;
    icon: JSX.Element;
  };
  criminal: PeopleType;
  rank: number;
  onCloseModal?: VoidFunction;
};
const VoteCard: React.FC<VoteCardType> = ({
  onVote = (type: StatusType) => {},
  status = EVoteType.NONE,
  card,
  criminal,
  rank,
  onCloseModal = () => {},
}) => {
  const isMobile = useIsMobile();
  const styles = useStyles();
  const [tempState, setTempState] = useState<EVoteType>();
  const { state } = useContext(VoteContext);
  const navigate = useNavigate();

  const onVerifyCode = useCallback(() => {
    if (isMobile) {
      navigate('/code-verification');
    } else {
      onCloseModal();
    }
  }, [navigate, onCloseModal, isMobile]);

  const getState = useMemo(() => {
    return tempState || status;
  }, [status, tempState]);
  return isMobile ? (
    <Box width="90%" margin="auto">
      <CardDetails
        value={card.value}
        color={card.color}
        icon={card.icon}
        status={EVoteType.NONE}
        person={{ image: criminal.picture!, name: criminal.name! }}
        rank={rank}
      />
      <Box marginTop={1} maxHeight={window.innerHeight / 4} overflow="auto">
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
            onClick={onVerifyCode}
          >
            Verify
          </Button>
        </Box>
      )}
    </Box>
  ) : (
    <Box className={styles.container}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginLeft={1}
        width={200}
      >
        <CardMobile
          value={card.value}
          color={card.color}
          icon={card.icon}
          person={{ image: criminal.picture!, name: criminal.name! }}
          modal
        />
      </Box>
      <Box width="65%" marginLeft={4} paddingTop={2}>
        <Box display="flex" justifyContent="space-between" marginBottom={1}>
          <Typography variant="h1">{criminal.name}</Typography>
          <Typography variant="h1">Rank: {rank}</Typography>
        </Box>
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

            <Typography variant="body1" onClick={() => onVote(EVoteType.NONE)}>
              Click here to skip
            </Typography>

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
              onClick={onVerifyCode}
            >
              Verify
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default VoteCard;
