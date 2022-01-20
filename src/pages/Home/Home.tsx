import { Box, TextField } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Card } from 'components';
import { useCallback, useMemo, useState } from 'react';
import useAxios from 'axios-hooks';
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
};

type PeopleType = {
  name?: string;
  picture?: string;
  votes?: IVote[];
  categories: ECategory;
  id: string;
};

type resultType = {
  limit: number;
  page: number;
  totalPages: number;
  totalResults: number;
  results: PeopleType[];
};

function Home() {
  const [code, setCode] = useState('');
  const styles = useStyles();
  const [
    {
      data: criminalsList = {} as resultType,
      // error: criminalError,
      loading: criminalsLoading,
    },
  ] = useAxios<resultType>({
    url: '/criminals?limit=52&page=1',
  });

  const [, updateVote] = useAxios(
    {
      method: 'PATCH',
    },
    { manual: true }
  );

  const handleVote = useCallback(
    (newStatus: EVoteType, id: string) => {
      updateVote({
        url: `/criminals/${id}`,
        data: {
          voter: code,
          voteType: newStatus,
        },
      });
      // const temp = allPeople;
      // const index = temp.findIndex((person) => person.id === id);
      // if (index < 0) return;
      // let voteIndex: number | undefined = temp[index].votes!.findIndex(
      //   (item) => item.voter === code
      // );
      // if (voteIndex < 0) {
      //   temp[index].votes?.push({
      //     // categories: category,
      //     voteType: newStatus,
      //     voter: code,
      //   });
      // } else {
      //   temp[index].votes![voteIndex] = {
      //     // categories: category,
      //     voteType: newStatus,
      //     voter: code,
      //   };
      // }
      // setAllApeople(temp);
      // setUpdate(!update);
    },
    [code, updateVote]
  );

  const getStatus = useMemo(
    () => (id: string) => {
      const index = criminalsList.results.findIndex((item) => item.id === id);
      if (index < 0) return EVoteType.NONE;
      const vote = criminalsList.results[index].votes?.find(
        (item) => item.voter === code
      );
      if (!vote) return EVoteType.NONE;
      return vote.voteType;
    },
    [code, criminalsList]
  );

  const orderedPeople = useMemo(
    () => () => {
      return criminalsList.results.sort((a, b) => {
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
    [criminalsList]
  );

  const handleCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setCode(e.target.value);
    },
    []
  );

  if (criminalsLoading) return <p>Loading...</p>;

  return (
    <Box>
      <Box>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          onChange={handleCodeChange}
        />
      </Box>
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
              onVote={(newStatus) => handleVote(newStatus, id)}
            />
          )
        )}
      </Box>
    </Box>
  );
}

export default Home;
