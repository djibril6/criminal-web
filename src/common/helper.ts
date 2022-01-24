import useAxios from 'axios-hooks';
import { ECategory, EVoteType, resultType } from 'pages/Vote/types';
import { useEffect, useMemo } from 'react';

export const useOrder = (selectedTab: ECategory) => {
  const [
    {
      data: criminalsList = {} as resultType,
      // error: criminalError,
      //   loading: criminalsLoading,
    },
    fetchCriminals,
  ] = useAxios<resultType>({}, { manual: true });

  useEffect(() => {
    fetchCriminals({
      url: `/criminals?limit=52&page=1&categories=${selectedTab}`,
    });
  }, [fetchCriminals, selectedTab]);

  const orderedPeople = useMemo(() => {
    return criminalsList.results?.sort((a, b) => {
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
  }, [criminalsList.results]);

  return orderedPeople;
};
