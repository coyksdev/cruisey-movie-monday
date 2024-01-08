import { GraphQLClient } from 'graphql-request';
import { getSdk } from '../generated/tmdb';

export const tmdbClient = getSdk(
  new GraphQLClient('https://tmdb-one-blue.vercel.app/')
);
