import { GraphQLResolveInfo } from 'graphql';
import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Cast = {
  __typename?: 'Cast';
  character?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job?: Maybe<Scalars['String']['output']>;
  known_for_department?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  person: Person;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Creator = {
  __typename?: 'Creator';
  credit_id?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: Scalars['ID']['output'];
};

export type CreditsTv = {
  __typename?: 'CreditsTv';
  cast: Array<Cast>;
  crew: Array<CrewAggregate>;
  id: Scalars['ID']['output'];
};

export type Crew = {
  __typename?: 'Crew';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  job?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  person: Person;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type CrewAggregate = {
  __typename?: 'CrewAggregate';
  department?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobs?: Maybe<Array<Job>>;
  name: Scalars['String']['output'];
  popularity?: Maybe<Scalars['Float']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type DiscoverMoviesInput = {
  company: Scalars['String']['input'];
  genreId: Scalars['ID']['input'];
  language: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  provider: Scalars['String']['input'];
  sortBy: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type DiscoverSeriesInput = {
  genreId: Scalars['ID']['input'];
  language: Scalars['String']['input'];
  network: Scalars['String']['input'];
  page: Scalars['Int']['input'];
  sortBy: Scalars['String']['input'];
  year: Scalars['String']['input'];
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']['output']>;
  episode_number?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  production_code?: Maybe<Scalars['String']['output']>;
  season_number?: Maybe<Scalars['Int']['output']>;
  still_path?: Maybe<Scalars['String']['output']>;
  videos?: Maybe<Array<Maybe<EpisodeVideo>>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type EpisodeVideo = {
  __typename?: 'EpisodeVideo';
  id?: Maybe<Scalars['ID']['output']>;
  iso_639_1?: Maybe<Scalars['String']['output']>;
  iso_3166_1?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  official?: Maybe<Scalars['Boolean']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Job = {
  __typename?: 'Job';
  credit_id?: Maybe<Scalars['String']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  job?: Maybe<Scalars['String']['output']>;
};

export type Movie = {
  __typename?: 'Movie';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  credits?: Maybe<Credits>;
  genres?: Maybe<Array<Genre>>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  original_title?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  production_companies?: Maybe<Array<ProductionCompany>>;
  recommendations: Array<Maybe<Movie>>;
  release_date?: Maybe<Scalars['String']['output']>;
  reviews: Array<Maybe<Review>>;
  runtime?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  videos: Array<Maybe<Video>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
};

export type MovieCreateInput = {
  overview: Scalars['String']['input'];
  poster_path: Scalars['String']['input'];
  release_date: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type MoviesResponse = {
  __typename?: 'MoviesResponse';
  page: Scalars['Int']['output'];
  results: Array<Movie>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  movieCreate?: Maybe<Movie>;
};


export type MutationMovieCreateArgs = {
  input: MovieCreateInput;
};

export type Network = {
  __typename?: 'Network';
  id?: Maybe<Scalars['Int']['output']>;
  logo_path?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  origin_country?: Maybe<Scalars['String']['output']>;
};

export type Person = {
  __typename?: 'Person';
  biography?: Maybe<Scalars['String']['output']>;
  birthday?: Maybe<Scalars['String']['output']>;
  cast: Array<Movie>;
  deathday?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  place_of_birth?: Maybe<Scalars['String']['output']>;
  profile_path?: Maybe<Scalars['String']['output']>;
};

export type PersonResponse = {
  __typename?: 'PersonResponse';
  page: Scalars['Int']['output'];
  results: Array<Person>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type ProductionCompany = {
  __typename?: 'ProductionCompany';
  id: Scalars['ID']['output'];
  logo_path?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  origin_country?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  discoverMovies: MoviesResponse;
  discoverSeries: SeriesResponse;
  genres: Array<Genre>;
  genresSeries: Array<Genre>;
  movie?: Maybe<Movie>;
  nowPlayingMovies: MoviesResponse;
  person?: Maybe<Person>;
  searchMovies?: Maybe<MoviesResponse>;
  searchMulti?: Maybe<SearchResponse>;
  searchPerson?: Maybe<PersonResponse>;
  searchSeries?: Maybe<SeriesResponse>;
  series?: Maybe<Series>;
  upcomingMovies: MoviesResponse;
};


export type QueryDiscoverMoviesArgs = {
  input?: InputMaybe<DiscoverMoviesInput>;
};


export type QueryDiscoverSeriesArgs = {
  input?: InputMaybe<DiscoverSeriesInput>;
};


export type QueryMovieArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNowPlayingMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPersonArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySearchMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchMultiArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchPersonArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySearchSeriesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
  query: Scalars['String']['input'];
};


export type QuerySeriesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUpcomingMoviesArgs = {
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Review = {
  __typename?: 'Review';
  author_details: ReviewAuthor;
  content: Scalars['String']['output'];
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type ReviewAuthor = {
  __typename?: 'ReviewAuthor';
  avatar_path?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  page?: Maybe<Scalars['Int']['output']>;
  results?: Maybe<Array<Maybe<SearchResults>>>;
  total_pages?: Maybe<Scalars['Int']['output']>;
  total_results?: Maybe<Scalars['Int']['output']>;
};

export type SearchResults = Movie | Person | Series;

export type Season = {
  __typename?: 'Season';
  air_date?: Maybe<Scalars['String']['output']>;
  episode_count?: Maybe<Scalars['Int']['output']>;
  episodes?: Maybe<Array<Maybe<Episode>>>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  season_number?: Maybe<Scalars['Int']['output']>;
  seriesId: Scalars['ID']['output'];
};

export type Series = {
  __typename?: 'Series';
  backdrop_path?: Maybe<Scalars['String']['output']>;
  created_by?: Maybe<Array<Creator>>;
  credits?: Maybe<CreditsTv>;
  first_air_date?: Maybe<Scalars['String']['output']>;
  genres?: Maybe<Array<Genre>>;
  homepage?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  in_production?: Maybe<Scalars['Boolean']['output']>;
  languages?: Maybe<Array<Scalars['String']['output']>>;
  last_air_date?: Maybe<Scalars['String']['output']>;
  last_episode_to_air?: Maybe<Episode>;
  name: Scalars['String']['output'];
  networks?: Maybe<Array<Maybe<Network>>>;
  next_episode_to_air?: Maybe<Episode>;
  number_of_episodes?: Maybe<Scalars['Int']['output']>;
  number_of_seasons?: Maybe<Scalars['Int']['output']>;
  origin_country?: Maybe<Array<Scalars['String']['output']>>;
  original_language?: Maybe<Scalars['String']['output']>;
  original_name?: Maybe<Scalars['String']['output']>;
  overview?: Maybe<Scalars['String']['output']>;
  popularity?: Maybe<Scalars['Float']['output']>;
  poster_path?: Maybe<Scalars['String']['output']>;
  production_companies?: Maybe<Array<ProductionCompany>>;
  recommendations: Array<Maybe<Series>>;
  reviews: Array<Maybe<Review>>;
  seasons?: Maybe<Array<Season>>;
  status?: Maybe<Scalars['String']['output']>;
  tagline?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  videos: Array<Maybe<Video>>;
  vote_average?: Maybe<Scalars['Float']['output']>;
  vote_count?: Maybe<Scalars['Int']['output']>;
};

export type SeriesResponse = {
  __typename?: 'SeriesResponse';
  page: Scalars['Int']['output'];
  results: Array<Series>;
  total_pages: Scalars['Int']['output'];
  total_results: Scalars['Int']['output'];
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  site?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<RefType extends Record<string, unknown>> = {
  SearchResults: ( Movie ) | ( Person ) | ( Series );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Cast: ResolverTypeWrapper<Cast>;
  Creator: ResolverTypeWrapper<Creator>;
  Credits: ResolverTypeWrapper<Credits>;
  CreditsTv: ResolverTypeWrapper<CreditsTv>;
  Crew: ResolverTypeWrapper<Crew>;
  CrewAggregate: ResolverTypeWrapper<CrewAggregate>;
  DiscoverMoviesInput: DiscoverMoviesInput;
  DiscoverSeriesInput: DiscoverSeriesInput;
  Episode: ResolverTypeWrapper<Episode>;
  EpisodeVideo: ResolverTypeWrapper<EpisodeVideo>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  Genre: ResolverTypeWrapper<Genre>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Job: ResolverTypeWrapper<Job>;
  Movie: ResolverTypeWrapper<Movie>;
  MovieCreateInput: MovieCreateInput;
  MoviesResponse: ResolverTypeWrapper<MoviesResponse>;
  Mutation: ResolverTypeWrapper<{}>;
  Network: ResolverTypeWrapper<Network>;
  Person: ResolverTypeWrapper<Person>;
  PersonResponse: ResolverTypeWrapper<PersonResponse>;
  ProductionCompany: ResolverTypeWrapper<ProductionCompany>;
  Query: ResolverTypeWrapper<{}>;
  Review: ResolverTypeWrapper<Review>;
  ReviewAuthor: ResolverTypeWrapper<ReviewAuthor>;
  SearchResponse: ResolverTypeWrapper<Omit<SearchResponse, 'results'> & { results?: Maybe<Array<Maybe<ResolversTypes['SearchResults']>>> }>;
  SearchResults: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['SearchResults']>;
  Season: ResolverTypeWrapper<Season>;
  Series: ResolverTypeWrapper<Series>;
  SeriesResponse: ResolverTypeWrapper<SeriesResponse>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Video: ResolverTypeWrapper<Video>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Cast: Cast;
  Creator: Creator;
  Credits: Credits;
  CreditsTv: CreditsTv;
  Crew: Crew;
  CrewAggregate: CrewAggregate;
  DiscoverMoviesInput: DiscoverMoviesInput;
  DiscoverSeriesInput: DiscoverSeriesInput;
  Episode: Episode;
  EpisodeVideo: EpisodeVideo;
  Float: Scalars['Float']['output'];
  Genre: Genre;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Job: Job;
  Movie: Movie;
  MovieCreateInput: MovieCreateInput;
  MoviesResponse: MoviesResponse;
  Mutation: {};
  Network: Network;
  Person: Person;
  PersonResponse: PersonResponse;
  ProductionCompany: ProductionCompany;
  Query: {};
  Review: Review;
  ReviewAuthor: ReviewAuthor;
  SearchResponse: Omit<SearchResponse, 'results'> & { results?: Maybe<Array<Maybe<ResolversParentTypes['SearchResults']>>> };
  SearchResults: ResolversUnionTypes<ResolversParentTypes>['SearchResults'];
  Season: Season;
  Series: Series;
  SeriesResponse: SeriesResponse;
  String: Scalars['String']['output'];
  Video: Video;
};

export type CastResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cast'] = ResolversParentTypes['Cast']> = {
  character?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  known_for_department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreatorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Creator'] = ResolversParentTypes['Creator']> = {
  credit_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Credits'] = ResolversParentTypes['Credits']> = {
  cast?: Resolver<Array<ResolversTypes['Cast']>, ParentType, ContextType>;
  crew?: Resolver<Array<ResolversTypes['Crew']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CreditsTvResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreditsTv'] = ResolversParentTypes['CreditsTv']> = {
  cast?: Resolver<Array<ResolversTypes['Cast']>, ParentType, ContextType>;
  crew?: Resolver<Array<ResolversTypes['CrewAggregate']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Crew'] = ResolversParentTypes['Crew']> = {
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CrewAggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['CrewAggregate'] = ResolversParentTypes['CrewAggregate']> = {
  department?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobs?: Resolver<Maybe<Array<ResolversTypes['Job']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Episode'] = ResolversParentTypes['Episode']> = {
  air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  production_code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  still_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videos?: Resolver<Maybe<Array<Maybe<ResolversTypes['EpisodeVideo']>>>, ParentType, ContextType>;
  vote_average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EpisodeVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['EpisodeVideo'] = ResolversParentTypes['EpisodeVideo']> = {
  id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  iso_639_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  iso_3166_1?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  official?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenreResolvers<ContextType = any, ParentType extends ResolversParentTypes['Genre'] = ResolversParentTypes['Genre']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = any, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  credit_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  job?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = any, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  credits?: Resolver<Maybe<ResolversTypes['Credits']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original_title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  poster_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  production_companies?: Resolver<Maybe<Array<ResolversTypes['ProductionCompany']>>, ParentType, ContextType>;
  recommendations?: Resolver<Array<Maybe<ResolversTypes['Movie']>>, ParentType, ContextType>;
  release_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  runtime?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videos?: Resolver<Array<Maybe<ResolversTypes['Video']>>, ParentType, ContextType>;
  vote_average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoviesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MoviesResponse'] = ResolversParentTypes['MoviesResponse']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  movieCreate?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationMovieCreateArgs, 'input'>>;
};

export type NetworkResolvers<ContextType = any, ParentType extends ResolversParentTypes['Network'] = ResolversParentTypes['Network']> = {
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  logo_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  origin_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  biography?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  birthday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cast?: Resolver<Array<ResolversTypes['Movie']>, ParentType, ContextType>;
  deathday?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  place_of_birth?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonResponse'] = ResolversParentTypes['PersonResponse']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Person']>, ParentType, ContextType>;
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductionCompanyResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductionCompany'] = ResolversParentTypes['ProductionCompany']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  logo_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  origin_country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  discoverMovies?: Resolver<ResolversTypes['MoviesResponse'], ParentType, ContextType, Partial<QueryDiscoverMoviesArgs>>;
  discoverSeries?: Resolver<ResolversTypes['SeriesResponse'], ParentType, ContextType, Partial<QueryDiscoverSeriesArgs>>;
  genres?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  genresSeries?: Resolver<Array<ResolversTypes['Genre']>, ParentType, ContextType>;
  movie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieArgs, 'id'>>;
  nowPlayingMovies?: Resolver<ResolversTypes['MoviesResponse'], ParentType, ContextType, Partial<QueryNowPlayingMoviesArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'id'>>;
  searchMovies?: Resolver<Maybe<ResolversTypes['MoviesResponse']>, ParentType, ContextType, RequireFields<QuerySearchMoviesArgs, 'query'>>;
  searchMulti?: Resolver<Maybe<ResolversTypes['SearchResponse']>, ParentType, ContextType, RequireFields<QuerySearchMultiArgs, 'query'>>;
  searchPerson?: Resolver<Maybe<ResolversTypes['PersonResponse']>, ParentType, ContextType, RequireFields<QuerySearchPersonArgs, 'query'>>;
  searchSeries?: Resolver<Maybe<ResolversTypes['SeriesResponse']>, ParentType, ContextType, RequireFields<QuerySearchSeriesArgs, 'query'>>;
  series?: Resolver<Maybe<ResolversTypes['Series']>, ParentType, ContextType, RequireFields<QuerySeriesArgs, 'id'>>;
  upcomingMovies?: Resolver<ResolversTypes['MoviesResponse'], ParentType, ContextType, Partial<QueryUpcomingMoviesArgs>>;
};

export type ReviewResolvers<ContextType = any, ParentType extends ResolversParentTypes['Review'] = ResolversParentTypes['Review']> = {
  author_details?: Resolver<ResolversTypes['ReviewAuthor'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['ReviewAuthor'] = ResolversParentTypes['ReviewAuthor']> = {
  avatar_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResponse'] = ResolversParentTypes['SearchResponse']> = {
  page?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<Maybe<ResolversTypes['SearchResults']>>>, ParentType, ContextType>;
  total_pages?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  total_results?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SearchResultsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SearchResults'] = ResolversParentTypes['SearchResults']> = {
  __resolveType: TypeResolveFn<'Movie' | 'Person' | 'Series', ParentType, ContextType>;
};

export type SeasonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Season'] = ResolversParentTypes['Season']> = {
  air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  episode_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  episodes?: Resolver<Maybe<Array<Maybe<ResolversTypes['Episode']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poster_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  season_number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  seriesId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeriesResolvers<ContextType = any, ParentType extends ResolversParentTypes['Series'] = ResolversParentTypes['Series']> = {
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_by?: Resolver<Maybe<Array<ResolversTypes['Creator']>>, ParentType, ContextType>;
  credits?: Resolver<Maybe<ResolversTypes['CreditsTv']>, ParentType, ContextType>;
  first_air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  genres?: Resolver<Maybe<Array<ResolversTypes['Genre']>>, ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  in_production?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  languages?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  last_air_date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  last_episode_to_air?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  networks?: Resolver<Maybe<Array<Maybe<ResolversTypes['Network']>>>, ParentType, ContextType>;
  next_episode_to_air?: Resolver<Maybe<ResolversTypes['Episode']>, ParentType, ContextType>;
  number_of_episodes?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  number_of_seasons?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  origin_country?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  original_language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  overview?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  poster_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  production_companies?: Resolver<Maybe<Array<ResolversTypes['ProductionCompany']>>, ParentType, ContextType>;
  recommendations?: Resolver<Array<Maybe<ResolversTypes['Series']>>, ParentType, ContextType>;
  reviews?: Resolver<Array<Maybe<ResolversTypes['Review']>>, ParentType, ContextType>;
  seasons?: Resolver<Maybe<Array<ResolversTypes['Season']>>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  tagline?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  videos?: Resolver<Array<Maybe<ResolversTypes['Video']>>, ParentType, ContextType>;
  vote_average?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  vote_count?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SeriesResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SeriesResponse'] = ResolversParentTypes['SeriesResponse']> = {
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  results?: Resolver<Array<ResolversTypes['Series']>, ParentType, ContextType>;
  total_pages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  total_results?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VideoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Video'] = ResolversParentTypes['Video']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  site?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Cast?: CastResolvers<ContextType>;
  Creator?: CreatorResolvers<ContextType>;
  Credits?: CreditsResolvers<ContextType>;
  CreditsTv?: CreditsTvResolvers<ContextType>;
  Crew?: CrewResolvers<ContextType>;
  CrewAggregate?: CrewAggregateResolvers<ContextType>;
  Episode?: EpisodeResolvers<ContextType>;
  EpisodeVideo?: EpisodeVideoResolvers<ContextType>;
  Genre?: GenreResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  MoviesResponse?: MoviesResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Network?: NetworkResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonResponse?: PersonResponseResolvers<ContextType>;
  ProductionCompany?: ProductionCompanyResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Review?: ReviewResolvers<ContextType>;
  ReviewAuthor?: ReviewAuthorResolvers<ContextType>;
  SearchResponse?: SearchResponseResolvers<ContextType>;
  SearchResults?: SearchResultsResolvers<ContextType>;
  Season?: SeasonResolvers<ContextType>;
  Series?: SeriesResolvers<ContextType>;
  SeriesResponse?: SeriesResponseResolvers<ContextType>;
  Video?: VideoResolvers<ContextType>;
};


export type GetTomCruiseMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTomCruiseMoviesQuery = { __typename?: 'Query', searchPerson?: { __typename?: 'PersonResponse', results: Array<{ __typename?: 'Person', name: string, cast: Array<{ __typename?: 'Movie', id: string, title?: string | null, release_date?: string | null, overview?: string | null, poster_path?: string | null }> }> } | null };

export type SearchMoviesQueryVariables = Exact<{
  query: Scalars['String']['input'];
}>;


export type SearchMoviesQuery = { __typename?: 'Query', searchMovies?: { __typename?: 'MoviesResponse', results: Array<{ __typename?: 'Movie', id: string, title?: string | null, release_date?: string | null, overview?: string | null, poster_path?: string | null }> } | null };


export const GetTomCruiseMoviesDocument = gql`
    query GetTomCruiseMovies {
  searchPerson(query: "tom cruise", page: 1) {
    results {
      name
      cast {
        id
        title
        release_date
        overview
        poster_path
      }
    }
  }
}
    `;
export const SearchMoviesDocument = gql`
    query SearchMovies($query: String!) {
  searchMovies(query: $query, page: 1) {
    results {
      id
      title
      release_date
      overview
      poster_path
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetTomCruiseMovies(variables?: GetTomCruiseMoviesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTomCruiseMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTomCruiseMoviesQuery>(GetTomCruiseMoviesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTomCruiseMovies', 'query', variables);
    },
    SearchMovies(variables: SearchMoviesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SearchMoviesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SearchMoviesQuery>(SearchMoviesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'SearchMovies', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;