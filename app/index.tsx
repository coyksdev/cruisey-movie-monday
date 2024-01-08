import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import useMovies from '../lib/api/useMovies';
import MoviesListCard from '../components/movies-list-card';
import SearchBox from '../components/search-box';
import useSearchMovies from '../lib/api/useSearchMovies';
import { useDebounce } from '../lib/utils/useDebounce';
import Error from '../components/error';

const Index = () => {
  const { data: movies, isError: isMoviesError } = useMovies();

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const {
    data: searchedMovies,
    isError: isSearchMoviesError,
    isFetching: isSearchingMovies,
  } = useSearchMovies({
    q: debouncedSearchTerm,
  });

  const onSearch = useCallback((text: string) => {
    setSearchTerm(text);
  }, []);

  const moviesData =
    searchedMovies && searchedMovies?.length < 1 ? movies : searchedMovies;

  if (isMoviesError || isSearchMoviesError) {
    return <Error />;
  }

  return (
    <FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <View>
          <SearchBox
            value={searchTerm}
            style={styles.searchBox}
            onSearch={onSearch}
          />
          {isSearchingMovies && (
            <ActivityIndicator
              size={30}
              color={'black'}
              style={styles.loading}
            />
          )}
        </View>
      }
      style={styles.flatList}
      data={moviesData}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
      renderItem={({ item }) => (
        <MoviesListCard
          title={item.title}
          imagePath={item.poster_path}
          releaseDate={item.release_date}
          overview={item.overview}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  searchBox: {
    marginBottom: 10,
    paddingTop: 10,
  },
  flatList: { margin: 10, marginTop: 0 },
  itemSeparator: { height: 10 },
  loading: {
    paddingBottom: 10,
  },
});

export default Index;
