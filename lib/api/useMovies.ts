import { useQuery } from '@tanstack/react-query';
import { tmdbClient } from './getSdk';

const useMovies = () => {
  return useQuery({
    queryKey: ['movies'],
    queryFn: async () => {
      const res = await tmdbClient.GetTomCruiseMovies();
      return res.searchPerson?.results?.[0]?.cast ?? [];
    },
  });
};

export default useMovies;
