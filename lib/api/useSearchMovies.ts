import { useQuery } from '@tanstack/react-query';
import { tmdbClient } from './getSdk';

type UseSearchMoviesProps = {
  q: string;
};

const useSearchMovies = ({ q }: UseSearchMoviesProps) => {
  return useQuery({
    initialData: [],
    queryKey: ['movies', q],
    queryFn: async () => {
      if (!q) return [];
      const res = await tmdbClient.SearchMovies({ query: q });
      return res.searchMovies?.results ?? [];
    },
    enabled: q.length > 0,
  });
};

export default useSearchMovies;
