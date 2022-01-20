import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card } from 'components';
import { StatusType } from 'components/Card/Card';
import { useCallback, useMemo, useState } from 'react';
// import useAxios from 'axios-hooks';
import hitler from 'statics/img/hitler.jpg';
import CARD_LIST from './cardList';

const useStyles = makeStyles((theme) => ({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 15,
  },
}));

export enum ECategory {
  HUMANITY = 'humanity',
  NATURE = 'nature',
}

export enum EVoteType {
  THUMB_UP = 'thumbUp',
  THUMB_DOWN = 'thumbDown',
  NONE = 'none',
}

type IVote = {
  voter: string;
  voteType: EVoteType;
  categories: ECategory;
};

type PeopleType = {
  name?: string;
  picture?: string;
  votes?: IVote[];
  categories: ECategory[];
  id: number;
};

const personList: PeopleType[] = [];

for (let i = 0; i < 52; i++) {
  personList.push({
    name: `Person ${i + 1}`,
    id: i,
    picture: hitler,
    votes: [],
    categories: [],
  });
}

const voteConvert: any = {
  up: EVoteType.THUMB_UP,
  down: EVoteType.THUMB_DOWN,
  none: EVoteType.NONE,
};

const VOTER = '1234';

function Home() {
  const [allPeople, setAllApeople] = useState(personList);
  const [update, setUpdate] = useState(false);
  const styles = useStyles();
  // const [{ data: hotelList = {} as any, loading: loadingHotel }] = useAxios({
  //   url: '/hotels?limit=16&page=1&shuffle=true',
  // });

  // if (loadingHotel) return <p>Loading...</p>;

  const handleVote = useCallback(
    (newStatus: StatusType, id: number, category: ECategory) => {
      const temp = allPeople;
      const index = temp.findIndex((person) => person.id === id);
      if (index < 0) return;
      let voteIndex: number | undefined = temp[index].votes!.findIndex(
        (item) => item.voter === VOTER
      );
      if (voteIndex < 0) {
        temp[index].votes?.push({
          categories: category,
          voteType: voteConvert[newStatus],
          voter: VOTER,
        });
      } else {
        temp[index].votes![voteIndex] = {
          categories: category,
          voteType: voteConvert[newStatus],
          voter: VOTER,
        };
      }
      setAllApeople(temp);
      setUpdate(!update);
    },
    [allPeople, update]
  );

  const getStatus = useMemo(
    () => (id: number) => {
      const index = allPeople.findIndex((person) => person.id === id);
      if (index < 0) return 'none';
      const vote = allPeople[index].votes?.find((item) => item.voter === VOTER);
      if (!vote) return 'none';
      switch (vote.voteType) {
        case EVoteType.THUMB_DOWN:
          return 'down';
        case EVoteType.THUMB_UP:
          return 'up';
        case EVoteType.NONE:
          return 'none';

        default:
          return 'none';
      }
    },
    [allPeople]
  );

  const orderedPeople = useMemo(
    () => () => {
      return allPeople.sort((a, b) => {
        const votesA = a.votes!.filter(
          (vote) => vote.voteType === EVoteType.THUMB_UP
        ).length;
        const votesB = b.votes!.filter(
          (vote) => vote.voteType === EVoteType.THUMB_UP
        ).length;
        if (votesA < votesB) {
          return 1;
        } else if (votesA > votesB) {
          return -1;
        }
        return 0;
      });
    },
    [allPeople]
  );

  return (
    <Box>
      <Box></Box>
      <Box className={styles.cardContainer}>
        {orderedPeople().map(
          ({ categories, id, name, picture, votes }, idx) => (
            <Card
              key={id}
              value={CARD_LIST[idx]?.value}
              color={CARD_LIST[idx]?.color}
              icon={CARD_LIST[idx]?.icon}
              status={getStatus(id)}
              person={{ image: picture!, name: name! }}
              onVote={(newStatus) =>
                handleVote(newStatus, id, ECategory.HUMANITY)
              }
            />
          )
        )}
      </Box>
    </Box>
  );
}

export default Home;
