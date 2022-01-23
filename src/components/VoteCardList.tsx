import { Box, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import CARD_LIST from 'pages/Vote/cardList';
import VoteCard from './VoteCard';
import { EVoteType, PeopleType } from 'pages/Vote/types';
import { StatusType } from './Card/card.type';
import { VoteContext } from 'context/VoteContext';

let timer: NodeJS.Timeout;

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    display: 'inline-flex',
    flexWrap: 'unset',
    flexDirection: 'row',
    overflowX: 'auto',
    scrollbarWidth: 'none',
    scrollSnapType: 'x proximity',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    [theme.breakpoints.down('tablet')]: {
      width: '100%',
      height: '100%',
      overflowY: 'hidden',
    },
    [theme.breakpoints.up('tablet')]: {
      width: '100%',
      height: '100%',
    },
    [theme.breakpoints.up('laptop')]: {
      width: '100%',
      height: '80%',
      borderRadius: 10,
      overflow: 'hidden',
    },
  },
}));

type SwiperProps = {
  initialIndex: number;
  criminals: PeopleType[];
  onCloseModal?: VoidFunction;
};

const VoteCardList: React.FC<SwiperProps> = ({
  initialIndex,
  criminals,
  onCloseModal = () => {},
}) => {
  const styles = useStyles();
  const boxContainer = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(initialIndex);
  const { state, updadeVote } = useContext(VoteContext);

  const scroll = useCallback(() => {
    if (boxContainer.current) {
      let left = boxContainer.current.offsetWidth;

      const diff = boxContainer.current.scrollLeft - currentStep * left;
      let current = currentStep;
      if (Math.abs(diff) > boxContainer.current.offsetWidth / 2) {
        if (diff > 0) {
          current += 1;
        } else {
          current -= 1;
        }
      }
      left = left * current;
      setCurrentStep(current);
      boxContainer.current.scrollTo({ left, top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const scrollTo = useCallback(
    (index: number) => {
      if (boxContainer.current && index + 1 <= criminals.length && index >= 0) {
        setCurrentStep(index);
        boxContainer.current.scrollTo({
          left: boxContainer.current.offsetWidth * index,
          top: 0,
          behavior: 'smooth',
        });
      }
    },
    [criminals.length]
  );

  useEffect(() => {
    scrollTo(initialIndex);
  }, [initialIndex, scrollTo]);

  const handleVote = useCallback(
    (criminalId: string) => (vote: StatusType) => {
      const result = updadeVote(vote, criminalId);
      if (result) scrollTo(currentStep + 1);
    },
    [currentStep, scrollTo, updadeVote]
  );

  const onContainerScroll = useCallback(
    (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        scroll();
      }, 60);
    },
    [scroll]
  );

  const getStatus = useMemo(
    () => (id: string) => {
      const index = criminals.findIndex((item) => item.id === id);
      if (index < 0) return EVoteType.NONE;
      const vote = criminals[index].votes?.find(
        (item) => item.voter === state.code.code
      );
      if (!vote) return EVoteType.NONE;
      return vote.voteType;
    },
    [state.code, criminals]
  );

  return (
    <Box
      className={styles.container}
      ref={boxContainer}
      onScroll={onContainerScroll}
    >
      {criminals.map((item, idx) => (
        <Box
          key={item.id}
          style={{
            minWidth: '100%',
            maxWidth: '100%',
            paddingTop: 20,
          }}
        >
          <VoteCard
            card={CARD_LIST[idx]}
            criminal={item}
            rank={idx + 1}
            onVote={handleVote(item.id)}
            status={getStatus(item.id)}
            onCloseModal={onCloseModal}
          />
        </Box>
      ))}
    </Box>
  );
};

export default VoteCardList;
