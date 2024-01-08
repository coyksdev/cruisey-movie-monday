import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Movie } from '../lib/generated/tmdb';
import { Image } from 'expo-image';
type MoviesListCardProps = {
  title?: string | null;
  imagePath?: string | null;
  releaseDate?: string | null;
  overview?: string | null;
};

const MoviesListCard = ({
  imagePath,
  title,
  releaseDate,
  overview,
}: MoviesListCardProps) => {
  const _releaseDate = releaseDate
    ? new Date(releaseDate).toLocaleDateString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      })
    : null;

  return (
    <View style={styles.root}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500/${imagePath}` }}
        style={styles.image}
      />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
        {_releaseDate ? (
          <Text style={styles.releaseDate}>{_releaseDate}</Text>
        ) : null}
        <View style={styles.spacer} />
        <Text style={styles.overview} numberOfLines={4}>
          {overview}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  spacer: {
    flex: 1,
  },
  root: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  info: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    flex: 1,
  },
  image: {
    width: 80,
    aspectRatio: 9 / 16,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  releaseDate: {
    marginTop: 5,
    fontSize: 12,
    color: '#888',
  },
  overview: {
    fontSize: 14,
  },
});

export default MoviesListCard;
